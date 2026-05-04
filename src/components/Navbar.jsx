import React, { useState, useEffect } from 'react';
import { Menu, X, User, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [language, setLanguage] = useState('FR');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'ACHETER', path: '/buy' },
        { name: 'LOYER GARANTI', path: '/conciergerie' },
        { name: 'VENDRE', path: '/sell' },
        { name: 'JOURNAL', path: '/journal' },
        { name: 'DÉCOUVRIR', path: '/discover' },
        { name: 'CONTACT', path: '/contact' },
    ];

    const isHome = location.pathname === '/';
    const isTransparent = isHome && !isScrolled && !mobileMenuOpen;

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isTransparent ? 'bg-transparent py-6' : 'bg-white/95 backdrop-blur-md shadow-sm py-3'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className={`w-11 h-11 border-[1.5px] flex items-center justify-center transition-all duration-500 
                        ${isTransparent ? 'border-white text-white' : 'border-primary text-primary group-hover:border-secondary group-hover:text-secondary'}`}>
                            <span className="font-serif font-medium text-2xl relative top-[-1px]">S</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className={`font-serif font-medium tracking-[0.3em] text-xl transition-colors duration-500 ${isTransparent ? 'text-white' : 'text-primary'}`}>SELY</span>
                            <span className={`text-[8px] font-medium tracking-[0.4em] uppercase text-center mt-1 transition-colors duration-500 ${isTransparent ? 'text-gray-200' : 'text-secondary'}`}>Paris</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[12px] font-light tracking-[0.15em] transition-all duration-300 relative group py-2 
                                ${isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-500 hover:text-primary'}
                            `}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isTransparent ? 'bg-white' : 'bg-secondary'}`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions & Mobile Toggle */}
                    <div className="flex items-center gap-5">

                        <button
                            className={`hidden md:flex items-center gap-1 font-light transition-colors text-[12px] tracking-[0.15em] ${isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-400 hover:text-primary'}`}
                            onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')}
                        >
                            <Globe size={13} />
                            <span>{language}</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden p-1 relative z-[60]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ?
                                <X className="text-gray-800" size={28} /> :
                                <Menu className={isTransparent ? 'text-white' : 'text-primary'} size={28} />
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Dimmer Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[40] lg:hidden"
                        />
                        {/* Side Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-[80%] max-w-[350px] bg-white z-[50] flex flex-col pt-28 px-8 lg:hidden shadow-2xl overflow-y-auto"
                        >
                            {/* Close Button Inside Drawer */}
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="absolute top-6 right-6 p-2 text-gray-800 hover:text-primary transition-colors"
                            >
                                <X size={28} />
                            </button>

                            <nav className="flex flex-col gap-8 pb-12">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 + 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-2xl font-serif text-primary flex items-center justify-between group"
                                        >
                                            <span className="font-light">{link.name}</span>
                                            <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">→</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
