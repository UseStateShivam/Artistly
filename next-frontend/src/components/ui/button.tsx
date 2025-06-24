import React from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "outline" | "danger";
}

const variantClasses = {
    primary: "bg-[#b7f37b] text-[#174f46] text-md font-semibold px-6 py-3 rounded-2xl hover:brightness-125 transition cursor-pointer",
    secondary: "bg-[#174f46] border border-[#b7f37b] text-[#b7f37b] font-semibold py-3 px-6 rounded-2xl hover:bg-[#b7f37b] hover:text-[#174f46] transition-colors duration-300 cursor-pointer flex items-center",
    outline: "px-6 py-3 border border-[#174f46] text-[#174f46] rounded-2xl font-medium hover:bg-[#174f46] hover:text-white transition cursor-pointer",
    danger: "bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-red-700 transition cursor-pointer"
};

function Button({ label, onClick, variant = "primary" }: ButtonProps) {
    return (
        <button
            className={variantClasses[variant]}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default Button;