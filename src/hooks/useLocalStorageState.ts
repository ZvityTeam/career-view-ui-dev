import React, { useCallback, useEffect, useState } from 'react';

/**
 * A map of subscribers keyed by localStorage key.
 * Each subscriber is a callback that is called with the new value.
 * We use `unknown` instead of `any` to comply with no-explicit-any rules.
 */
const subscribers = new Map<string, Set<(value: unknown) => void>>();

//
// Internal utilities
//

/**
 * Notify all subscribers of a given key about the new value.
 *
 * @template T - The type of the data stored.
 * @param key - The localStorage key.
 * @param newValue - The new value to be passed to all subscribers.
 */
function notifySubscribers<T>(key: string, newValue: T): void {
  const subs = subscribers.get(key);
  if (subs) {
    subs.forEach((cb) => {
      // Cast back to (value: T) => void at call time.
      (cb as (v: T) => void)(newValue);
    });
  }
}

/**
 * Subscribe a callback to changes for a specific localStorage key.
 *
 * @template T - The type of the data stored.
 * @param key - The localStorage key to subscribe to.
 * @param callback - A function that will be called with the new value whenever it changes.
 * @returns A function to unsubscribe from further updates.
 */
function subscribe<T>(key: string, callback: (value: T) => void): () => void {
  let subs = subscribers.get(key);
  if (!subs) {
    subs = new Set();
    subscribers.set(key, subs);
  }
  // Store the callback as (value: unknown) => void to avoid using `any`.
  subs.add(callback as unknown as (value: unknown) => void);

  // Return an unsubscribe function
  return () => {
    subs!.delete(callback as unknown as (value: unknown) => void);
  };
}

/**
 * A custom React hook that synchronizes its state with localStorage and
 * keeps it in sync across browser tabs and components.
 *
 * When the value changes in one component (or in another browser tab),
 * all components using this hook with the same key are automatically updated.
 *
 * @template T - The type of the state value.
 * @param {string} key - The localStorage key to store the state under.
 * @param {T} initialValue - The initial value to use if localStorage does not have a value.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]}
 *   A tuple of:
 *   1. The current state (mirrored in localStorage)
 *   2. A function to update the state (and localStorage)
 *
 * @example
 * // Example usage in a component:
 *
 * import React from 'react';
 * import useLocalStorageState from './useLocalStorageState';
 *
 * export default function Counter() {
 *   const [count, setCount] = useLocalStorageState<number>('myCountKey', 0);
 *
 *   return (
 *     <div>
 *       <p>The current count is {count}</p>
 *       <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
 *       <button onClick={() => setCount(0)}>Reset</button>
 *     </div>
 *   );
 * }
 */
function useLocalStorageState<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  /**
   * Checks whether localStorage is available.
   *
   * @returns true if localStorage is available; false otherwise.
   */
  const isLocalStorageAvailable = (): boolean => {
    try {
      if (
        typeof window === 'undefined' ||
        typeof localStorage === 'undefined'
      ) {
        return false;
      }
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  };

  /**
   * Reads a value from localStorage, or returns `initialValue` on error.
   *
   * @returns the parsed value from localStorage, or `initialValue`.
   */
  const readValue = (): T => {
    if (!isLocalStorageAvailable()) {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // Local React state that is mirrored in localStorage.
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Listen for changes to localStorage (e.g., from other tabs).
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        try {
          const newValue = event.newValue
            ? (JSON.parse(event.newValue) as T)
            : initialValue;
          setStoredValue(newValue);
        } catch (error) {
          console.warn(
            `Error parsing localStorage key "${key}" in storage event:`,
            error
          );
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  // Subscribe to in-tab changes from this hook instance or others using the same key.
  useEffect(() => {
    return subscribe<T>(key, (newValue) => {
      setStoredValue(newValue);
    });
  }, [key]);

  /**
   * Updates both local React state and the corresponding localStorage entry,
   * then notifies any subscribers of the new value.
   */
  const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (valueOrFn) => {
      setStoredValue((prevValue) => {
        const newValue =
          typeof valueOrFn === 'function'
            ? (valueOrFn as (prev: T) => T)(prevValue)
            : valueOrFn;

        if (isLocalStorageAvailable()) {
          try {
            localStorage.setItem(key, JSON.stringify(newValue));
          } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
          }
        }
        // Notify all subscribers of the new value.
        notifySubscribers(key, newValue);
        return newValue;
      });
    },
    [key]
  );

  return [storedValue, setValue];
}

export default useLocalStorageState;
