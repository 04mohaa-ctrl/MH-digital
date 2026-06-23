import { Cormorant_Garamond } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Jost } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-cafe",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-salon",
});

export { cormorant, dmSans, jost };
