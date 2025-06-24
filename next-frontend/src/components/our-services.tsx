'use client';

import React from 'react';

const services = [
  {
    icon: '/icons/house-cleaning.svg',
    title: 'House cleaning',
    description:
      'Our house cleaning services are designed to keep your home tidy, and healthy. We take care of all the essential cleaning tasks, from dusting.',
  },
  {
    icon: '/icons/deep-cleaning.svg',
    title: 'Deep Cleaning',
    description:
      'For those times when your home needs more than just a surface clean, our deep cleaning service offers a thorough, detailed approach.',
  },
  {
    icon: '/icons/commercial-cleaning.svg',
    title: 'Commercial Cleaning',
    description:
      'We understand the importance of maintaining a clean and professional environment for your business. Our commercial cleaning services ensure your office.',
  },
  {
    icon: '/icons/industrial-cleaning.svg',
    title: 'Industrial Cleaning',
    description:
      'Our industrial cleaning services are tailored to meet the unique needs of warehouses, factories, and other large-scale facilities.',
  },
  {
    icon: '/icons/window-cleaning.svg',
    title: 'Window cleaning',
    description:
      'Our team delivers streak-free, sparkling clean windows that brighten up your space and enhance your curb appeal.',
  },
  {
    icon: '/icons/flood-cleaning.svg',
    title: 'Flood Damage cleaning',
    description:
      'Our flood damage cleaning service focuses on water removal, drying, and sanitation to prevent mold growth and restore your property.',
  },
];

function OurServices() {
  return (
    <div className="bg-[#f9fafa] w-full h-full relative mb-24">
      <img
        src="./about-free-hand.png"
        alt="hero free hand"
        className="absolute -top-[6.3%] right-[14%] scale-[10%]"
      />
      <div className="flex flex-col justify-center items-center w-[50%] mx-auto">
        <p className="text-sm font-semibold text-[#174f46] tracking-wide mb-3">
          OUR SERVICES
        </p>
        <h2 className="text-[56px] font-bold text-[#174f46] mb-6 leading-[56px] text-center">
          One-Stop Solution for All Your Artistic Needs
        </h2>
        <p className="text-[#174f46] mb-8 leading-relaxed text-center w-[76%] text-lg">
          We offer a wide range of professional artistic services tailored to meet your unique needs, a one-time consultation, or specialized services.
        </p>
      </div>

      <div className="p-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#174f46] rounded-xl scale-[1] z-0" />
              <div className="relative z-10 bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-transform duration-300 group-hover:rotate-[5deg]">
                <div className="bg-[#DFF6DD] p-3 rounded-md w-fit mb-4">
                  <img src={service.icon} alt={service.title} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#003c2f] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
