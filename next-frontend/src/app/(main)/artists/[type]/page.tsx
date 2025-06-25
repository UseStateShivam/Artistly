'use client';

// Import Next.js navigation utility for handling 404s
import { notFound } from "next/navigation";
// Import React's use hook for async/await in components
import { use } from "react";

// Import custom components and hooks
import ArtistCard from "@/components/ui/artistCard";
import Filter from "@/components/filter";
import { artistTypes } from "@/lib/constants/artist-types";
import { useArtistFilter } from "@/lib/hooks/useArtistFilter";

// Define the props type for the page component
type Props = {
  params: Promise<{ type: string }>;
};

// Main page component for displaying artists by type
export default function ArtistTypePage({ params }: Props) {
  // Await the params promise to get the type
  const { type } = use(params);

  // Check if the type is valid
  const valid = artistTypes.includes(type);
  if (!valid) return notFound();

  // Use custom hook to manage filters, pagination, and artist data
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
  } = useArtistFilter(type);

  return (
    <main className="py-28 px-4 md:px-16">
      {/* Page title */}
      <h1 className="text-3xl font-bold capitalize mb-8 text-[#174f46]">
        {type.replace("-", " ")}
      </h1>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Filter sidebar */}
        <Filter filters={filters} setFilters={setFilters} />

        <div className="flex-1">
          {/* Pagination controls and artist count */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-[#174f46] text-sm">
              Showing {totalArtists === 0 ? 0 : startIndex + 1}–{Math.min(endIndex, totalArtists)} of {totalArtists} artists
            </p>
            <div className="flex gap-2">
              {/* Previous page button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded bg-[#174f46] text-white disabled:opacity-50"
              >
                Prev
              </button>
              {/* Next page button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded bg-[#174f46] text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          {/* Artist cards grid */}
          <div className="grid gap-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {paginatedArtists.length === 0 ? (
              // Show message if no artists found
              <p className="text-[#174f46] col-span-full">No matching artists found.</p>
            ) : (
              // Render artist cards
              paginatedArtists.map((artist, idx) => (
                <ArtistCard key={idx} {...artist} />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
