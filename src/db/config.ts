export const DB_NAME = 'safehaven_db';
export const DB_VERSION = 1;

export const STORES = {
  EVENTS: 'events',
  RESOURCES: 'resources',
  ALERTS: 'alerts',
  VOLUNTEERS: 'volunteers',
  USER_PREFERENCES: 'userPreferences',
  SHELTER_UPDATES: 'shelterUpdates'
} as const;

export const createStores = (db: IDBDatabase) => {
  // Events store
  if (!db.objectStoreNames.contains(STORES.EVENTS)) {
    const eventStore = db.createObjectStore(STORES.EVENTS, { keyPath: 'id' });
    eventStore.createIndex('type', 'type');
    eventStore.createIndex('status', 'status');
    eventStore.createIndex('timestamp', 'timestamp');
  }

  // Resources store
  if (!db.objectStoreNames.contains(STORES.RESOURCES)) {
    const resourceStore = db.createObjectStore(STORES.RESOURCES, { keyPath: 'id' });
    resourceStore.createIndex('type', 'type');
    resourceStore.createIndex('status', 'status');
    resourceStore.createIndex('location', 'location');
  }

  // Alerts store
  if (!db.objectStoreNames.contains(STORES.ALERTS)) {
    const alertStore = db.createObjectStore(STORES.ALERTS, { keyPath: 'id' });
    alertStore.createIndex('type', 'type');
    alertStore.createIndex('severity', 'severity');
    alertStore.createIndex('timestamp', 'timestamp');
  }

  // Volunteers store
  if (!db.objectStoreNames.contains(STORES.VOLUNTEERS)) {
    const volunteerStore = db.createObjectStore(STORES.VOLUNTEERS, { keyPath: 'id' });
    volunteerStore.createIndex('status', 'status');
    volunteerStore.createIndex('skills', 'skills', { multiEntry: true });
  }

  // User preferences store
  if (!db.objectStoreNames.contains(STORES.USER_PREFERENCES)) {
    db.createObjectStore(STORES.USER_PREFERENCES, { keyPath: 'id' });
  }

  // Shelter updates store
  if (!db.objectStoreNames.contains(STORES.SHELTER_UPDATES)) {
    const shelterStore = db.createObjectStore(STORES.SHELTER_UPDATES, { keyPath: 'id' });
    shelterStore.createIndex('timestamp', 'timestamp');
    shelterStore.createIndex('shelterId', 'shelterId');
  }
};