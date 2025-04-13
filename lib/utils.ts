import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SCANS_URl_Deployed =
  "https://counter-feit-detection-system.vercel.app/";

export const SCANS_URl_Local =
  "https://counter-feit-detection-system.vercel.app/";

export const formatDate = (dateString: string) => {
  const isoTimestamp = dateString;
  const dateObj = new Date(isoTimestamp || "");
  const formatted_date = dateObj.toLocaleString("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return formatted_date;
};
