import { DisasterEvent, Resource } from '../types';

export const disasterEvents: DisasterEvent[] = [
  {
    id: 'evt-001',
    type: 'flood',
    severity: 'high',
    location: {
      lat: 20.2961,
      lng: 85.8245,
      address: 'Coastal Region, Bhubaneswar'
    },
    timestamp: '2023-06-15T08:30:00Z',
    description: 'Severe flooding in coastal areas. Multiple neighborhoods affected.',
    status: 'active'
  },
  {
    id: 'evt-002',
    type: 'cyclone',
    severity: 'critical',
    location: {
      lat: 19.8987,
      lng: 85.9876,
      address: 'Puri District'
    },
    timestamp: '2023-06-15T09:15:00Z',
    description: 'Cyclone warning issued. Strong winds and heavy rainfall expected.',
    status: 'active'
  },
  {
    id: 'evt-003',
    type: 'fire',
    severity: 'medium',
    location: {
      lat: 21.4668,
      lng: 86.1165,
      address: 'Industrial Area, Balasore'
    },
    timestamp: '2023-06-15T10:15:00Z',
    description: 'Industrial facility fire. Fire department responding.',
    status: 'monitoring'
  }
];

export const resources: Resource[] = [
  {
    id: 'res-001',
    name: 'SCB Medical College',
    type: 'medical',
    location: {
      lat: 20.4625,
      lng: 85.8830,
      address: 'Cuttack, Odisha'
    },
    status: 'available',
    capacity: 1000,
    currentOccupancy: 682,
    contact: {
      phone: '+91-671-555-0123',
      email: 'emergency@scbmch.org'
    },
    supplies: ['Medical supplies', 'Emergency care', 'Trauma center'],
    lastUpdated: '2023-06-15T11:00:00Z'
  },
  {
    id: 'res-002',
    name: 'Kalinga Stadium Shelter',
    type: 'shelter',
    location: {
      lat: 20.2961,
      lng: 85.8245,
      address: 'Bhubaneswar, Odisha'
    },
    status: 'available',
    capacity: 2000,
    currentOccupancy: 876,
    contact: {
      phone: '+91-674-555-0456',
      email: 'shelter@kalingastadium.org'
    },
    supplies: ['Food', 'Water', 'Bedding', 'First aid'],
    lastUpdated: '2023-06-15T10:45:00Z'
  },
  {
    id: 'res-003',
    name: 'Puri District Hospital',
    type: 'medical',
    location: {
      lat: 19.8087,
      lng: 85.8315,
      address: 'Puri, Odisha'
    },
    status: 'limited',
    capacity: 500,
    currentOccupancy: 423,
    contact: {
      phone: '+91-675-555-0789',
      email: 'emergency@purihospital.org'
    },
    supplies: ['Medical supplies', 'Emergency care'],
    lastUpdated: '2023-06-15T11:30:00Z'
  }
];

export const weatherAlerts = [
  {
    id: 'wa-001',
    type: 'Cyclone Warning',
    severity: 'high',
    description: 'Cyclone expected to make landfall within 24 hours. Prepare for strong winds and heavy rainfall.',
    timestamp: '2023-06-15T09:00:00Z',
    duration: '48h'
  },
  {
    id: 'wa-002',
    type: 'Flood Alert',
    severity: 'medium',
    description: 'River levels rising in Mahanadi. Low-lying areas should prepare for possible flooding.',
    timestamp: '2023-06-15T10:30:00Z',
    duration: '24h'
  }
];

export const volunteerTasks = [
  {
    id: 'task-001',
    title: 'Medical Supply Distribution',
    location: 'SCB Medical College',
    requiredSkills: ['First Aid', 'Inventory Management'],
    timeSlot: '2023-06-16 09:00-13:00',
    volunteers: {
      required: 5,
      registered: 3
    }
  },
  {
    id: 'task-002',
    title: 'Shelter Support',
    location: 'Kalinga Stadium Shelter',
    requiredSkills: ['Food Service', 'Customer Service'],
    timeSlot: '2023-06-16 14:00-18:00',
    volunteers: {
      required: 8,
      registered: 4
    }
  }
];