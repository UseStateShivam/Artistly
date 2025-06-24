'use client';

import React from 'react';

function Nav() {
    return (
        <nav className="flex justify-between items-center p-2 px-16 bg-[#174f46] z-100 top-0 left-0 right-0 fixed">
            <a href='/' className="font-bold text-[28px] mr-8 text-[#b7f37b]">Artistly</a>
            <ul className="flex gap-6 list-none m-0 p-0 font-semibold">
                <li>
                    <a href="/" className="no-underline text-[#dee4e3]">Home</a>
                </li>
                <li>
                    <a href="/artists" className="no-underline text-[#dee4e3]">Artists</a>
                </li>
                <li>
                    <a href="/onboarding" className="no-underline text-[#dee4e3]">Onboarding</a>
                </li>
                <li>
                    <a href="/#about-us" className="no-underline text-[#dee4e3]">About Us</a>
                </li>
            </ul>
            <div className="flex items-center">
                <button className="bg-[#174f46] border border-[#b7f37b] text-[#b7f37b] font-semibold py-3 px-6 rounded-2xl hover:bg-[#b7f37b] hover:text-[#174f46] transition-colors duration-300 cursor-pointer flex items-center" onClick={() => window.location.href = '/dashboard'}>
                    Manager Dashboard
                </button>
            </div>
        </nav>
    );
}

export default Nav;