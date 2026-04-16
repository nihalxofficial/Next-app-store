"use client"

import  { useContext, useEffect, useState } from 'react';
import useApps from '../../hooks/useApps';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import { TbFileLike } from 'react-icons/tb';
import { FaStar, FaArrowLeft, FaCheck } from 'react-icons/fa';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';
import { toast } from 'react-toastify';
import Link from 'next/link';

import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  BarChart
} from 'recharts';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const AppDetails = () => {
    const {id} = useParams()
    
    const {apps, loading} = useApps();
    const expectedApp = apps.find(app => String(app.id) === id)

    const {installApps, setInstallApps} = useContext(InstalledAppsContext)
    const [isInstalled, setIsInstalled] = useState(false);

    // Check if app is already installed when component loads or installApps changes
    useEffect(() => {
        const checkInstallation = () => {
            const isExist = installApps.find(app => app.id === Number(id));
            setIsInstalled(!!isExist);
        };
        checkInstallation();
    }, [installApps, id]);

    const handleInstallApp = (app) => {
        const isExist = installApps.find(app => app.id === Number(id))
        if(isExist){
            toast.error(`${app.title} is already installed!`)
        }else{
            setInstallApps([...installApps, expectedApp])
            setIsInstalled(true);
            toast.success(`${app.title} is installed successfully!`)
        }
    }

    // Prepare data for the chart
    const chartData = expectedApp?.ratings?.map(rating => ({
        name: rating.name,
        count: rating.count,
        value: rating.count
    })) || [];

    // Colors for the bars
    const barColors = {
        "1 star": "#EF4444",
        "2 star": "#F59E0B",
        "3 star": "#EAB308",
        "4 star": "#22C55E",
        "5 star": "#10B981"
    };

    // Custom Tooltip
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className='bg-white/95 backdrop-blur-md rounded-lg p-3 shadow-lg border border-gray-200'>
                    <p className='font-semibold text-gray-800'>{label}</p>
                    <p className='text-purple-600 font-bold'>
                        {payload[0].value.toLocaleString()} reviews
                    </p>
                </div>
            );
        }
        return null;
    };

    if(loading) {
        return (
            <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 via-white to-blue-50'>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
                    <p className="text-gray-600">Loading app details...</p>
                </div>
            </div>
        )
    }

    if(!expectedApp) {
        return (
            <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 via-white to-blue-50'>
                <div className="text-center space-y-4">
                    <div className="text-6xl">🔍</div>
                    <h2 className="text-2xl font-bold text-gray-800">App Not Found</h2>
                    <p className="text-gray-600">The app you're looking for doesn't exist.</p>
                    <Link href="/apps">
                        <button className="px-6 py-2 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300">
                            Back to Apps
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden'>
            {/* Background Decorative Elements */}
            <div className='absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
            
            <div className='container mx-auto px-4 relative z-10'>
                {/* Back Button */}
                <Link href="/apps" className='inline-flex items-center gap-2 mb-6 text-purple-600 hover:text-purple-700 transition-colors duration-300 group'>
                    <FaArrowLeft className='group-hover:-translate-x-1 transition-transform duration-300' />
                    <span className='font-semibold'>Back to Apps</span>
                </Link>

                {/* Main Content */}
                <div className='bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100'>
                    <div className='p-8 md:p-10'>
                        {/* App Header Section */}
                        <div className='flex flex-col md:flex-row gap-8'>
                            {/* App Icon */}
                            <div className='flex-shrink-0'>
                                <div className='w-60 h-60 md:w-75 md:h-75 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl flex items-center justify-center p-6 shadow-lg'>
                                    <Image 
                                        src={expectedApp?.image} 
                                        alt={expectedApp?.title} 
                                        width={200}
                                        height={200}
                                        className='w-full h-full object-contain transform hover:scale-105 transition-transform duration-500'
                                    />
                                </div>
                            </div>

                            {/* App Info */}
                            <div className='flex-grow space-y-4'>
                                <div>
                                    <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent'>
                                        {expectedApp?.title}
                                    </h2>
                                    <p className='text-gray-600 mt-1'>
                                        Developed by <span className='text-purple-600 font-bold'>{expectedApp?.companyName}</span>
                                    </p>
                                </div>

                                <div className='divider my-4'></div>

                                {/* Stats Grid */}
                                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                                    {/* Downloads */}
                                    <div className='group p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300'>
                                        <PiDownloadSimpleBold className='text-green-600 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300'/>
                                        <p className='text-gray-600 text-sm font-medium'>Downloads</p>
                                        <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>{expectedApp?.downloads}</h2>
                                    </div>

                                    {/* Ratings */}
                                    <div className='group p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-all duration-300'>
                                        <FaStar className='text-orange-600 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300'/>
                                        <p className='text-gray-600 text-sm font-medium'>Average Ratings</p>
                                        <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>{expectedApp?.ratingAvg}</h2>
                                    </div>

                                    {/* Reviews */}
                                    <div className='group p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300'>
                                        <TbFileLike className='text-purple-600 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300'/>
                                        <p className='text-gray-600 text-sm font-medium'>Total Reviews</p>
                                        <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>{expectedApp?.reviews}</h2>
                                    </div>
                                </div>

                                {/* Install Button - Conditionally styled based on installation status */}
                                {!isInstalled ? (
                                    <button 
                                        onClick={() => handleInstallApp(expectedApp)} 
                                        className='group cursor-pointer relative w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold overflow-hidden shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105'
                                    >
                                        <span className='relative z-10 flex items-center justify-center gap-2'>
                                            <PiDownloadSimpleBold className='text-xl group-hover:animate-bounce' />
                                            <span>Install Now ({expectedApp?.size} MB)</span>
                                        </span>
                                        <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                    </button>
                                ) : (
                                    <button 
                                        disabled
                                        className='group relative w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg cursor-default'
                                    >
                                        <span className='relative z-10 flex items-center justify-center gap-2'>
                                            <FaCheck className='text-xl' />
                                            <span>Installed</span>
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className='divider my-8'></div>

                        {/* Ratings Distribution Graph */}
                        <div className='mb-8'>
                            <div className='flex items-center justify-between mb-6'>
                                <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent'>
                                    Ratings Distribution
                                </h2>
                                <div className='flex items-center gap-2 text-sm text-gray-500'>
                                    <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                                    <span>Based on {expectedApp?.reviews} reviews</span>
                                </div>
                            </div>
                            
                            <div className='bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-inner'>
                                <ResponsiveContainer width="100%" height={350}>
                                    <BarChart
                                        data={chartData}
                                        layout="vertical"
                                        margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
                                        barCategoryGap={8}
                                        barGap={4}
                                    >
                                        <CartesianGrid 
                                            strokeDasharray="3 3" 
                                            stroke="#E5E7EB" 
                                            horizontal={false}
                                        />
                                        <XAxis 
                                            type="number" 
                                            tickFormatter={(value) => value.toLocaleString()}
                                            stroke="#9CA3AF"
                                            tick={{ fill: '#6B7280', fontSize: 12 }}
                                        />
                                        <YAxis 
                                            type="category" 
                                            dataKey="name" 
                                            stroke="#9CA3AF"
                                            tick={{ fill: '#6B7280', fontSize: 13, fontWeight: 500 }}
                                            width={70}
                                        />
                                        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F3F4F6' }} />
                                        <Bar 
                                            dataKey="count" 
                                            radius={[0, 8, 8, 0]}
                                            barSize={32}
                                        >
                                            {chartData.map((entry, index) => (
                                                <Cell 
                                                    key={`cell-${index}`} 
                                                    fill={barColors[entry.name] || "#8B5CF6"}
                                                    className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                                                />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Rating Summary Cards */}
                            <div className='grid grid-cols-5 gap-2 mt-4'>
                                {chartData.map((rating, index) => {
                                    const totalReviews = chartData.reduce((sum, r) => sum + r.count, 0);
                                    const percentage = ((rating.count / totalReviews) * 100).toFixed(1);
                                    return (
                                        <div key={index} className='text-center p-2 rounded-lg bg-white/50 backdrop-blur-sm'>
                                            <div className='text-lg font-bold' style={{ color: barColors[rating.name] }}>
                                                {rating.name.split(' ')[0]}
                                            </div>
                                            <div className='text-xs text-gray-500 mt-1'>{percentage}%</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='divider my-8'></div>

                        {/* Description Section */}
                        <div className='space-y-3'>
                            <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent'>
                                Description
                            </h2>
                            <p className='text-gray-600 leading-relaxed'>
                                {expectedApp?.description}
                            </p>
                        </div>

                        {/* Additional Info */}
                        <div className='mt-8 pt-6 border-t border-gray-100'>
                            <div className='flex flex-wrap gap-4 text-sm text-gray-500'>
                                <span className='flex items-center gap-1'>
                                    <div className='w-1.5 h-1.5 bg-purple-600 rounded-full'></div>
                                    Version: {expectedApp?.version || '1.0.0'}
                                </span>
                                <span className='flex items-center gap-1'>
                                    <div className='w-1.5 h-1.5 bg-purple-600 rounded-full'></div>
                                    Updated: {expectedApp?.updated || 'Recently'}
                                </span>
                                <span className='flex items-center gap-1'>
                                    <div className='w-1.5 h-1.5 bg-purple-600 rounded-full'></div>
                                    Category: {expectedApp?.category || 'Application'}
                                </span>
                                <span className='flex items-center gap-1'>
                                    <div className='w-1.5 h-1.5 bg-purple-600 rounded-full'></div>
                                    Requires: Android 6.0+
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;