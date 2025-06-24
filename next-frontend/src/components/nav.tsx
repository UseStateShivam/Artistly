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
                <button className="bg-[#174f46] border border-[#b7f37b] text-[#b7f37b] font-semibold py-3 px-6 rounded-2xl hover:bg-[#b7f37b] hover:text-[#174f46] transition-colors duration-300 cursor-pointer flex items-center">
                    Let's talk
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 21l1.8-4A7.963 7.963 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Nav;