import { CUSTOMER_COUNT, CUSTOMER_LABEL, USERS } from '@/lib/constants/hero-testimonials'
import React from 'react'

// SatisfactionCard component displays user avatars and customer statistics
function SatisfactionCard() {
    return (
        // Card container with styling and positioning
        <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-4 border border-[#dbe2ea] shadow absolute bottom-[20%] left-0 z-[100]">
            {/* User avatars */}
            <div className="flex -space-x-6">
                {USERS.map((user, idx) => (
                    <img
                        key={user.src}
                        src={user.src}
                        alt={user.alt}
                        className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    />
                ))}
            </div>

            {/* Customer statistics text */}
            <div className="text-[#174f46]">
                <p className="font-bold leading-none text-xl mb-1">{CUSTOMER_COUNT}</p>
                <p className="text-md leading-none">{CUSTOMER_LABEL}</p>
            </div>
        </div>
    )
}

export default SatisfactionCard
