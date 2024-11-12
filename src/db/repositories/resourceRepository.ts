import { db } from '../database';
import { STORES } from '../config';
import type { Resource } from '../../types';

export const resourceRepository = {
  async getAll(): Promise<Resource[]> {
    return await db.getAll<Resource>(STORES.RESOURCES);
  },

  async getById(id: string): Promise<Resource | undefined> {
    return await db.get<Resource>(STORES.RESOURCES, id);
  },

  async save(resource: Resource): Promise<void> {
    await db.put(STORES.RESOURCES, {
      ...resource,
      lastUpdated: new Date().toISOString()
    });
  },

  async delete(id: string): Promise<void> {
    await db.delete(STORES.RESOURCES, id);
  },

  async getByType(type: string): Promise<Resource[]> {
    const resources = await this.getAll();
    return resources.filter(resource => resource.type === type);
  }
};