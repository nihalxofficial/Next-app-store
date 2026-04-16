
'use client'
import logo from "../../assets/logo.png"
import { FaGithub, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import Image from 'next/image';
import MyNavLink from './MyNavLink';

const Navbar = () => {
    return (
        <nav className='bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100'>
            <div className='flex justify-between items-center gap-4 container mx-auto px-4 py-3'>
                {/* Logo Section */}
                <div className='flex justify-between items-center gap-3 group cursor-pointer'>
                    <div className='relative'>
                        <Image src={logo} alt="logo" className='max-w-10 transition-transform duration-300 group-hover:scale-110'/>
                        <div className='absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300'></div>
                    </div>
                    <span className='text-2xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient'>
                        Hero.IO
                    </span>
                </div>

                {/* Search Bar - Optional but adds cool factor */}
                <div className='hidden md:flex items-center flex-1 max-w-sm mx-3'>
                    <div className='relative w-full'>
                        <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm' />
                        <input 
                            type="text" 
                            placeholder="Search apps..." 
                            className='w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-300'
                        />
                    </div>
                </div>

                {/* Navigation Links */}
                <ul className='hidden md:flex justify-between items-center gap-5 font-medium'>
                    <li><MyNavLink to="/">Home</MyNavLink></li>
                    <li><MyNavLink to="/apps">Apps</MyNavLink></li>
                    <li><MyNavLink to="/installed">Installed</MyNavLink></li>
                    <li><MyNavLink to="/dashboard">Dashboard</MyNavLink></li>
                </ul>

                {/* Right Section */}
                <div className='flex items-center gap-3'>
                    {/* Notification Bell */}
                    {/* <button className='relative p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group'>
                        <FaBell className='text-gray-600 text-lg group-hover:text-purple-600 transition-colors' />
                        <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse'></span>
                    </button> */}

                    {/* Contribute Button */}
                    <button className='btn btn-primary flex items-center justify-between gap-0.5 cursor-pointer bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-none rounded-full px-5 py-2 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                        <FaGithub className='text-[16px] mr-2'/>
                        Contribute
                    </button>

                    {/* User Avatar */}
                    <button className='hidden md:grid p-1 cursor-pointer rounded-full hover:ring-2 hover:ring-purple-400 transition-all duration-300'>
                        <FaUserCircle className='text-gray-600 text-3xl hover:text-purple-600 transition-colors' />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Button - Hidden on desktop */}
            {/* <div className='md:hidden absolute right-4 top-4'>
                <button className='p-2 rounded-lg hover:bg-gray-100 transition-colors'>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div> */}

            {/* Add custom animation styles */}
            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 3s linear infinite;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;