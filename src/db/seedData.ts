import { db } from './database';
import { STORES } from './config';
import { disasterEvents, resources, weatherAlerts } from '../data/mockData';
import { shelterCapacity } from '../data/shelterCapacity';
import { emergencyContacts } from '../data/emergencyContacts';

export const seedDatabase = async () => {
  try {
    // Seed events
    for (const event of disasterEvents) {
      await db.put(STORES.EVENTS, event);
    }

    // Seed resources
    for (const resource of resources) {
      await db.put(STORES.RESOURCES, resource);
    }

    // Seed alerts
    for (const alert of weatherAlerts) {
      await db.put(STORES.ALERTS, {
        ...alert,
        timestamp: new Date().toISOString()
      });
    }

    // Seed shelter updates
    for (const shelter of shelterCapacity) {
      await db.put(STORES.SHELTER_UPDATES, {
        ...shelter,
        timestamp: new Date().toISOString()
      });
    }

    // Seed emergency contacts
    for (const contact of emergencyContacts) {
      await db.put(STORES.RESOURCES, {
        ...contact,
        type: 'contact',
        lastUpdated: new Date().toISOString()
      });
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};