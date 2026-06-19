import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hello@lightboxtv.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "LightBoxTV Website <onboarding@resend.dev>";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Cannes form: RESEND_API_KEY is not set.");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users leave this empty; bots tend to fill every field.
  if (typeof data.company_url === "string" && data.company_url.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const first = String(data.first ?? "").trim();
  const last = String(data.last ?? "").trim();
  const title = String(data.title ?? "").trim();
  const company = String(data.company ?? "").trim();
  const email = String(data.email ?? "").trim();
  const topic = String(data.topic ?? "").trim();

  if (!first || !last || !title || !company || !email) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const name = `${first} ${last}`;

  const lines = [
    `Name: ${name}`,
    `Job title: ${title}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Meeting topic: ${topic || "—"}`,
  ];

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Cannes meeting request — ${name}, ${company}`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Cannes form: Resend error", error);
      return NextResponse.json({ error: "Something went wrong sending your request." }, { status: 502 });
    }
  } catch (err) {
    console.error("Cannes form: unexpected error", err);
    return NextResponse.json({ error: "Something went wrong sending your request." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
