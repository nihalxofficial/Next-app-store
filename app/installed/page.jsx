"use client"
import  { useContext } from 'react';
import { InstalledAppsContext } from '../context/InstalledAppsContext';
import InstallCard from '../components/InstallCard/InstallCard';
import { FaArrowLeft, FaDownload, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const InstallApps = () => {
    const {installApps} = useContext(InstalledAppsContext);
    
    // Ensure installApps is an array
    const installedAppsList = Array.isArray(installApps) ? installApps : [];
    
    return (
        <div className='min-h-screen py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden'>
            {/* Background Decorative Elements */}
            <div className='absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-2xl'></div>
            
            <div className='container mx-auto px-4 relative z-10'>
                {/* Back Button */}
                <Link href="/apps" className='inline-flex items-center gap-2 mb-6 text-purple-600 hover:text-purple-700 transition-colors duration-300 group'>
                    <FaArrowLeft className='group-hover:-translate-x-1 transition-transform duration-300' />
                    <span className='font-semibold'>Back to Apps</span>
                </Link>

                {/* Header Section */}
                <div className='text-center space-y-3 mb-8'>
                    <div className='inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 text-sm font-semibold mb-2'>
                        📦 Your Collection
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent animate-gradient'>
                        Your Installed Apps
                    </h2>
                    <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
                        Manage and explore all the apps you've installed
                    </p>
                </div>

                {/* Apps Count Badge */}
                <div className='max-w-6xl mx-auto mb-6'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm'>
                        <FaDownload className='text-purple-600 text-sm' />
                        <span className='text-gray-700 font-semibold'>
                            {installedAppsList.length} {installedAppsList.length === 1 ? 'App' : 'Apps'} Installed
                        </span>
                    </div>
                </div>

                {/* Installed Apps List */}
                {installedAppsList.length > 0 ? (
                    <div className='max-w-6xl mx-auto space-y-4'>
                        {installedAppsList.map((app) => (
                            <InstallCard key={app.id} app={app} />
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className='max-w-6xl mx-auto text-center py-20'>
                        <div className='relative inline-block'>
                            <div className='text-8xl mb-4 animate-bounce'>📭</div>
                            <div className='absolute -top-2 -right-2 w-6 h-6 bg-purple-600 rounded-full animate-pulse'></div>
                        </div>
                        <h3 className='text-2xl font-bold text-gray-800 mb-2'>No Apps Installed Yet</h3>
                        <p className='text-gray-500 mb-6'>Start exploring and install your favorite apps!</p>
                        <Link href="/apps">
                            <button className='group cursor-pointer relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold overflow-hidden shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105'>
                                <span className='relative z-10 flex items-center gap-2'>
                                    <FaShoppingCart className='text-lg' />
                                    <span>Browse Apps</span>
                                </span>
                                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </button>
                        </Link>
                    </div>
                )}

                {/* Storage Info Footer */}
                {installedAppsList.length > 0 && (
                    <div className='max-w-6xl mx-auto mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200'>
                        <div className='flex flex-wrap justify-between items-center gap-4 text-sm'>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                                <span className='text-gray-600'>Total Apps: {installedAppsList.length}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                <span className='text-gray-600'>
                                    Total Size: {installedAppsList.reduce((total, app) => total + (app?.size || 0), 0)} MB
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                                <span className='text-gray-600'>Last updated: Today</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InstallApps;