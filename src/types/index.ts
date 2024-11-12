export interface DisasterEvent {
  id: string;
  type: 'flood' | 'fire' | 'earthquake' | 'hurricane' | 'tornado';
  severity: 'low' | 'medium' | 'high' | 'critical';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  timestamp: string;
  description: string;
  status: 'active' | 'resolved' | 'monitoring';
}

export interface Resource {
  id: string;
  name: string;
  type: 'shelter' | 'medical' | 'supplies' | 'food' | 'water';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  status: 'available' | 'limited' | 'unavailable';
  capacity: number;
  currentOccupancy?: number;
  contact: {
    phone: string;
    email: string;
  };
  supplies?: string[];
  lastUpdated: string;
}

export interface VolunteerProfile {
  id: string;
  skills: string[];
  availability: {
    days: string[];
    timeSlots: string[];
  };
  certifications: string[];
  experience: string;
  status: 'active' | 'inactive';
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  source: string;
  category?: 'weather' | 'disaster' | 'emergency' | string;
  url: string;
  publishedAt: string;
  imageUrl: string;
}