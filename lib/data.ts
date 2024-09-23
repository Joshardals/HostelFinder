import { FaBed } from "react-icons/fa";

export const navlinks = [
  { label: "find hostels", href: "/find-hostels" },
  { label: "about us", href: "#" },
  { label: "help", href: "#" },
  { label: "contact us", href: "#" },
];

export const howItWorksSteps = [
  {
    label: "Search",
    src: "/images/homepage/how-it-works/search.png",
    description: "Find Your Ideal Hostel using our intuitive search feature.",
    buttonLabel: "Start your Search",
  },

  {
    label: "Select",
    src: "/images/homepage/how-it-works/checklist.png",
    description: "Choose the Best Option by reviewing detailed listings.",
    buttonLabel: "View Hostels",
  },

  {
    label: "Contact",
    src: "/images/homepage/how-it-works/chat.png",
    description:
      "Contact the hostel owner directly for any questions or booking inquiries.",
    buttonLabel: "Contact Now",
  },

  // {
  //   label: "For Agents",
  //   src: "/images/homepage/how-it-works/upload.png",
  //   description:
  //     "Agents will soon be able to upload and manage hostel listings. Stay tuned!",
  //   buttonLabel: "Learn More",
  // }, Coming Soon
];

export const footerLinks = [
  { label: "home", href: "#" },
  { label: "about us", href: "#" },
  { label: "contact us", href: "#" },
];

export const footerSocialIcons = [
  {
    label: "github",
    href: "#",
    src: "/images/homepage/footer/social-icon/github.png",
  },
  {
    label: "linkedin",
    href: "#",
    src: "/images/homepage/footer/social-icon/linkedin.png",
  },
];

// Find Hostels Data

export const priceRange = [
  { value: 0, label: "No Min" },
  { value: 100000, label: "₦100k" },
  { value: 200000, label: "₦200k" },
  { value: 300000, label: "₦300k" },
  { value: 400000, label: "₦400k" },
  { value: 500000, label: "₦500k" },
  { value: 600000, label: "₦600k" },
  { value: 700000, label: "₦700k" },
  { value: 800000, label: "₦800k" },
  { value: 900000, label: "₦900k" },
  { value: 1000000, label: "₦1M" },
];

export const ratings = [1, 2, 3, 4, 5]; // Possible ratings
export const hostelTypes = ["Self Contain", "Room and Parlour", "2 Bedroom"];

// Sorting Data
export const sortingData = [
  {
    label: "Price (Lo-Hi)",
  },
  {
    label: "Price (Hi-Lo)",
  },
  {
    label: "Rating (Highest)",
  },
  {
    label: "Rating (Lowest)",
  },
  {
    label: "Date (Newest)",
  },
  {
    label: "Date (Oldest)",
  },
];

// locations Available
export const predefinedLocation = [
  "PPL Alasia Ojo, Lagos",
  "Post Service Estate Ojo, Lagos",
  "Agboroko Iyana Iba Road, Ojo Lagos",
  "First Gate Ojo, Lagos",
  "Igbo Elerin Rd, Ojo Lagos",
  "Iyana School Ojo, Alasia Lagos",
  "Obadore Road Lagos",
  "Igando Road Lagos",
  "Iba Road Ojo, Lagos",
];
