import React from 'react';
import heroImg from "../assets/hero.png"
import { FaAppStoreIos, FaGooglePlay, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='min-h-[70vh] bg-linear-to-br from-purple-50 via-white to-blue-50 pt-12  relative overflow-hidden'>
            {/* Background Decorative Elements - Smaller */}
            <div className='absolute top-20 left-10 w-48 h-48 bg-purple-300/20 rounded-full blur-2xl animate-pulse'></div>
            <div className='absolute bottom-20 right-10 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000'></div>
            
            <div className='container mx-auto px-4 relative z-10'>
                {/* Text Content */}
                <div className='text-center space-y-2 max-w-3xl mx-auto'>
                    <div className='inline-block px-3 py-0.5 rounded-full bg-linear-to-r from-purple-100 to-blue-100 text-purple-600 text-xs font-semibold mb-1'>
                        🚀 Welcome to the Future
                    </div>
                    
                    <h2 className='font-bold text-4xl md:text-5xl bg-linear-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent animate-gradient'>
                        We Build
                    </h2>
                    
                    <h2 className='font-bold text-4xl md:text-5xl'>
                        <span className='bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient'>
                            Productive
                        </span>{' '}
                        <span className='bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
                            Apps
                        </span>
                    </h2>
                    
                    <p className='text-gray-600 max-w-2xl mx-auto text-base leading-relaxed'>
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                </div>

                {/* Button Section - Smaller */}
                <div className='flex justify-center items-center gap-3 mt-6'>
                    <button className='group cursor-pointer relative px-6 py-2 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold overflow-hidden shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm'>
                        <span className='relative z-10 flex items-center gap-2'>
                            <FaGooglePlay className='text-base group-hover:rotate-12 transition-transform duration-300'/>
                            <span>Google Play</span>
                            <FaArrowRight className='text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300'/>
                        </span>
                        <div className='absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </button>
                    
                    <button className='group cursor-pointer relative px-6 py-2 rounded-full bg-white border-2 border-purple-600 text-purple-600 font-semibold overflow-hidden shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm'>
                        <span className='relative z-10 flex items-center gap-2'>
                            <FaAppStoreIos className='text-base group-hover:rotate-12 transition-transform duration-300'/>
                            <span>App Store</span>
                            <FaArrowRight className='text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300'/>
                        </span>
                        <div className='absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>
                    </button>
                </div>

                {/* Hero Image - Smaller */}
                <div className='mt-8 relative'>
                    <img 
                        className='mx-auto relative z-10 hover:scale-105 transition-transform duration-500 cursor-pointer max-w-lg md:max-w-2xl' 
                        src={heroImg} 
                        alt="Hero illustration" 
                    />
                    
                    {/* Floating Badges - Smaller */}
                    <div className='absolute top-5 left-10 md:left-20 bg-white/80 backdrop-blur-md rounded-full px-3 py-1.5 shadow-lg animate-bounce'>
                        <span className='text-xs font-semibold text-purple-600'>⭐ 4.9 Rating</span>
                    </div>
                    <div className='absolute bottom-10 right-10 md:right-20 bg-white/80 backdrop-blur-md rounded-full px-3 py-1.5 shadow-lg animate-bounce delay-1000'>
                        <span className='text-xs font-semibold text-blue-600'>🎉 1M+ Downloads</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;