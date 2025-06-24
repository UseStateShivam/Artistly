'use client';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { RootState } from '@/lib/utils/store';
import Filter from '@/components/filter';
import { useArtistSearch } from '@/lib/hooks/useArtistSearch'; // ✅ use hook

export default function ManagerDashboard() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const router = useRouter();

  const {
    filters,
    setFilters,
    currentPage,
    setCurrentPage,
    totalArtists,
    totalPages,
    paginatedArtists,
    startIndex,
    endIndex,
  } = useArtistSearch();

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
        <Filter filters={filters} setFilters={setFilters} view="horizontal" searchCategory={true} />
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-[#174f46] text-sm">
          Showing {totalArtists === 0 ? 0 : startIndex + 1}–{Math.min(endIndex, totalArtists)} of {totalArtists} artists
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-[#174f46] text-white disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-[#174f46] text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
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
            {paginatedArtists.length > 0 ? (
              paginatedArtists.map((artist) => (
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
