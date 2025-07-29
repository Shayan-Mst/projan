'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { JalaliDateInput } from './jalaliDateInput';
import { useFormContext } from '../context/formContext';
import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker';

//schema for type of input data in zod
const schema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, 'Only letters are allowed'),
  price: z
    .string()
    .min(1, 'Price is required')
    .regex(/^\d+$/, 'Price must be a number'),
   
});


type FormValues = z.infer<typeof schema>;

export const Form = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const { addEntry } = useFormContext();
  const [selectedDay, setSelectedDay] = useState<DayValue>(null);
  const [isEmpty,setIsEmpty] = useState(false)

 
  const onSubmit = (data: FormValues) => {
    
    if (!selectedDay){ 
       setIsEmpty(true);
      return};

     

    const date = `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`;
    addEntry({ name: data.name, price: +data.price, date });
    reset();
    setSelectedDay(null);
    setIsEmpty(false)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
    <input
      {...register("name")}
      className="w-full text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter product name"
    />
    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
    <input
      {...register("price")}
      className="w-full text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter price"
    />
    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
    <JalaliDateInput  value={selectedDay} onChange={setSelectedDay} />
     {isEmpty && (
  <p className="text-red-500 text-sm mt-1">Date is required</p>
)}  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
  >
    Add Data
  </button>
</form>

  );
};
