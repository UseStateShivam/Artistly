import React from 'react'

interface HeroRatingProps {
    rating?: number
    platform?: string
    description?: string
}

const ratingsData = [
    { rating: 2, platform: 'Trustpilot', description: 'Always 5 Star' },
    { rating: 1, platform: 'Capterra', description: 'Always 4.3 Star' },
]

const HeroRating: React.FC<HeroRatingProps> = ({
    rating,
    platform,
    description,
}) => (
    <div>
        <p className="font-bold">
            {rating ? '⭐'.repeat(rating) : null} {platform}
        </p>
        <p className="text-sm text-[#dee4e3]">{description}</p>
    </div>
)

export default function HeroRatingsList() {
    return (
        <>
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