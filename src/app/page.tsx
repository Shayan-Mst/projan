'use client';
import { FormProvider } from './context/formContext';
import { Form } from './components/form';
import { EntriesGrid } from './components/entriesGrid';


export default function Home() {
  return (
     <FormProvider>
     <main className="min-h-screen bg-gray-50 py-10 px-4">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Add New Data</h1>
    <Form />
    <EntriesGrid />
  </div>
</main>

    </FormProvider>
  );
}
