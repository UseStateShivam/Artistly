import React from "react";

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

function SectionHeader({
  title,
  subtitle,
  description,
  align,
}: SectionHeaderProps) {
  const isLeft = align === "left";
  return (
    <div
      className={`flex flex-col justify-center items-${isLeft ? "start" : "center"} mx-auto`}
    >
      <p
        className={`text-sm font-semibold text-[#174f46] tracking-wide mb-3 ${
          isLeft ? "text-left" : "text-center"
        }`}
      >
        {title}
      </p>
      <h2
        className={`text-[56px] font-bold text-[#174f46] mb-6 leading-[56px] ${
          isLeft ? "text-left" : "text-center"
        }`}
      >
        {subtitle}
      </h2>
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