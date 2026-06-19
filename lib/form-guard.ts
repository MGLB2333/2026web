// Shared, dependency-free hardening for the public contact forms.
// Layered with the existing honeypot + field validation in each route.

/** Minimum time (ms) a human plausibly takes to fill a form. Faster = bot. */
const MIN_FILL_MS = 2000;
/** Reject form tokens older than this (stale / replayed). */
const MAX_FILL_MS = 1000 * 60 * 60 * 6; // 6 hours

/** Per-field length ceilings; anything longer is payload-stuffing, not a real enquiry. */
export const FIELD_MAX: Record<string, number> = {
  first: 80,
  last: 80,
  email: 160,
  company: 120,
  title: 120,
  reason: 40,
  topic: 200,
  message: 5000,
};

/** Verify the request originates from our own site (Origin/Referer host === Host). */
export function sameOrigin(request: Request): boolean {
  const host = request.headers.get("host");
  if (!host) return false;
  const source = request.headers.get("origin") ?? request.headers.get("referer");
  if (!source) return false; // a real browser fetch sends Origin (or at least Referer) on POST
  try {
    return new URL(source).host === host;
  } catch {
    return false;
  }
}

/** True if a value carries CR/LF used for email header injection. */
export function hasInjection(value: string): boolean {
  return /[\r\n]/.test(value);
}

/** First field name that exceeds its cap, or null if all are within limits. */
export function overLengthField(fields: Record<string, string>): string | null {
  for (const [key, value] of Object.entries(fields)) {
    const max = FIELD_MAX[key];
    if (typeof max === "number" && value.length > max) return key;
  }
  return null;
}

/** Validate the elapsed time since the form was rendered (anti-bot time trap). */
export function fillTimeOk(ts: unknown): boolean {
  const started = Number(ts);
  if (!Number.isFinite(started) || started <= 0) return false;
  const elapsed = Date.now() - started;
  return elapsed >= MIN_FILL_MS && elapsed <= MAX_FILL_MS;
}
