# HostelFindr

**HostelFindr** is a specialized platform designed to simplify the search for affordable and reliable off-campus accommodation around Lagos State University (LASU). By connecting students directly with landlords, HostelFindr eliminates the need for costly agent fees and promotes a transparent rental process.

---

## Key Features

- **Hostel Search & Filtering**: Browse hostels by price range, type, and rating. Easily filter through the available listings based on your preferences.
- **Detailed Hostel Listings**: Each listing provides comprehensive details such as price, location, amenities (water supply, electricity, kitchen access), and security features.
- **Direct Landlord Contact**: Communicate directly with landlords to ask questions, schedule viewings, and gather more information, bypassing the need for intermediaries.
- **Mobile-Responsive Design**: The platform is fully responsive, ensuring seamless usage across devices.
- **Secure Backend**: Powered by Appwrite for secure data handling and real-time updates on available hostels.

---

## Technology Stack

- **Frontend**: Next.js
- **Backend**: Appwrite
- **Database**: Appwrite Database

---

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- **Node.js**: [Download here](https://nodejs.org/) (v14+ recommended)
- **Yarn Package Manager**: [Installation guide](https://yarnpkg.com/getting-started/install)

---

### Installation

1. **Extract the project folder**: If you received a zipped file, extract it to your preferred directory.
2. **Install dependencies**: Run the following command in the project root to install all required packages:

   ```bash
   yarn install
   ```

# Environment Variables Setup

To run this project, you need to set up environment variables. Follow the instructions below to get started.

---

To run this project, you need to set up environment variables. Follow the instructions below to get started.

## Required Environment Variables

Provide the following variables in a `.env.local` file in the root directory of the project:

### Mapbox

| Variable Name                     | Description              |
| --------------------------------- | ------------------------ |
| `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` | Your Mapbox access token |

### Appwrite

| Variable Name                   | Description                            |
| ------------------------------- | -------------------------------------- |
| `APPWRITE_PROJECT_ID`           | Your Appwrite project ID               |
| `APPWRITE_API_KEY`              | Your Appwrite API key                  |
| `NEXT_PUBLIC_APPWRITE_ENDPOINT` | The Appwrite endpoint URL              |
| `APPWRITE_DATABASE_ID`          | The Appwrite database ID               |
| `APPWRITE_HOSTELS_ID`           | The Appwrite collection ID for hostels |

### NodeMailer

| Variable Name   | Description                                |
| --------------- | ------------------------------------------ |
| `SMTP_EMAIL`    | Your SMTP email (e.g., for sending emails) |
| `SMTP_PASSWORD` | Your SMTP email password                   |

---

## Setting Up Environment Variables

To set up the environment variables for this project, create a `.env.local` file in the root directory of your project.

Use the following structure and replace the placeholder values with your actual API keys and IDs:

```env
# Appwrite Configuration
APPWRITE_PROJECT_ID=your-appwrite-project-id
APPWRITE_API_KEY=your-appwrite-api-key
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
APPWRITE_DATABASE_ID=your-database-id
APPWRITE_HOSTELS_ID=your-hostels-id

Mapbox Configuration
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-access-token

# NodeMailer SMTP Configuration
SMTP_EMAIL=your-smtp-email
SMTP_PASSWORD=your-smtp-password

## Running The Project

1. yarn dev
2. Open your browser and navigate to http://localhost:3000.
```
