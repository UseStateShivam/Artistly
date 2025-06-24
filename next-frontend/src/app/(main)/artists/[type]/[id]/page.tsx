'use client';

import { artistTypes } from "@/lib/constants/artist-types";
import { artistData } from "@/lib/constants/artist-data";
import { notFound } from "next/navigation";
import ArtistCard from "@/components/artistCard";
import { use } from "react";

type Props = {
  params: Promise<{ type: string }>;
};

export default function ArtistTypePage({ params }: Props) {
  const { type } = use(params);

  const valid = artistTypes.includes(type);
  if (!valid) return notFound();

  const filteredArtists = artistData.filter((a) => a.category === type);

  return (
    <main className="py-28 px-16">
      <h1 className="text-3xl font-bold capitalize mb-8 text-[#174f46]">{type}</h1>

      {filteredArtists.length === 0 ? (
        <p className="text-[#174f46]">No artists found in this category.</p>
      ) : (
        <div className="grid gap-6 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {filteredArtists.map((artist, idx) => (
            <ArtistCard key={idx} {...artist} />
          ))}
        </div>
      )}
    </main>
  );
}
