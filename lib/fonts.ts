import { Archivo, Hanken_Grotesk } from "next/font/google";

// Self-hosted at build time by Next. Weights match the design
// (Archivo display now uses 500 alongside the heavier cuts).
export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});
