'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Entry = {
  name: string;
  price: number;
  date: string; // Jalali string
};

const FormContext = createContext<{
  entries: Entry[];
  addEntry: (entry: Entry) => void;
}>({ entries: [], addEntry: () => {} });

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [entries, setEntries] = useState<Entry[]>([]);

  const addEntry = (entry: Entry) => {
    setEntries((prev) => [...prev, entry]);
  };

  return (
    <FormContext.Provider value={{ entries, addEntry }}>
      {children}
    </FormContext.Provider>
  );
};
