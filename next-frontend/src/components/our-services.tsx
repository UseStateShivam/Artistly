'use client';

import { services } from '@/lib/constants/services';
import SectionHeader from './ui/section-header';

function OurServices() {
  return (
    <div className="bg-[#f9fafa] w-full h-full relative mb-24">
      <img
        src="./about-free-hand.png"
        alt="hero free hand"
        className="absolute -top-[5.8%] right-[14%] scale-[10%]"
      />
      <div className='w-[50%] mx-auto mb-8'>
        <SectionHeader
          title="OUR SERVICES"
          subtitle="One-Stop Solution for All Your Artistic Needs"
          description="We offer a wide range of professional artistic services tailored to meet your unique needs, a one-time consultation, or specialized services."
        />
      </div>
      <div className="p-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer"
              onClick={() => window.location.href = `/artists/${service.title.toLowerCase()}`}
            >
              <div className="absolute inset-0 bg-[#174f46] rounded-xl scale-[1] z-0" />
              <div className="relative z-10 bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-transform duration-300 group-hover:rotate-[5deg]">
                <div className="bg-[#b7f27b] p-3 rounded-md w-fit mb-4">
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
