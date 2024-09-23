"use server";
import { databases } from "../appwrite.config";
import { HostelTypings } from "@/typings/database";
import { Query } from "node-appwrite";

const { APPWRITE_DATABASE_ID, APPWRITE_HOSTELS_ID } = process.env;

// Function to get all events from the database
export async function fetchAllHostels() {
  try {
    const data = await databases.listDocuments(
      APPWRITE_DATABASE_ID as string,
      APPWRITE_HOSTELS_ID as string,
      [Query.orderDesc("")]
    );

    const hostels: HostelTypings[] = data.documents.map((doc) => ({
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

    return { success: true, data: hostels, total: data.total };
  } catch (error: any) {
    console.error(`Failed to fetch Hostels: ${error.message}`);
    return { success: false, msg: error.message };
  }
}
