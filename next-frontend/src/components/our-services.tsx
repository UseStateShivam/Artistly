'use client';

import { services } from '@/lib/constants/services';
import SectionHeader from './ui/section-header';
import ArtistTypeCard from './ui/artist-type-card';

/**
 * Renders the "Our Services" section, displaying a header and a grid of service cards.
 * Each card represents an artistic service and navigates to a specific artist page on click.
 *
 * @component
 */
function OurServices() {
  return (
    <div className="bg-[#f9fafa] w-full h-full relative md:mb-24 lg:mb-40">
      <img
        src="./about-free-hand.png"
        alt="hero free hand"
        className="absolute -top-[5.8%] right-[14%] scale-[10%]"
      />
      <div className='w-full md:w-[50%] mx-auto mb-8'>
        <SectionHeader
          title="OUR SERVICES"
          subtitle="One-Stop Solution for All Your Artistic Needs"
          description="We offer a wide range of professional artistic services tailored to meet your unique needs, a one-time consultation, or specialized services."
        />
      </div>
      <div className="p-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, idx) => (
            <ArtistTypeCard
              key={idx}
              title={service.title}
              description={service.description}
              icon={service.icon}
              onClick={() => window.location.href = `/artists/${service.title.toLowerCase()}`}
              className="transition-transform duration-300"
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default OurServices;
