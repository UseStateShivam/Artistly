'use client';

import React from 'react';
import { CalendarDays, Leaf, Phone, ShieldCheck } from 'lucide-react';

function AboutUs() {
    return (
        <div className="bg-[#f9fafa] py-16 px-6 md:px-12 lg:px-20 relative mb-16" id={'about-us'}>
            <img
                src="./about-free-hand.png"
                alt="hero free hand"
                className='absolute top-[27%] right-[8%] scale-[12%]'
            />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative flex items-end justify-center">
                    <img
                        src="/about-img-1.png"
                        alt="Cleaning in action"
                        className="rounded-3xl w-[65%] h-auto object-cover"
                    />
                    <img
                        src="/about-img-2.png"
                        alt="Cleaning Tools"
                        className="rounded-2xl w-[36%] shadow-md ml-6 -mt-10"
                    />
                </div>
                <div className='flex flex-col justify-end items-start h-full w-full'>
                    <p className="text-sm font-semibold text-[#174f46] tracking-wide mb-2">
                        WHY CHOOSE US
                    </p>
                    <h2 className="text-[56px] font-bold text-[#174f46] mb-6 leading-[56px]">
                        Why Clients Love Our<br />Talented Artists
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Choosing the right artist matters. That’s why we focus on delivering
                        unparalleled quality, reliability, and care. From using eco-friendly products to
                        offering flexible scheduling and transparent pricing.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8 mb-8">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-[#174f46]" size={20} />
                            <span className="font-medium text-[#002f26]">Experienced & Reliable</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CalendarDays className="text-[#174f46]" size={20} />
                            <span className="font-medium text-[#002f26]">Flexible Scheduling</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Leaf className="text-[#174f46]" size={20} />
                            <span className="font-medium text-[#002f26]">Eco-Friendly Products</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg className="text-[#174f46]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" height={20} width={20}>
                                <path d="M3 10s1-2 9-2 9 2 9 2v6s-1 2-9 2-9-2-9-2v-6z"></path>
                            </svg>
                            <span className="font-medium text-[#002f26]">Transparent Pricing</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <button className="px-6 py-3 border border-[#174f46] text-[#174f46] rounded-2xl font-medium hover:bg-[#174f46] hover:text-white transition cursor-pointer">
                            Learn more
                        </button>
                        <a href="tel:+917814686228" className="flex items-center gap-2 text-[#174f46] font-medium">
                            <Phone size={18} />
                            +91-7814686228
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
