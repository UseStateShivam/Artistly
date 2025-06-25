'use client';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { RootState } from '@/lib/utils/store';
import Filter from '@/components/filter';
import { useArtistSearch } from '@/lib/hooks/useArtistSearch';
import DashboardTable from '@/components/ui/dashboard-table';
import Button from '@/components/ui/button';

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
    <main className="py-28 px-4 sm:px-6 md:px-16 max-w-6xl mx-auto">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-[#174f46] mb-2 sm:mb-4">
        Manager Dashboard
      </h1>
      <p className="text-sm sm:text-base text-[#174f46] mb-6">
        List of all onboarded artists (dummy data).
      </p>

      {/* Filter */}
      <div className="w-full flex flex-col gap-4 mb-6">
        <Filter filters={filters} setFilters={setFilters} view="horizontal" searchCategory={true} />
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <p className="text-[#174f46] text-sm text-center sm:text-left">
          Showing {totalArtists === 0 ? 0 : startIndex + 1}–{Math.min(endIndex, totalArtists)} of {totalArtists} artists
        </p>
        <div className="flex justify-center sm:justify-end gap-2">
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

      {/* Table with horizontal scroll on small screens */}
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
                  label="View"
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
