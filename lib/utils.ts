import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(dateString: string): string {
  const now = new Date();
  const addedDate = new Date(dateString);

  // Convert dates to timestamps (milliseconds since epoch)
  const nowTimestamp = now.getTime();
  const addedDateTimestamp = addedDate.getTime();

  // Calculate the difference in milliseconds
  const diffInMs = nowTimestamp - addedDateTimestamp;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return "Today";
  } else if (diffInDays === 1) {
    return "1 day ago";
  } else {
    return `${diffInDays} days ago`;
  }
}

export function toNaira(value: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
}
