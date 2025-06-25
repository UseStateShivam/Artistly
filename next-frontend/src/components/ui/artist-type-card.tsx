import React from 'react'

type ArtistTypeCardProps = {
  title: string
  description: string
  icon: string
  onClick?: () => void
  className?: string
}

/**
 * Renders a card component representing an artist type with an icon, title, and description.
 * 
 * @param title - The title of the artist type.
 * @param description - A short description of the artist type.
 * @param icon - The URL of the icon image to display.
 * @param onClick - Optional click handler for the card. If not provided, navigates to `/artists/{title}`.
 * @param className - Optional additional CSS classes for the card container.
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
      <div className="absolute inset-0 bg-[#174f46] rounded-xl scale-[1] z-0" />
      <div className="relative z-10 bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-transform duration-300 group-hover:rotate-[5deg]">
        <div className="bg-[#b7f27b] p-3 rounded-md w-fit mb-4">
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-[#003c2f] mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default ArtistTypeCard