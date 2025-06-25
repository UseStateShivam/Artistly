import React from 'react'

// Define the props for the HeroRating component
interface HeroRatingProps {
    rating?: number
    platform?: string
    description?: string
}

// Sample ratings data to display
const ratingsData = [
    { rating: 2, platform: 'Trustpilot', description: 'Always 5 Star' },
    { rating: 1, platform: 'Capterra', description: 'Always 4.3 Star' },
]

// Component to display a single rating item
const HeroRating: React.FC<HeroRatingProps> = ({
    rating,
    platform,
    description,
}) => (
    <div>
        {/* Display stars based on rating and the platform name */}
        <p className="font-bold">
            {rating ? '⭐'.repeat(rating) : null} {platform}
        </p>
        {/* Display the description */}
        <p className="text-sm text-[#dee4e3]">{description}</p>
    </div>
)

// Component to render the list of ratings
export default function HeroRatingsList() {
    return (
        <>
            {/* Map through ratingsData and render a HeroRating for each */}
            {ratingsData.map((item, idx) => (
                <HeroRating
                    key={item.platform + idx}
                    rating={item.rating}
                    platform={item.platform}
                    description={item.description}
                />
            ))}
        </>
    )
}
