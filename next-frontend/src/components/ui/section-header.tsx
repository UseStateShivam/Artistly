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
      className={`flex flex-col justify-center ${
        isLeft ? "items-start text-left" : "items-center text-center"
      } w-full mx-auto px-4 md:px-0`}
    >
      {/* Title */}
      {title && (
        <p className="text-sm font-semibold text-[#174f46] tracking-wide mb-3">
          {title}
        </p>
      )}

      {/* Subtitle */}
      {subtitle && (
        <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-[#174f46] mb-6 leading-tight">
          {subtitle}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className="text-[#174f46] leading-relaxed text-base sm:text-lg w-full max-w-[90%] md:max-w-[76%]">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
