import React from 'react'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

/**
 * Renders a navigation link inside a list item.
 *
 * @param href - The URL to navigate to when the link is clicked.
 * @param children - The content to display inside the link.
 * @param className - Optional CSS classes to apply to the link. Defaults to "no-underline text-[#dee4e3]".
 */
function NavLink({ href, children, className = "no-underline text-[#dee4e3]" }: NavLinkProps) {
  return (
    <li>
      <a href={href} className={className}>
        {children}
      </a>
    </li>
  )
}

export default NavLink