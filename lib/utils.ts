import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { HostelTypings } from "@/typings/database";

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

// Utility function to map documents to HostelTypings
export function mapHostels(documents: any[]): HostelTypings[] {
  return documents.map((doc) => ({
    name: doc.name,
    address: doc.address,
    price: doc.price,
    type: doc.type,
    room: doc.room,
    bath: doc.bath,
    square_feet: doc.square_feet,
    description: doc.description,
    contact_number: doc.contact_number,
    image_urls: doc.image_urls,
    water_supply: doc.water_supply,
    electricity: doc.electricity,
    kitchen: doc.kitchen,
    security: doc.security,
    furnishing: doc.furnishing,
    available: doc.available,
    ratings: doc.ratings,
    hostel_id: doc.hostel_id,
    contact_name: doc.contact_name,
    $id: doc.$id,
    $createdAt: doc.$createdAt,
    $updatedAt: doc.$updatedAt,
  }));
}
