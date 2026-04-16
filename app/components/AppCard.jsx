import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar, FaDownload } from 'react-icons/fa';
import { PiDownloadSimpleBold } from 'react-icons/pi';

const AppCard = ({app}) => {
    return (
        <Link 
            href={`/apps/${app.id}`}
            className='group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100'
        >
            {/* Gradient Overlay on Hover */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
            {/* Image Container */}
            <div className='relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 p-6'>
                <Image 
                    src={app.image} 
                    alt={app.title} 
                    className='w-full h-40 object-contain transform group-hover:scale-110 transition-transform duration-500'
                />
                {/* Image Overlay Glow */}
                <div className='absolute inset-0 bg-gradient-to-t from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>

            {/* Content Section */}
            <div className='p-4'>
                <h2 className='font-bold text-lg text-gray-800 group-hover:text-purple-600 transition-colors duration-300 line-clamp-1'>
                    {app.title}
                </h2>
                
                {/* Stats Buttons */}
                <div className='flex justify-between items-center gap-3 mt-3'>
                    {/* Downloads Button */}
                    <div className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 group-hover:bg-green-100 transition-all duration-300'>
                        <PiDownloadSimpleBold className='text-green-600 text-sm' />
                        <span className='text-green-700 font-semibold text-sm'>{app.downloads}</span>
                    </div>
                    
                    {/* Rating Button */}
                    <div className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 group-hover:bg-orange-100 transition-all duration-300'>
                        <FaStar className='text-orange-500 text-sm' />
                        <span className='text-orange-700 font-semibold text-sm'>{app.ratingAvg}</span>
                    </div>
                </div>

                {/* Optional: Install Button that appears on hover */}
                <button className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                    <div className='bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full p-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300'>
                        <FaDownload className='text-xs' />
                    </div>
                </button>
            </div>

            {/* Decorative shine effect */}
            <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
        </Link>
    );
};

export default AppCard;