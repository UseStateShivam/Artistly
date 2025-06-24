'use client';

import React from 'react';

type FilterProps = {
  filters: {
    name: string;
    category: string;
    location: string;
    price: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    name: string;
    category: string;
    location: string;
    price: string;
  }>>;
  view?: 'horizontal' | 'vertical';
};

export default function Filter({ filters, setFilters, view = 'vertical' }: FilterProps) {
  const prices = ["All", "Under ₹10k", "₹10k - ₹20k", "Above ₹20k"];
  const isHorizontal = view === 'horizontal';

  return (
    <div
      className={`${
        isHorizontal ? 'flex flex-wrap gap-4 items-end' : 'w-full md:w-64'
      } bg-[#dee4e3] p-4 rounded-xl shadow-md`}
    >
      <h3 className={`text-lg font-semibold text-[#174f46] ${isHorizontal ? 'w-full mb-2' : 'mb-4'}`}>
        Filter Artists
      </h3>

      <div className={isHorizontal ? 'flex flex-col' : 'mb-4 w-full'}>
        <label className="block text-sm font-medium text-[#174f46] mb-1">Search by Name</label>
        <input
          type="text"
          placeholder="e.g. Pooja"
          value={filters.name}
          onChange={(e) => setFilters((prev) => ({ ...prev, name: e.target.value }))}
          className="border border-[#174f46] rounded-md px-3 py-2 text-sm"
        />
      </div>

      <div className={isHorizontal ? 'flex flex-col' : 'mb-4 w-full'}>
        <label className="block text-sm font-medium text-[#174f46] mb-1">Location</label>
        <input
          type="text"
          placeholder="e.g. Indore"
          value={filters.location}
          onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
          className="border border-[#174f46] rounded-md px-3 py-2 text-sm"
        />
      </div>

      <div className={isHorizontal ? 'flex flex-col' : 'w-full'}>
        <label className="block text-sm font-medium text-[#174f46] mb-1">Price</label>
        <select
          value={filters.price}
          onChange={(e) => setFilters((prev) => ({ ...prev, price: e.target.value }))}
          className="border border-[#174f46] rounded-md px-3 py-2 text-sm bg-white"
        >
          {prices.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
