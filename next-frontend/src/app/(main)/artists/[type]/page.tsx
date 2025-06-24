'use client';

import { use } from "react";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";

import { artistTypes } from "@/lib/constants/artist-types";
import { artistData } from "@/lib/constants/artist-data";
import ArtistCard from "@/components/artistCard";
import Filter from "@/components/filter";

type Props = {
  params: Promise<{ type: string }>;
};

export default function ArtistTypePage({ params }: Props) {
  const { type } = use(params);

  const valid = artistTypes.includes(type);
  if (!valid) return notFound();

  const [filters, setFilters] = useState({
    name: "",
    category: "",
    location: "",
    price: "All",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filtered artist list
  const filteredArtists = artistData.filter((artist) => {
    const matchCategory = artist.category === type;

    const matchName =
      filters.name === "" ||
      artist.name.toLowerCase().includes(filters.name.toLowerCase());

    const matchLocation =
      filters.location === "" ||
      artist.location.toLowerCase().includes(filters.location.toLowerCase());

    const extractPrice = (price: string): number => {
      const number = parseInt(price.replace(/[^\d]/g, ""));
      return price.toLowerCase().includes("k") ? number * 1000 : number;
    };
    const priceValue = extractPrice(artist.price);

    const matchPrice =
      filters.price === "All" ||
      (filters.price === "Under ₹10k" && priceValue < 10000) ||
      (filters.price === "₹10k - ₹20k" && priceValue >= 10000 && priceValue <= 20000) ||
      (filters.price === "Above ₹20k" && priceValue > 20000);

    return matchCategory && matchName && matchLocation && matchPrice;
  });

  // Reset to first page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalArtists = filteredArtists.length;
  const totalPages = Math.ceil(totalArtists / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedArtists = filteredArtists.slice(startIndex, endIndex);

  return (
    <main className="py-28 px-4 md:px-16">
      <h1 className="text-3xl font-bold capitalize mb-8 text-[#174f46]">{type.replace("-", " ")}</h1>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Filter Sidebar */}
        <Filter filters={filters} setFilters={setFilters} />

        {/* Artist Cards + Pagination */}
        <div className="flex-1">
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

          <div className="grid gap-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {paginatedArtists.length === 0 ? (
              <p className="text-[#174f46] col-span-full">No matching artists found.</p>
            ) : (
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
