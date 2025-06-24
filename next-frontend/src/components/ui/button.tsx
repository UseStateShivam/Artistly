interface ButtonProps {
    label: string;
    onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
    return (
        <button
            className="bg-[#b7f37b] text-[#174f46] text-md font-semibold px-6 py-3 rounded-2xl hover:brightness-125 transition cursor-pointer"
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default Button;