import React from 'react'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

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