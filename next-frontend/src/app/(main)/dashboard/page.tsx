'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { artistData } from '@/lib/constants/artist-data';
import { RootState } from '@/lib/utils/store';
import Filter from '@/components/filter';

export default function ManagerDashboard() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const router = useRouter();

  const [filters, setFilters] = useState({
    name: '',
    category: '',
    location: '',
    price: 'All',
  });

  // Filter logic
  const filteredArtists = useMemo(() => {
    return artistData.filter((artist) => {
      const matchesName = artist.name.toLowerCase().includes(filters.name.toLowerCase());
      const matchesLocation = artist.location.toLowerCase().includes(filters.location.toLowerCase());
      const extractPrice = (price: string): number => {
        const number = parseInt(price.replace(/[^\d]/g, ""));
        return price.toLowerCase().includes("k") ? number * 1000 : number;
      };
      const priceValue = extractPrice(artist.price);
      const matchesPrice =
        filters.price === 'All' ||
        (filters.price === 'Under ₹10k' && priceValue < 10000) ||
        (filters.price === '₹10k - ₹20k' && priceValue >= 10000 && priceValue <= 20000) ||
        (filters.price === 'Above ₹20k' && priceValue > 20000);

      return matchesName && matchesLocation && matchesPrice;
    });
  }, [filters]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  return (
    <main className="py-28 px-4 md:px-16 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#174f46] mb-4">Manager Dashboard</h1>
      <p className="text-[#174f46] mb-6">List of all onboarded artists (dummy data).</p>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <Filter filters={filters} setFilters={setFilters} />
        {/* You can add more filter controls or content here if needed */}
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-[#dee4e3]">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#174f46] text-white">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">City</th>
              <th className="px-6 py-3">Fee</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-[#dee4e3] text-[#174f46]">
            {filteredArtists.length > 0 ? (
              filteredArtists.map((artist) => (
                <tr key={artist.id} className="border-b border-[#b7f37b]">
                  <td className="px-6 py-4">{artist.name}</td>
                  <td className="px-6 py-4 capitalize">{artist.category}</td>
                  <td className="px-6 py-4">{artist.location}</td>
                  <td className="px-6 py-4">{artist.price}</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-2 rounded bg-[#b7f37b] text-[#174f46] font-semibold hover:bg-[#a3dd6e] transition">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-[#174f46]">
                  No artists found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
