'use client';

import React from 'react';
import { CalendarDays, Leaf, Phone, ShieldCheck } from 'lucide-react';
import SectionHeader from './ui/section-header';
import Button from './ui/button';
import Feature from './ui/feature';

function AboutUs() {
    return (
        <div className="bg-[#f9fafa] py-16 px-6 md:px-12 lg:px-20 relative mb-16" id={'about-us'}>
            <img
                src="./about-free-hand.png"
                alt="hero free hand"
                className='absolute top-[21%] right-[8%] scale-[12%]'
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
                    <div className='mb-8'>
                        <SectionHeader
                            title="WHY CHOOSE US"
                            subtitle="Why Clients Love Our Talented Artists"
                            description="Choosing the right artist matters. That’s why we focus on delivering unparalleled quality, reliability, and care. From using eco-friendly products to offering flexible scheduling and transparent pricing."
                            align="left"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8 mb-8">
                        <Feature/>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <Button label='Learn more' variant='outline' onClick={() => { }} />
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
