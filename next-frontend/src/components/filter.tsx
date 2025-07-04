'use client';

import React from 'react';

type FilterProps = {
  filters: {
    name: string;
    category: string;
    location: string;
    price: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      name: string;
      category: string;
      location: string;
      price: string;
    }>
  >;
  view?: 'horizontal' | 'vertical';
  searchCategory?: boolean;
};

export default function Filter({
  filters,
  setFilters,
  view = 'vertical',
  searchCategory = false,
}: FilterProps) {
  const prices = ['All', 'Under ₹10k', '₹10k - ₹20k', 'Above ₹20k'];
  const categories = ['All', 'Singer', 'Dancer', 'DJ', 'Makeup-Artist', 'Photographer', 'Painter'];
  const isHorizontal = view === 'horizontal';

  return (
    <div
      className={`${
        isHorizontal
          ? 'flex flex-wrap gap-4 items-end'
          : 'w-full md:w-64 flex flex-col gap-4'
      } bg-[#dee4e3] p-4 rounded-xl shadow-md`}
    >
      <h3
        className={`text-base sm:text-lg font-semibold text-[#174f46] ${
          isHorizontal ? 'w-full mb-2' : ''
        }`}
      >
        Filter Artists
      </h3>

      {/* Name */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-[#174f46] mb-1">Search by Name</label>
        <input
          type="text"
          placeholder="e.g. Pooja"
          value={filters.name}
          onChange={(e) => setFilters((prev) => ({ ...prev, name: e.target.value }))}
          className="border border-[#174f46] rounded-md px-3 py-2 text-sm w-full"
        />
      </div>

      {/* Category */}
      {searchCategory && (
        <div className="flex flex-col w-full">
          <label className="text-sm font-medium text-[#174f46] mb-1">Category</label>
          <select
            value={filters.category}
            onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
            className="border border-[#174f46] rounded-md px-3 py-2 text-sm bg-white w-full"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Location */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-[#174f46] mb-1">Location</label>
        <input
          type="text"
          placeholder="e.g. Indore"
          value={filters.location}
          onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
          className="border border-[#174f46] rounded-md px-3 py-2 text-sm w-full"
        />
      </div>

      {/* Price */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-[#174f46] mb-1">Price</label>
        <select
          value={filters.price}
          onChange={(e) => setFilters((prev) => ({ ...prev, price: e.target.value }))}
          className="border border-[#174f46] rounded-md px-3 py-2 text-sm bg-white w-full"
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
