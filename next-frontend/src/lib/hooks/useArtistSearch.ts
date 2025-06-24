import { useEffect, useState, useMemo } from "react";
import { artistData } from "@/lib/constants/artist-data";

type Filters = {
  name: string;
  category: string;
  location: string;
  price: string;
};

export function useArtistSearch(initialFilters?: Partial<Filters>, itemsPerPage = 10) {
  const [filters, setFilters] = useState<Filters>({
    name: "",
    category: "All",
    location: "",
    price: "All",
    ...initialFilters,
  });

  const [currentPage, setCurrentPage] = useState(1);

  const filteredArtists = useMemo(() => {
    return artistData.filter((artist) => {
      const matchesName = artist.name.toLowerCase().includes(filters.name.toLowerCase());

      const matchesLocation = artist.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());

      const matchesCategory =
        filters.category === "All" ||
        artist.category.replace(/\s+/g, "").toLowerCase() ===
          filters.category.replace(/\s+/g, "").toLowerCase();

      const extractPrice = (price: string): number => {
        const number = parseInt(price.replace(/[^\d]/g, ""));
        return price.toLowerCase().includes("k") ? number * 1000 : number;
      };

      const priceValue = extractPrice(artist.price);

      const matchesPrice =
        filters.price === "All" ||
        (filters.price === "Under ₹10k" && priceValue < 10000) ||
        (filters.price === "₹10k - ₹20k" && priceValue >= 10000 && priceValue <= 20000) ||
        (filters.price === "Above ₹20k" && priceValue > 20000);

      return matchesName && matchesLocation && matchesCategory && matchesPrice;
    });
  }, [filters]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalArtists = filteredArtists.length;
  const totalPages = Math.ceil(totalArtists / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedArtists = filteredArtists.slice(startIndex, endIndex);

  return {
    filters,
    setFilters,
    currentPage,
    setCurrentPage,
    totalArtists,
    totalPages,
    paginatedArtists,
    startIndex,
    endIndex,
  };
}
