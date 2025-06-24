'use client';

import React from 'react';
import NavLink from './ui/nav-link';
import Button from './ui/button';

function Nav() {
    return (
        <nav className="flex justify-between items-center p-2 px-16 bg-[#174f46] z-[100] top-0 left-0 right-0 fixed">
            <a href='/' className="font-bold text-[28px] mr-8 text-[#b7f37b]">Artistly</a>
            <ul className="flex gap-6 list-none m-0 p-0 font-semibold">
                <NavLink href="/">
                    Home
                </NavLink>
                <NavLink href="/artists">
                    Artists
                </NavLink>
                <NavLink href="/onboarding">
                    Onboarding
                </NavLink>
                <NavLink href="/#about-us">
                    About Us
                </NavLink>
            </ul>
            <div className="flex items-center">
                <Button label='Manager Dashboard' onClick={() => window.location.href = '/dashboard'} variant='secondary' />
            </div>
        </nav>
    );
}

export default Nav;