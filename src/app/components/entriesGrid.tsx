'use client';
import React from 'react';
import { useFormContext } from '../context/formContext';

export const EntriesGrid = () => {
  const { entries } = useFormContext();

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
  {entries.map((entry, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{entry.name}</h2>
      <p className="text-sm text-gray-600 mb-1"> Price: {entry.price}</p>
      <p className="text-sm text-gray-600"> Date: {entry.date}</p>
    </div>
  ))}
</div>

  );
};