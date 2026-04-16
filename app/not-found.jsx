"use client"
import Link from 'next/link';
import { FaHome, FaArrowLeft, FaSearch } from 'react-icons/fa';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className='absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-2xl'></div>
            
            <div className="text-center space-y-8 max-w-lg relative z-10">
                {/* Animated 404 Number */}
                <div className="relative">
                    <div className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter">
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                            4
                        </span>
                        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-bounce inline-block">
                            0
                        </span>
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                            4
                        </span>
                    </div>
                    
                    {/* Decorative circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-purple-300/20 blur-3xl -z-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl -z-20"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-10 -right-10 animate-bounce">
                        <div className="w-12 h-12 bg-purple-200 rounded-full blur-xl"></div>
                    </div>
                    <div className="absolute -bottom-10 -left-10 animate-bounce delay-1000">
                        <div className="w-16 h-16 bg-blue-200 rounded-full blur-xl"></div>
                    </div>
                </div>

                {/* Error Message */}
                <div className="space-y-4">
                    <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 text-sm font-semibold mb-2">
                        ⚠️ Error 404
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Page Not Found
                    </h1>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto my-4"></div>
                    
                    <p className="text-gray-600 text-lg max-w-md mx-auto">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                {/* Search Suggestion */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 max-w-md mx-auto">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <FaSearch className="text-purple-500" />
                        <span>Looking for something else?</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <button className='group cursor-pointer relative px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold overflow-hidden shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto'>
                            <span className='relative z-10 flex items-center gap-2'>
                                <FaHome className='text-sm' />
                                <span>Go Back Home</span>
                            </span>
                            <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </button>
                    </Link>
                    
                    <button 
                        onClick={() => window.history.back()}
                        className='group cursor-pointer relative px-6 py-2.5 rounded-full bg-white border-2 border-purple-600 text-purple-600 font-semibold overflow-hidden shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto'
                    >
                        <span className='relative z-10 flex items-center gap-2'>
                            <FaArrowLeft className='text-sm' />
                            <span>Go Back</span>
                        </span>
                        <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>
                    </button>
                </div>

                {/* Helpful Links */}
                <div className="pt-4">
                    <p className="text-gray-500 text-sm mb-3">Or try these helpful links:</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/apps" className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors duration-300">
                            Browse Apps
                        </Link>
                        <span className="text-gray-300">•</span>
                        <Link href="/installed" className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors duration-300">
                            My Installed Apps
                        </Link>
                        <span className="text-gray-300">•</span>
                        <Link href="/dashboard" className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors duration-300">
                            Dashboard
                        </Link>
                    </div>
                </div>

                {/* Fun Fact / Easter Egg */}
                <div className="pt-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs">
                        <span>💡</span>
                        <span>Did you know? We have {15}+ amazing apps waiting for you!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;