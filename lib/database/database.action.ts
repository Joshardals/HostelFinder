"use server";
import { databases } from "../appwrite.config";
import { HostelTypings } from "@/typings/database";
import { Query } from "node-appwrite";

const { APPWRITE_DATABASE_ID, APPWRITE_HOSTELS_ID } = process.env;

// Helper function to simulate a delay
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to get all events from the database
export async function fetchAllHostels() {
  try {
    await delay(1000);

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

// export async function fetchHostelsByLocation(location: string) {
//   try {
//     await delay(1000);
//     // Query the Hostels collection to retrieve all hostel documents
//     const data = await databases.listDocuments(
//       APPWRITE_DATABASE_ID as string,
//       APPWRITE_HOSTELS_ID as string,
//       [Query.contains("address", location)]
//     );

//     // Return success status with the list of hostels
//     return { success: true, data: data.documents, total: data.total };
//   } catch (error: any) {
//     console.error(`Failed to fetch Hostels: ${error.message}`);
//     return { success: false, msg: error.message };
//   }
// }

// export async function fetchHostelsByPriceRange(
//   minPrice: number,
//   maxPrice: number
// ) {
//   try {
//     // Construct the query based on minPrice and maxPrice
//     let queries = [];

//     if (minPrice > 0) {
//       queries.push(Query.greaterThanEqual("price", minPrice));
//     }

//     if (maxPrice > 0) {
//       queries.push(Query.lessThanEqual("price", maxPrice));
//     }

//     // Query the database to retrieve hostels within the price range
//     const data = await databases.listDocuments(
//       APPWRITE_DATABASE_ID as string,
//       APPWRITE_HOSTELS_ID as string,
//       queries
//     );

//     return { success: true, data: data.documents, total: data.total };
//   } catch (error: any) {
//     console.error(`Failed to fetch hostels by price range: ${error.message}`);
//     return { success: false, msg: error.message };
//   }
// }
