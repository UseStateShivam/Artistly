'use client';

import React, { useState } from 'react';
import NavLink from './ui/nav-link';
import Button from './ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#174f46] p-4 md:px-16 flex items-center justify-between">
            {/* Logo */}
            <Link href='/' className="font-bold text-[28px] text-[#b7f37b]">Artistly</Link>

            {/* Hamburger Toggle (Visible on mobile) */}
            <button
                className="md:hidden text-[#b7f37b]"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 list-none m-0 p-0 font-semibold text-white">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/artists">Artists</NavLink>
                <NavLink href="/onboarding">Onboarding</NavLink>
                <NavLink href="/#about-us">About Us</NavLink>
            </ul>

            {/* Manager Dashboard Button (hidden in mobile menu, shown on desktop) */}
            <div className="hidden md:flex">
                <Button
                    label="Manager Dashboard"
                    onClick={() => (window.location.href = '/dashboard')}
                    variant="secondary"
                />
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-[64px] left-0 w-full bg-[#174f46] flex flex-col gap-4 items-center p-4 md:hidden z-50 shadow-md">
                    <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink href="/artists" onClick={() => setIsOpen(false)}>Artists</NavLink>
                    <NavLink href="/onboarding" onClick={() => setIsOpen(false)}>Onboarding</NavLink>
                    <NavLink href="/#about-us" onClick={() => setIsOpen(false)}>About Us</NavLink>
                    <Button
                        label="Manager Dashboard"
                        onClick={() => {
                            setIsOpen(false);
                            window.location.href = '/dashboard';
                        }}
                        variant="secondary"
                    />
                </div>
            )}
        </nav>
    );
}

export default Nav;
