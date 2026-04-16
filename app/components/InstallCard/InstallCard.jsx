import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';
import { toast } from 'react-toastify';
import { FaStar, FaTrashAlt, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import { Link } from 'react-router';

const InstallCard = ({app}) => {
    const {installApps, setInstallApps} = useContext(InstalledAppsContext)
    
    const handleUninstall = (currentApp) => {
        const newArr = installApps.filter(app => app.id !== currentApp.id)
        setInstallApps(newArr)
        toast.warning(`${app.title} is uninstalled!`)
    } 
    
    return (
        <div className='group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100'>
            {/* Gradient Overlay on Hover */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
            <div className='p-5 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10'>
                {/* Left Section - App Info */}
                <div className='flex flex-col sm:flex-row items-center gap-4 flex-grow'>
                    {/* App Icon */}
                    <div className='bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl h-20 w-20 p-2 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300'>
                        <img 
                            src={app.image} 
                            alt={app.title} 
                            className='w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>
                    
                    {/* App Details */}
                    <div className='space-y-2 text-center sm:text-left'>
                        <Link to={`/apps/${app.id}`}>
                            <h2 className='font-bold text-xl text-gray-800 hover:text-purple-600 transition-colors duration-300'>
                                {app.title}
                            </h2>
                        </Link>
                        
                        {/* Stats */}
                        <div className='flex flex-wrap justify-center sm:justify-start items-center gap-3'>
                            <div className='flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50'>
                                <PiDownloadSimpleBold className='text-green-600 text-sm' />
                                <span className='text-gray-700 text-sm font-medium'>{app.downloads}</span>
                            </div>
                            <div className='flex items-center gap-1.5 px-2 py-1 rounded-full bg-orange-50'>
                                <FaStar className='text-orange-500 text-sm' />
                                <span className='text-gray-700 text-sm font-medium'>{app.ratingAvg}</span>
                            </div>
                            <div className='flex items-center gap-1.5 px-2 py-1 rounded-full bg-purple-50'>
                                <FaDownload className='text-purple-600 text-sm' />
                                <span className='text-gray-700 text-sm font-medium'>{app.size} MB</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Section - Uninstall Button */}
                <button 
                    onClick={() => handleUninstall(app)} 
                    className='group/btn cursor-pointer relative px-6 py-2.5 rounded-full bg-red-50 border-2 border-red-200 text-red-600 font-semibold overflow-hidden shadow-md hover:shadow-red-500/25 transition-all duration-300 hover:scale-105'
                >
                    <span className='relative z-10 flex items-center gap-2 '>
                        <FaTrashAlt className='text-sm group-hover/btn:rotate-12 transition-transform duration-300' />
                        <span>Uninstall</span>
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300'></div>
                </button>
            </div>
            
            {/* Decorative shine effect */}
            <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none'></div>
        </div>
    );
};

export default InstallCard;