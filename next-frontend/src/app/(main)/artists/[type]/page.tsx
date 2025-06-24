'use client';

import { artistTypes } from "@/lib/constants/artist-types";
import { notFound } from "next/navigation";

type Props = {
  params: { type: string };
};

export default function page({ params }: Props) {
  const artist = artistTypes.find((a) => a === params.type);

  if (!artist) return notFound();

  return (
    <main className="pt-32">
      <h1>{artist}</h1>
    </main>
  );
}
