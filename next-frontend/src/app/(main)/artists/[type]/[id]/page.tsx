'use client';

// Import artist data and required modules
import { artistData } from '@/lib/constants/artist-data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';

// Define the props type for the page component
type Props = {
  params: Promise<{ type: string; id: string }>;
};

// Artist detail page component
export default function ArtistDetailPage({ params }: Props) {
  // Extract id from the resolved params promise
  const { id } = use(params);

  // Find the artist by id
  const artist = artistData.find((a) => a.id === parseInt(id));

  // If artist not found, show 404 page
  if (!artist) return notFound();

  return (
    <main className="py-28 px-4 md:px-16 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Artist image */}
        <Image
          src={artist.image}
          alt={artist.name}
          width={400}
          height={300}
          className="rounded-lg object-cover"
        />

        <div className="flex-1">
          {/* Artist name */}
          <h1 className="text-3xl font-bold text-[#174f46] mb-4">{artist.name}</h1>
          {/* Artist category */}
          <p className="text-lg text-gray-600 capitalize mb-2">Category: {artist.category}</p>
          {/* Artist location */}
          <p className="text-lg text-gray-600 mb-2">Location: {artist.location}</p>
          {/* Artist price */}
          <p className="text-lg font-semibold text-[#174f46] mb-4">Price: {artist.price}</p>

          {/* Booking button */}
          <button className="mt-4 px-6 py-3 bg-[#174f46] text-[#b7f37b] rounded-lg hover:bg-[#133e39] transition cursor-pointer">
            Request Booking
          </button>
        </div>
      </div>
    </main>
  );
}
