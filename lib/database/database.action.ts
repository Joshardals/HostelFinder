"use server";
import { databases } from "../appwrite.config";
import { Query } from "node-appwrite";
import { mapHostels } from "../utils";

const { APPWRITE_DATABASE_ID, APPWRITE_HOSTELS_ID } = process.env;

// Function to get all events from the database
export async function fetchAllHostels() {
  try {
    const data = await databases.listDocuments(
      APPWRITE_DATABASE_ID as string,
      APPWRITE_HOSTELS_ID as string,
      [Query.orderDesc("")]
    );

    const hostels = mapHostels(data.documents);

    return { success: true, data: hostels, total: data.total };
  } catch (error: any) {
    console.error(`Failed to fetch Hostels: ${error.message}`);
    return { success: false, msg: error.message };
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to fetch Featured Hostels
export async function fetchFeaturedHostels() {
  try {
    await delay(2000);
    const data = await databases.listDocuments(
      APPWRITE_DATABASE_ID as string,
      APPWRITE_HOSTELS_ID as string,
      [Query.limit(5), Query.orderDesc("ratings")]
    );

    const hostels = mapHostels(data.documents);

    return { success: true, data: hostels, total: data.total };
  } catch (error: any) {
    console.error(`Failed to fetch Hostels: ${error.message}`);
    return { success: false, msg: error.message };
  }
}
