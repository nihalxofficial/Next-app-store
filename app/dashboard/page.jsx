"use client"

import useApps from '../hooks/useApps';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line,
  AreaChart, Area, Legend
} from 'recharts';
import { FaDownload, FaStar, FaMobile, FaChartLine, FaDatabase, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
    const {apps, loading} = useApps();
    
    if(loading) {
        return (
            <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 via-white to-blue-50'>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
                    <p className="text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        )
    }

    // Prepare data for top apps by downloads
    const topAppsByDownloads = [...apps]
        .sort((a, b) => {
            const downloadsA = parseFloat(a.downloads);
            const downloadsB = parseFloat(b.downloads);
            return downloadsB - downloadsA;
        })
        .slice(0, 6)
        .map(app => ({
            name: app.title.length > 10 ? app.title.slice(0, 10) + '...' : app.title,
            downloads: parseFloat(app.downloads),
            fullName: app.title
        }));

    // Prepare data for top apps by rating
    const topAppsByRating = [...apps]
        .sort((a, b) => b.ratingAvg - a.ratingAvg)
        .slice(0, 6)
        .map(app => ({
            name: app.title.length > 10 ? app.title.slice(0, 10) + '...' : app.title,
            rating: app.ratingAvg,
            fullName: app.title
        }));

    // Calculate total statistics
    const totalDownloads = apps.reduce((sum, app) => sum + parseFloat(app.downloads), 0);
    const totalReviews = apps.reduce((sum, app) => {
        const reviewNum = parseFloat(app.reviews);
        return sum + (isNaN(reviewNum) ? 0 : reviewNum);
    }, 0);
    const avgRating = (apps.reduce((sum, app) => sum + app.ratingAvg, 0) / apps.length).toFixed(1);
    const totalSize = apps.reduce((sum, app) => sum + app.size, 0);

    // Prepare rating distribution data
    const ratingDistribution = [
        { rating: '5 Star', count: apps.filter(app => app.ratingAvg >= 4.5).length, color: '#10B981' },
        { rating: '4 Star', count: apps.filter(app => app.ratingAvg >= 3.5 && app.ratingAvg < 4.5).length, color: '#22C55E' },
        { rating: '3 Star', count: apps.filter(app => app.ratingAvg >= 2.5 && app.ratingAvg < 3.5).length, color: '#EAB308' },
        { rating: '2 Star', count: apps.filter(app => app.ratingAvg >= 1.5 && app.ratingAvg < 2.5).length, color: '#F59E0B' },
        { rating: '1 Star', count: apps.filter(app => app.ratingAvg < 1.5).length, color: '#EF4444' },
    ];

    // Prepare category data (based on app types)
    const categoryData = [
        { name: 'Social Media', value: apps.filter(app => ['WhatsApp Messenger', 'Instagram', 'TikTok', 'Snapchat', 'Twitter (X)', 'LinkedIn'].includes(app.title)).length, color: '#8B5CF6' },
        { name: 'Entertainment', value: apps.filter(app => ['YouTube', 'Netflix', 'Spotify: Music and Podcasts'].includes(app.title)).length, color: '#EC4899' },
        { name: 'Games', value: apps.filter(app => ['Clash of Clans', 'PUBG Mobile', 'Candy Crush Saga'].includes(app.title)).length, color: '#06B6D4' },
        { name: 'Utilities', value: apps.filter(app => ['Google Maps', 'Telegram'].includes(app.title)).length, color: '#F59E0B' },
        { name: 'Education', value: apps.filter(app => ['Duolingo: Learn Languages'].includes(app.title)).length, color: '#10B981' },
    ];

    // Prepare downloads trend data (simulated by app index)
    const downloadsTrend = apps.slice(0, 10).map((app, index) => ({
        name: `App ${index + 1}`,
        downloads: parseFloat(app.downloads),
        rating: app.ratingAvg
    }));

    const COLORS = ['#8B5CF6', '#EC4899', '#06B6D4', '#F59E0B', '#10B981'];

    // Custom Tooltip
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className='bg-white/95 backdrop-blur-md rounded-lg p-3 shadow-lg border border-gray-200'>
                    <p className='font-semibold text-gray-800'>{label}</p>
                    <p className='text-purple-600 font-bold'>
                        {payload[0].value.toLocaleString()} {payload[0].dataKey === 'downloads' ? 'M' : ''}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='min-h-screen py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden'>
            {/* Background Decorative Elements */}
            <div className='absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
            
            <div className='container mx-auto px-4 relative z-10'>
                {/* Header Section */}
                <div className='text-center space-y-3 mb-10'>
                    <div className='inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 text-sm font-semibold mb-2'>
                        📊 Analytics Dashboard
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent animate-gradient'>
                        App Analytics Dashboard
                    </h2>
                    <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
                        Comprehensive insights and statistics for all applications
                    </p>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10'>
                    <div className='group bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                        <div className='flex items-center justify-between mb-3'>
                            <FaDownload className='text-3xl text-green-500 group-hover:scale-110 transition-transform duration-300' />
                            <span className='text-xs text-gray-400'>Total</span>
                        </div>
                        <h3 className='text-gray-600 text-sm font-medium'>Total Downloads</h3>
                        <p className='text-2xl font-bold text-gray-800 mt-1'>{totalDownloads.toLocaleString()}M+</p>
                    </div>

                    <div className='group bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                        <div className='flex items-center justify-between mb-3'>
                            <FaStar className='text-3xl text-yellow-500 group-hover:scale-110 transition-transform duration-300' />
                            <span className='text-xs text-gray-400'>Average</span>
                        </div>
                        <h3 className='text-gray-600 text-sm font-medium'>Average Rating</h3>
                        <p className='text-2xl font-bold text-gray-800 mt-1'>{avgRating} / 5.0</p>
                    </div>

                    <div className='group bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                        <div className='flex items-center justify-between mb-3'>
                            <FaMobile className='text-3xl text-purple-500 group-hover:scale-110 transition-transform duration-300' />
                            <span className='text-xs text-gray-400'>Total</span>
                        </div>
                        <h3 className='text-gray-600 text-sm font-medium'>Total Apps</h3>
                        <p className='text-2xl font-bold text-gray-800 mt-1'>{apps.length}</p>
                    </div>

                    <div className='group bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                        <div className='flex items-center justify-between mb-3'>
                            <FaDatabase className='text-3xl text-blue-500 group-hover:scale-110 transition-transform duration-300' />
                            <span className='text-xs text-gray-400'>Total</span>
                        </div>
                        <h3 className='text-gray-600 text-sm font-medium'>Total Size</h3>
                        <p className='text-2xl font-bold text-gray-800 mt-1'>{totalSize.toLocaleString()} MB</p>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10'>
                    {/* Top Apps by Downloads */}
                    <div className='bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg'>
                        <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                            <FaChartLine className='text-purple-600' />
                            Top Apps by Downloads
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={topAppsByDownloads}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="name" stroke="#9CA3AF" />
                                <YAxis stroke="#9CA3AF" />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar dataKey="downloads" fill="#8B5CF6" radius={[8, 8, 0, 0]}>
                                    {topAppsByDownloads.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={`#8B5CF6`} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Top Apps by Rating */}
                    <div className='bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg'>
                        <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                            <FaStar className='text-yellow-500' />
                            Top Rated Apps
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={topAppsByRating} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis type="number" domain={[0, 5]} stroke="#9CA3AF" />
                                <YAxis type="category" dataKey="name" stroke="#9CA3AF" width={80} />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar dataKey="rating" fill="#F59E0B" radius={[0, 8, 8, 0]}>
                                    {topAppsByRating.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={`#F59E0B`} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Rating Distribution Pie Chart */}
                    <div className='bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg'>
                        <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                            <FaStar className='text-purple-600' />
                            Rating Distribution
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={ratingDistribution}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="count"
                                >
                                    {ratingDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Category Distribution */}
                    <div className='bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg'>
                        <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                            <FaUsers className='text-green-500' />
                            App Categories
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Downloads vs Rating Trend */}
                    <div className='lg:col-span-2 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg'>
                        <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                            <FaChartLine className='text-blue-500' />
                            Downloads vs Rating Correlation
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={downloadsTrend}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="name" stroke="#9CA3AF" />
                                <YAxis yAxisId="left" stroke="#8B5CF6" />
                                <YAxis yAxisId="right" orientation="right" stroke="#F59E0B" domain={[0, 5]} />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="downloads" stroke="#8B5CF6" name="Downloads (M)" strokeWidth={2} />
                                <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#F59E0B" name="Rating" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Additional Insights */}
                <div className='bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg'>
                    <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                        <FaChartLine className='text-purple-600' />
                        Key Insights
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl'>
                            <p className='text-sm text-gray-600 mb-1'>Highest Rated App</p>
                            <p className='font-bold text-gray-800'>
                                {apps.reduce((highest, app) => highest.ratingAvg > app.ratingAvg ? highest : app).title}
                            </p>
                            <p className='text-purple-600 font-semibold'>
                                Rating: {apps.reduce((highest, app) => highest.ratingAvg > app.ratingAvg ? highest : app).ratingAvg} ⭐
                            </p>
                        </div>
                        <div className='p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl'>
                            <p className='text-sm text-gray-600 mb-1'>Most Downloaded App</p>
                            <p className='font-bold text-gray-800'>
                                {apps.reduce((highest, app) => parseFloat(highest.downloads) > parseFloat(app.downloads) ? highest : app).title}
                            </p>
                            <p className='text-green-600 font-semibold'>
                                Downloads: {apps.reduce((highest, app) => parseFloat(highest.downloads) > parseFloat(app.downloads) ? highest : app).downloads}M+
                            </p>
                        </div>
                        <div className='p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl'>
                            <p className='text-sm text-gray-600 mb-1'>Largest App Size</p>
                            <p className='font-bold text-gray-800'>
                                {apps.reduce((largest, app) => largest.size > app.size ? largest : app).title}
                            </p>
                            <p className='text-orange-600 font-semibold'>
                                Size: {apps.reduce((largest, app) => largest.size > app.size ? largest : app).size} MB
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;