"use client"

// import React, { use, useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import AppCard from './AppCard';
import { HashLoader } from 'react-spinners';
import useApps from '../hooks/useApps';
import Link from 'next/link';

const appsPromise = fetch("/data.json").then((res) => res.json())
const TrendingApps = () => {

    const {apps, loading} = useApps()
    
    

    return (
        <div className='py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden'>
            {/* Background Decorative Elements */}
            <div className='absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
            
            <div className='container mx-auto px-4 relative z-10'>
                {/* Header Section */}
                <div className='mb-12 text-center space-y-3'>
                    <div className='inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 text-sm font-semibold mb-2'>
                        🔥 Hot Right Now
                    </div>
                    <h2 className='font-bold mb-4 text-4xl md:text-5xl bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent animate-gradient'>
                        Trending Apps
                    </h2>
                    <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>
                
                {/* Loading or Apps Grid */}
                {loading ? (
                    <div className='flex justify-center items-center min-h-100'>
                        <HashLoader color="#7C3AED" size={60} />
                    </div>
                ) : (
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto'>
                            {apps.slice(0, 8).map((app, index) => (
                                <AppCard key={index} app={app} />
                            ))}
                        </div>
                        
                        {/* View All Button */}
                        <div className='text-center mt-12'>
                            <Link href="/apps">
                                <button className='group relative px-8 py-3 rounded-full bg-gradient-to-r cursor-pointer from-purple-600 to-blue-600 text-white font-semibold overflow-hidden shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105'>
                                    <span className='relative z-10 flex items-center gap-2'>
                                        <span>View All Apps</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                    <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                </button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default TrendingApps;