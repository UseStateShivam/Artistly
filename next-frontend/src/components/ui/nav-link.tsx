import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Renders a navigation link inside a list item.
 *
 * @param href - The URL to navigate to when the link is clicked.
 * @param children - The content to display inside the link.
 * @param className - Optional CSS classes to apply to the link.
 * @param onClick - Optional onClick handler (useful for closing mobile menu).
 */
function NavLink({
  href,
  children,
  className = 'no-underline text-[#dee4e3] hover:text-[#b7f37b] transition-colors',
  onClick,
}: NavLinkProps) {
  return (
    <li className="w-full md:w-auto">
      <a
        href={href}
        className={`block py-2 md:py-0 ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
}

export default NavLink;
