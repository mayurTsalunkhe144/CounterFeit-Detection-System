import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SCANS_URl_Deployed =
  "https://counter-feit-detection-system.vercel.app/dashboard/scans/";

export const SCANS_URl_Local =
  "https://counter-feit-detection-system.vercel.app/dashboard/scans/";
