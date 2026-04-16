import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaHeart, FaRocket, FaEnvelope, FaMapMarkerAlt, FaPhone, FaDownload, FaStar, FaMobile } from 'react-icons/fa';
import logo from "../../assets/logo.png";
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className='relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden'>
            {/* Background Decorative Elements */}
            <div className='absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-2xl'></div>
            
            <div className='container mx-auto px-4 py-12 relative z-10'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
                    {/* Company Info */}
                    <div className='space-y-4'>
                        <div className='flex items-center gap-3 group'>
                            <div className='relative'>
                                <Image src={logo} alt="logo" className='max-w-10 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110'/>
                                <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500'></div>
                            </div>
                            <span className='text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                                Hero.IO
                            </span>
                        </div>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                            We craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
                            Turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className='flex gap-3'>
                            <Link href="#" className='p-2 bg-white/10 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110'>
                                <FaGithub className='text-white text-sm' />
                            </Link>
                            <Link href="#" className='p-2 bg-white/10 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110'>
                                <FaTwitter className='text-white text-sm' />
                            </Link>
                            <a href="#" className='p-2 bg-white/10 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110'>
                                <FaLinkedin className='text-white text-sm' />
                            </a>
                            <Link href="#" className='p-2 bg-white/10 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110'>
                                <FaFacebook className='text-white text-sm' />
                            </Link>
                            <Link href="#" className='p-2 bg-white/10 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110'>
                                <FaInstagram className='text-white text-sm' />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-bold flex items-center gap-2'>
                            <FaRocket className='text-purple-400' />
                            Quick Links
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link href="/" className='text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group'>
                                    <span className='w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-300'></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/apps" className='text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group'>
                                    <span className='w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-300'></span>
                                    All Apps
                                </Link>
                            </li>
                            <li>
                                <Link href="/installed" className='text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group'>
                                    <span className='w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-300'></span>
                                    Installed Apps
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className='text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group'>
                                    <span className='w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-300'></span>
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-bold flex items-center gap-2'>
                            <FaEnvelope className='text-purple-400' />
                            Contact Us
                        </h3>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-3 text-gray-300 text-sm'>
                                <FaEnvelope className='text-purple-400' />
                                <a href="mailto:info@hero.io" className='hover:text-purple-400 transition-colors'>
                                    info@hero.io
                                </a>
                            </li>
                            <li className='flex items-center gap-3 text-gray-300 text-sm'>
                                <FaPhone className='text-purple-400' />
                                <a href="tel:+1234567890" className='hover:text-purple-400 transition-colors'>
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className='flex items-center gap-3 text-gray-300 text-sm'>
                                <FaMapMarkerAlt className='text-purple-400' />
                                <span>123 Innovation Street, Tech City, TC 12345</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter & Stats */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-bold flex items-center gap-2'>
                            <FaDownload className='text-purple-400' />
                            Newsletter
                        </h3>
                        <p className='text-gray-300 text-sm'>
                            Subscribe to get updates about new apps and features
                        </p>
                        <div className='flex flex-col gap-2'>
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className='px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-white placeholder-gray-400'
                            />
                            <button className='group relative px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold overflow-hidden shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm'>
                                <span className='relative z-10 flex items-center justify-center gap-2'>
                                    Subscribe
                                    <FaRocket className='group-hover:translate-x-1 transition-transform duration-300' />
                                </span>
                                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </button>
                        </div>
                        <div className='flex gap-4 pt-2'>
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-yellow-400 text-xs' />
                                <span className='text-xs text-gray-300'>4.8 Avg Rating</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <FaDownload className='text-green-400 text-xs' />
                                <span className='text-xs text-gray-300'>100M+ Downloads</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <FaMobile className='text-purple-400 text-xs' />
                                <span className='text-xs text-gray-300'>15+ Apps</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='border-t border-white/10 my-8'></div>

                {/* Bottom Bar */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm'>
                    <div className='text-gray-400 text-center md:text-left'>
                        &copy; {currentYear} Hero.IO. All rights reserved. | Made with <FaHeart className='inline text-red-500 animate-pulse' /> for better user experience
                    </div>
                    <div className='flex gap-6'>
                        <Link href="/privacy" className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>

            {/* Animated Gradient Border Top */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse'></div>
        </footer>
    );
};

export default Footer;