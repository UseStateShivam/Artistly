'use client';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { RootState } from '@/lib/utils/store';
import Filter from '@/components/filter';
import { useArtistSearch } from '@/lib/hooks/useArtistSearch'; // ✅ use hook
import DashboardTable from '@/components/ui/dashboard-table';
import Button from '@/components/ui/button';

/**
 * Renders the Manager Dashboard page.
 *
 * Displays a list of onboarded artists with filtering and pagination options.
 * Redirects to the login page if the user is not authenticated.
 *
 * @returns The Manager Dashboard component.
 */
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
        <DashboardTable
          columns={[
            { header: 'Name', accessor: 'name' },
            { header: 'Category', accessor: 'category' },
            { header: 'City', accessor: 'location' },
            { header: 'Fee', accessor: 'price' },
            {
              header: 'Action',
              accessor: 'id',
              render: (id) => (
                <Button
                  onClick={() => router.push(`/dashboard/artist/${id}`)}
                  label='View'
                />
              ),
            },
          ]}
          data={paginatedArtists}
          emptyMessage="No artists found."
        />
      </div>
    </main>
  );
}
