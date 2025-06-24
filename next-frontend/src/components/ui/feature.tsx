import { CalendarDays, Leaf, ShieldCheck } from 'lucide-react';
import React from 'react'

const features = [
  {
    icon: <ShieldCheck className="text-[#174f46]" size={20} />,
    label: "Experienced & Reliable",
  },
  {
    icon: <CalendarDays className="text-[#174f46]" size={20} />,
    label: "Flexible Scheduling",
  },
  {
    icon: <Leaf className="text-[#174f46]" size={20} />,
    label: "Eco-Friendly Products",
  },
  {
    icon: (
      <svg className="text-[#174f46]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" height={20} width={20}>
        <path d="M3 10s1-2 9-2 9 2 9 2v6s-1 2-9 2-9-2-9-2v-6z"></path>
      </svg>
    ),
    label: "Transparent Pricing",
  },
];

function Feature() {
  return (
    <>
      {features.map((feature, idx) => (
        <div className="flex items-center gap-3" key={idx}>
          {feature.icon}
          <span className="font-medium text-[#002f26]">{feature.label}</span>
        </div>
      ))}
    </>
  )
}

export default Feature