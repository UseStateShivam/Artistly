import { useEffect, useState } from "react";
import { artistData } from "@/lib/constants/artist-data";

type Filters = {
  name: string;
  category: string;
  location: string;
  price: string;
};

/**
 * Custom React hook to filter and paginate a list of artists based on category, name, location, and price.
 *
 * @param type - The category of artists to filter by.
 * @param itemsPerPage - Number of artists to display per page (default is 6).
 * @returns An object containing:
 *   - filters: Current filter values.
 *   - setFilters: Function to update filter values.
 *   - currentPage: Current page number.
 *   - setCurrentPage: Function to update the current page.
 *   - totalArtists: Total number of filtered artists.
 *   - totalPages: Total number of pages.
 *   - paginatedArtists: Artists for the current page.
 *   - startIndex: Index of the first artist on the current page.
 *   - endIndex: Index of the last artist on the current page.
 */
export function useArtistFilter(type: string, itemsPerPage = 6) {
  const [filters, setFilters] = useState<Filters>({
    name: "",
    category: "",
    location: "",
    price: "All",
  });

  const [currentPage, setCurrentPage] = useState(1);

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
      (filters.price === "₹10k - ₹20k" &&
        priceValue >= 10000 &&
        priceValue <= 20000) ||
      (filters.price === "Above ₹20k" && priceValue > 20000);

    return matchCategory && matchName && matchLocation && matchPrice;
  });

  useEffect(() => {
    setCurrentPage(1); // Reset on filter change
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
