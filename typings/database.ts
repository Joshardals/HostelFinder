export interface HostelTypings {
  name: string;
  address: string;
  price: number;
  type: string;
  room: number;
  bath: number;
  square_feet: number;
  description: string;
  contact_number: string;
  image_urls: string[];
  water_supply: string;
  electricity: string;
  kitchen: string;
  security: string;
  furnishing: string;
  available: boolean;
  ratings: number;
  hostel_id: number;
  contact_name: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
}

export interface HostelFilteringTypings {
  searchLocation?: string;
}
