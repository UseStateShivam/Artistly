import { artists } from "@/lib/constants/artists";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function page({ params }: Props) {
  const artist = artists.find((a) => a.id === params.id);

  if (!artist) return notFound();

  return (
    <main>
      <h1>{artist.name}</h1>
      <p><strong>Category:</strong> {artist.category}</p>
      <p><strong>Location:</strong> {artist.location}</p>
      <p><strong>Price Range:</strong> {artist.price}</p>
      <p><strong>Bio:</strong> {artist.bio}</p>
    </main>
  );
}
