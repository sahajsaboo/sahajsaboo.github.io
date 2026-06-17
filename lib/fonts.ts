import { Instrument_Serif, Inter } from "next/font/google";

// Change the site fonts here. Keep the variable names the same.
export const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

export const displayFont = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: "400"
});
