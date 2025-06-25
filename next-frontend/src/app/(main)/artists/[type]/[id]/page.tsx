'use client';

import { artistData } from '@/lib/constants/artist-data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';

type Props = {
  params: Promise<{ type: string; id: string }>;
};

export default function ArtistDetailPage({ params }: Props) {
  const { id } = use(params);

  const artist = artistData.find((a) => a.id === parseInt(id));
  if (!artist) return notFound();

  return (
    <main className="lg:mt-12 py-20 px-4 sm:px-6 md:px-10 lg:px-16 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
        {/* Artist Image */}
        <div className="w-full md:w-[50%]">
          <Image
            src={artist.image}
            alt={artist.name}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>

        {/* Artist Details */}
        <div className="w-full md:w-[50%] flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#174f46]">{artist.name}</h1>
          <p className="text-base sm:text-lg text-gray-600 capitalize">
            <span className="font-semibold">Category:</span> {artist.category}
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            <span className="font-semibold">Location:</span> {artist.location}
          </p>
          <p className="text-base sm:text-lg text-[#174f46] font-semibold">
            <span className="font-semibold">Price:</span> {artist.price}
          </p>

          <button className="mt-6 w-full sm:w-fit px-6 py-3 text-sm sm:text-base bg-[#174f46] text-[#b7f37b] rounded-lg hover:bg-[#133e39] transition">
            Request Booking
          </button>
        </div>
      </div>
    </main>
  );
}
