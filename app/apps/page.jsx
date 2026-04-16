"use client"

import AppCard from '../components/AppCard';
import { HashLoader } from 'react-spinners';
import useApps from '../hooks/useApps';
import Skeleton from '../components/Skeleton';

const AppsPage = () => {
    const {apps, loading} = useApps()
    
    return (
        <div className='min-h-screen py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden'>
            {/* Background Decorative Elements */}
            <div className='absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-2xl'></div>
            
            <div className='container mx-auto px-4 relative z-10'>
                {/* Header Section */}
                <div className='text-center space-y-3 mb-8'>
                    <div className='inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 text-sm font-semibold mb-2'>
                        📱 Our Collection
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent animate-gradient'>
                        Our All Applications
                    </h2>
                    <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                {/* Apps Count Badge */}
                <div className='max-w-7xl mx-auto mb-6'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm'>
                        <div className='w-2 h-2 bg-purple-600 rounded-full animate-pulse'></div>
                        <span className='text-gray-700 font-semibold'>
                            {apps.length} Apps Found
                        </span>
                    </div>
                </div>
                
                {/* Loading or Apps Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-[400px]">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <Skeleton key={index} />
                        ))}
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto'>
                        {apps.map((app, index) => (
                            <AppCard key={index} app={app} />
                        ))}
                    </div>
                )}

                {/* Empty State (Optional) */}
                {!loading && apps.length === 0 && (
                    <div className='text-center py-20'>
                        <div className='text-6xl mb-4'>📭</div>
                        <h3 className='text-2xl font-semibold text-gray-700 mb-2'>No Apps Found</h3>
                        <p className='text-gray-500'>Check back later for new applications!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppsPage;