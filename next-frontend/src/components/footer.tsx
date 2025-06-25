'use client'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'

// Footer component for the website
function page() {
    return (
        // Main container with background image
        <main className='w-full h-fit relative'>
            {/* Background image for the footer */}
            <img
                src="/footer.avif"
                alt="footer background"
                className='absolute object-cover w-full h-full inset-0 top-0 left-0 right-0 -z-10'
            />
            <footer className="text-white px-6 md:px-12 lg:px-20 py-12">
                {/* Footer content grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 mt-8">
                    {/* Left: Logo, description, and social links */}
                    <div className="space-y-5 col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2">
                            <a href='/' className="font-bold text-[28px] mr-8 text-[#b7f37b]">Artistly</a>
                        </div>
                        <p className="text-sm text-gray-200 leading-relaxed">
                            Expert cleaning solutions for homes and businesses, ensuring spotless results with ease and care.
                        </p>
                        {/* Social media icons */}
                        <div className="flex gap-3 pt-2">
                            <a href="#" className="border border-white rounded-md p-2 hover:bg-white hover:text-black transition">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="border border-white rounded-md p-2 hover:bg-white hover:text-black transition">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="border border-white rounded-md p-2 hover:bg-white hover:text-black transition">
                                <Facebook size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Middle: Navigation links */}
                    <div className="grid grid-cols-3 gap-6 col-span-2">
                        {/* Company links */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-4">COMPANY</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Blog details</a></li>
                            </ul>
                        </div>

                        {/* Services links */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>House cleaning</li>
                                <li>Deep Cleaning</li>
                                <li>Commercial Cleaning</li>
                                <li>Industrial Cleaning</li>
                                <li>Window Cleaning</li>
                                <li>Flood Damage Cleanup</li>
                            </ul>
                        </div>

                        {/* Utility pages links */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-4">Utility pages</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>404</li>
                                <li>Coming soon</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Subscription box */}
                    <div className="bg-[#cbff82] text-[#002f26] p-6 rounded-2xl">
                        <h3 className="text-lg font-bold mb-2">Subscribe for Updates & Special Deals</h3>
                        <p className="text-sm mb-4">
                            Join our growing community of happy customers and stay connected with all things ShineEase.
                        </p>
                        {/* Subscription form */}
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="px-4 py-2 rounded-md border border-[#002f26] bg-white placeholder:text-sm"
                            />
                            <div className="flex items-start gap-2 text-xs">
                                <input type="checkbox" className="mt-1" />
                                <p>By subscribing you agree to our Privacy Policy.</p>
                            </div>
                            <button className="mt-2 bg-[#002f26] text-white px-4 py-2 rounded-md hover:opacity-90">
                                Subscribe now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom: Contact information */}
                <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-[#256f56] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-gray-300">
                    {/* Email */}
                    <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>eamin@grabui.com</span>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>+1-307-285-7290</span>
                    </div>
                    {/* Address */}
                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>6391 Elgin St. Celina, Delaware 10299</span>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default page
