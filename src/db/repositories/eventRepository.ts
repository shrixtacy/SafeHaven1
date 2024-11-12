import { db } from '../database';
import { STORES } from '../config';
import type { DisasterEvent } from '../../types';

export const eventRepository = {
  async getAll(): Promise<DisasterEvent[]> {
    return await db.getAll<DisasterEvent>(STORES.EVENTS);
  },

  async getById(id: string): Promise<DisasterEvent | undefined> {
    return await db.get<DisasterEvent>(STORES.EVENTS, id);
  },

  async save(event: DisasterEvent): Promise<void> {
    await db.put(STORES.EVENTS, {
      ...event,
      timestamp: new Date().toISOString()
    });
  },

  async delete(id: string): Promise<void> {
    await db.delete(STORES.EVENTS, id);
  },

  async getActive(): Promise<DisasterEvent[]> {
    const events = await this.getAll();
    return events.filter(event => event.status === 'active');
  }
};