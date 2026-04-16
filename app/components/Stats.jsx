import React from 'react';
import { FaDownload, FaStar, FaRocket } from 'react-icons/fa';

const Stats = () => {
    return (
        <div className='bg-gradient-to-br from-purple-700 via-purple-600 to-blue-600 text-white py-16 relative overflow-hidden'>
            {/* Background Decorative Elements */}
            <div className='absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-white/5 to-transparent rounded-full blur-2xl'></div>
            
            <div className='container mx-auto px-4 relative z-10'>
                <div className='text-center space-y-3'>
                    <div className='inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-2'>
                        📊 Our Impact
                    </div>
                    <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                        Trusted by Millions, Built for You
                    </h2>
                    <p className='text-purple-100 max-w-2xl mx-auto'>
                        Join the growing community of users who love our products
                    </p>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto mt-12'>
                    {/* Stats Card 1 */}
                    <div className='group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
                        <div className='absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <div className='relative z-10'>
                            <div className='inline-flex p-3 rounded-full bg-white/20 mb-4 group-hover:scale-110 transition-transform duration-300'>
                                <FaDownload className='text-2xl text-white' />
                            </div>
                            <p className='text-xs font-semibold text-purple-200 uppercase tracking-wider'>Total Downloads</p>
                            <h2 className='text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                                29.6M
                            </h2>
                            <div className='flex items-center justify-center gap-1 mt-3'>
                                <span className='text-green-400 text-sm'>↑</span>
                                <p className='text-sm text-green-300 font-semibold'>21% more than last month</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Card 2 */}
                    <div className='group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
                        <div className='absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <div className='relative z-10'>
                            <div className='inline-flex p-3 rounded-full bg-white/20 mb-4 group-hover:scale-110 transition-transform duration-300'>
                                <FaStar className='text-2xl text-yellow-400' />
                            </div>
                            <p className='text-xs font-semibold text-purple-200 uppercase tracking-wider'>Total Reviews</p>
                            <h2 className='text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                                906K
                            </h2>
                            <div className='flex items-center justify-center gap-1 mt-3'>
                                <span className='text-green-400 text-sm'>↑</span>
                                <p className='text-sm text-green-300 font-semibold'>46% more than last month</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Card 3 */}
                    <div className='group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
                        <div className='absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <div className='relative z-10'>
                            <div className='inline-flex p-3 rounded-full bg-white/20 mb-4 group-hover:scale-110 transition-transform duration-300'>
                                <FaRocket className='text-2xl text-purple-300' />
                            </div>
                            <p className='text-xs font-semibold text-purple-200 uppercase tracking-wider'>Active Apps</p>
                            <h2 className='text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>
                                132+
                            </h2>
                            <div className='flex items-center justify-center gap-1 mt-3'>
                                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                                <p className='text-sm text-purple-200 font-semibold'>31 more will Launch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;