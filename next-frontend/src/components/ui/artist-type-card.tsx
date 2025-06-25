import React from 'react';
import Image from 'next/image';

type ArtistTypeCardProps = {
  title: string;
  description: string;
  icon: string;
  onClick?: () => void;
  className?: string;
};

/**
 * Renders a card component representing an artist type with an icon, title, and description.
 */
function ArtistTypeCard({
  title,
  description,
  icon,
  onClick,
  className = '',
}: ArtistTypeCardProps) {
  return (
    <div
      className={`group relative cursor-pointer ${className}`}
      onClick={
        onClick
          ? onClick
          : () => (window.location.href = `/artists/${title.toLowerCase()}`)
      }
    >
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[#174f46] rounded-xl z-0" />

      {/* Content Card */}
      <div className="relative z-10 bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-transform duration-300 group-hover:rotate-[5deg] h-full">

        {/* Mobile: Icon & Title centered */}
        <div className="flex flex-col items-center justify-center text-center h-full md:items-start md:justify-start md:text-left">
          <div className="bg-[#b7f27b] p-3 rounded-md w-fit mb-4">
            <Image
              src={icon}
              alt={title}
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>

          <h3
            className="text-lg font-semibold text-[#003c2f] mb-1 max-w-full truncate"
            title={title} // shows full title on hover
          >
            {title}
          </h3>

          {/* Description hidden on small screens */}
          <p className="text-sm text-gray-600 hidden md:block">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ArtistTypeCard;
