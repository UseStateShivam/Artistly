import React from "react";

// Define the props for the SectionHeader component
interface SectionHeaderProps {
  title?: string; // Optional title text
  subtitle?: string; // Optional subtitle text
  description?: string; // Optional description text
  align?: "left" | "center"; // Alignment option
}

// Functional component for rendering a section header
function SectionHeader({
  title,
  subtitle,
  description,
  align,
}: SectionHeaderProps) {
  const isLeft = align === "left"; // Determine if alignment is left
  return (
    <div
      // Set flex alignment based on the 'align' prop
      className={`flex flex-col justify-center items-${isLeft ? "start" : "center"} mx-auto`}
    >
      {/* Render the title */}
      <p
        className={`text-sm font-semibold text-[#174f46] tracking-wide mb-3 ${
          isLeft ? "text-left" : "text-center"
        }`}
      >
        {title}
      </p>
      {/* Render the subtitle */}
      <h2
        className={`text-[56px] font-bold text-[#174f46] mb-6 leading-[56px] ${
          isLeft ? "text-left" : "text-center"
        }`}
      >
        {subtitle}
      </h2>
      {/* Render the description */}
      <p
        className={`text-[#174f46] leading-relaxed ${
          isLeft ? "text-left" : "text-center"
        } w-[76%] text-lg`}
      >
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;