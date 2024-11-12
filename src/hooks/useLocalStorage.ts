import { useState, useEffect } from 'react';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorage';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = getFromLocalStorage<T>(key);
    return item !== null ? item : initialValue;
  });

  useEffect(() => {
    saveToLocalStorage(key, storedValue);
  }, [key, storedValue]);

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
  };

  return [storedValue, setValue] as const;
}