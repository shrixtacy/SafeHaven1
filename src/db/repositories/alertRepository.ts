import { db } from '../database';
import { STORES } from '../config';

export interface Alert {
  id: string;
  type: string;
  message: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  expiresAt?: string;
}

export const alertRepository = {
  async getAll(): Promise<Alert[]> {
    return await db.getAll<Alert>(STORES.ALERTS);
  },

  async getActive(): Promise<Alert[]> {
    const alerts = await this.getAll();
    const now = new Date();
    return alerts.filter(alert => {
      if (!alert.expiresAt) return true;
      return new Date(alert.expiresAt) > now;
    });
  },

  async save(alert: Alert): Promise<void> {
    await db.put(STORES.ALERTS, {
      ...alert,
      timestamp: new Date().toISOString()
    });
  },

  async delete(id: string): Promise<void> {
    await db.delete(STORES.ALERTS, id);
  }
};