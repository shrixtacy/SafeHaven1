import { useState, useEffect } from 'react';
import { db } from '../db/database';

export function useDatabase<T>(storeName: string, defaultValue: T[] = []) {
  const [data, setData] = useState<T[]>(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await db.getAll<T>(storeName);
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load data'));
        setLoading(false);
      }
    };

    loadData();
  }, [storeName]);

  const refreshData = async () => {
    setLoading(true);
    try {
      const result = await db.getAll<T>(storeName);
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to refresh data'));
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item: T) => {
    try {
      await db.put(storeName, item);
      await refreshData();
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to add item'));
    }
  };

  const updateItem = async (item: T) => {
    try {
      await db.put(storeName, item);
      await refreshData();
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update item'));
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await db.delete(storeName, id);
      await refreshData();
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to delete item'));
    }
  };

  return {
    data,
    loading,
    error,
    refreshData,
    addItem,
    updateItem,
    deleteItem
  };
}