import { useEffect, useState } from 'react';
import { localStorageUtil } from '../utils/localStorageUtil.ts';

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const value = localStorageUtil.getItem<T>(key, defaultValue);
    return value !== null ? value : defaultValue; // ✅ Ensure `T` is never `null`
  });

  useEffect(() => {
    localStorageUtil.setItem(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
