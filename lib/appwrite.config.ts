import { Client, Account, Databases } from "node-appwrite"; 

// Destructure environment variables for Appwrite configuration
const { NEXT_PUBLIC_APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY } =
  process.env;

// Create a new instance of the Appwrite Client with project and API key configuration
const client = new Client()
  // Set the endpoint URL for the Appwrite server, using an environment variable
  .setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  // Set the project ID for the Appwrite project, using an environment variable
  .setProject(APPWRITE_PROJECT_ID as string)
  // Set the API key for accessing Appwrite services, using an environment variable
  .setKey(APPWRITE_API_KEY as string);

// Create and export an instance of the Appwrite Databases service
export const databases = new Databases(client);
