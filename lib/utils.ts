import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const teamColor = {
  csk: { primary: "#FEE000", secondary: "#1C3988" },
  mi: { primary: "#045093", secondary: "#FFD100" },
  rcb: { primary: "#D71920", secondary: "#85754E", accent: "#000000" },
  kkr: { primary: "#3A225D", secondary: "#DAC026" },
  dc: { primary: "#004BA0", secondary: "#E03A3E" },
  srh: { primary: "#F66A21", secondary: "#000000" },
  rr: { primary: "#EA1A90", secondary: "#003399" },
  pbks: { primary: "#D71920", secondary: "#A2AAAD" },
  gt: { primary: "#0A1E40", secondary: "#E9C046" },
  lsg: { primary: "#1C64B9", secondary: "#F58220" },
};
