import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function NavLink({
  href,
  children,
  className = '',
  onClick,
}: NavLinkProps) {
  return (
    <li className="w-full md:w-auto list-none">
      <a
        href={href}
        className={`
          block w-full text-center md:text-left px-4 py-3 md:py-0 rounded-md
          text-[#dee4e3] hover:text-[#b7f37b] hover:bg-[#174f46]/10
          transition-all duration-200 ease-in-out
          ${className}
        `}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
}

export default NavLink;
