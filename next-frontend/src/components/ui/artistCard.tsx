import Image from "next/image";

// Define the props for the ArtistCard component
type Props = {
    id: number;
    name: string;
    category: string;
    price: string;
    location: string;
    image: string;
};

// ArtistCard component displays artist information in a card layout
export default function ArtistCard({ name, category, price, location, image , id }: Props) {
    return (
        <div
            className="w-[300px] h-[420px] bg-[#dee4e3] border border-[#dbe2ea] rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
            {/* Artist image */}
            <div className="h-[180px] w-full overflow-hidden rounded-xl">
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={180}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Artist details */}
            <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold text-[#174f46]">{name}</h2>
                    <p className="text-sm text-[#174f46] capitalize">{category}</p>
                    <p className="text-sm text-gray-700">{location}</p>
                    <p className="text-sm font-semibold text-[#174f46]">{price}</p>
                </div>
                {/* Button to ask for a quote */}
                <button
                    className="bg-[#174f46] text-[#b7f37b] px-4 py-2 rounded-lg hover:bg-[#133e39] transition cursor-pointer"
                    onClick={e => {
                        e.stopPropagation();
                        window.location.href = `/artists/${category}/${id}`;
                    }}
                >
                    Ask for Quote
                </button>
            </div>
        </div>
    );
}
