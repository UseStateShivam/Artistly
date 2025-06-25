'use client';

import React from 'react';
import { motion } from 'framer-motion';

// List of client objects with name and logo path
const clients = [
  { name: 'Goodwell', logo: '/logos/goodwell.png' },
  { name: 'Ikigai Labs', logo: '/logos/ikigai.png' },
  { name: 'Layers', logo: '/logos/layers.png' },
  { name: 'Ollio', logo: '/logos/ollio.png' },
  { name: 'Europa', logo: '/logos/europa.png' },
  { name: 'Galileo', logo: '/logos/galileo.png' },
];

// Duplicate the clients array for seamless scrolling effect
const duplicatedClients = [...clients, ...clients];

function Testimonials() {
  return (
    // Container for the testimonials section
    <div className="py-8 overflow-hidden bg-[#f9fafa]">
      {/* Section title */}
      <h2 className="text-center text-xl md:text-2xl font-semibold text-[#174f46] mb-6">
        Our Exceptional Clients
      </h2>

      {/* Scrolling logos container */}
      <div className="relative w-full overflow-hidden px-[150px]">
        {/* Left gradient overlay */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-[556px] bg-gradient-to-r from-[#f9fafa] to-transparent z-10" />
        {/* Right gradient overlay */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-[556px] bg-gradient-to-l from-[#f9fafa] to-transparent z-10" />

        {/* Animated row of client logos */}
        <motion.div
          className="flex gap-8 w-max items-center"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          }}
        >
          {/* Render each client logo */}
          {duplicatedClients.map((client, index) => (
            <img
              key={`${client.name}-${index}`}
              src={client.logo}
              alt={client.name}
              className="h-20 opacity-60"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;

