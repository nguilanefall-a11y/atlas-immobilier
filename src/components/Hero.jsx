import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Home, Key, Euro, Users, X } from 'lucide-react';
import { motion, useScroll, useTransform, useAnimation, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], ['0%', '30%']);
    const [activeTab, setActiveTab] = useState('acheter');
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    const tabs = [
        { id: 'acheter', label: 'ACHETER', icon: Home },
        { id: 'louer', label: 'LOUER', icon: Key },
        { id: 'vendre', label: 'VENDRE', icon: Euro },
        { id: 'estimer', label: 'ESTIMER', icon: MapPin },
        { id: 'trouver', label: 'CONSEILLER', icon: Users },
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videos = [
        "/assets/hero-video.mp4",
        "/assets/hero-2.mp4",
        "/assets/hero-3.mp4"
    ];
    const controls = videos.map(() => useAnimation());
    const videoRefs = useRef([]);

    // Initialize positions and playback
    useEffect(() => {
        videos.forEach((_, index) => {
            controls[index].set({ x: index === 0 ? '0%' : '100%' });
            if (videoRefs.current[index]) {
                videoRefs.current[index].currentTime = 0;
                if (index === 0) {
                    videoRefs.current[index].play().catch(e => console.log("Auto-play blocked:", e));
                } else {
                    videoRefs.current[index].pause();
                }
            }
        });
    }, []);

    const isTransitioning = useRef(false);

    const transitionToNextVideo = async () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;

        const nextIndex = (currentVideoIndex + 1) % videos.length;
        const prevIndex = currentVideoIndex;

        // Prepare next video: reset and play
        if (videoRefs.current[nextIndex]) {
            videoRefs.current[nextIndex].currentTime = 0;
            videoRefs.current[nextIndex].play().catch(e => console.log("Play failed:", e));
        }

        // Current slides out to left
        controls[prevIndex].start({
            x: '-100%',
            transition: { duration: 1.5, ease: "easeInOut" }
        });

        // Next slides in from right
        await controls[nextIndex].start({
            x: '0%',
            transition: { duration: 1.5, ease: "easeInOut" }
        });

        // Pause the previous video once it's off-screen
        if (videoRefs.current[prevIndex]) {
            videoRefs.current[prevIndex].pause();
        }

        // Reset the one that just left to the right side (instant)
        controls[prevIndex].set({ x: '100%' });

        setCurrentVideoIndex(nextIndex);
        isTransitioning.current = false;
    };

    const handleTimeUpdate = (e) => {
        const video = e.target;
        // Trigger transition 2 seconds before end for a smooth overlap
        if (video.duration > 0 && video.duration - video.currentTime < 2.0 && !isTransitioning.current) {
            transitionToNextVideo();
        }
    };

    const renderSearchInterface = (isMobile = false) => (
        <div className={`flex flex-col h-full w-full ${!isMobile ? 'bg-white rounded-xl shadow-2xl max-w-4xl mx-auto overflow-hidden text-gray-800' : 'bg-white text-gray-800'}`}>
            {isMobile && (
                <div className="flex justify-between items-center p-4 sm:p-6 border-b shrink-0 bg-white">
                    <h2 className="font-serif text-xl sm:text-2xl text-primary">Recherche</h2>
                    <button onClick={() => setIsMobileDrawerOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={24} className="text-gray-500" />
                    </button>
                </div>
            )}

            {/* Tabs */}
            <div className={`flex overflow-x-auto no-scrollbar border-b snap-x shrink-0 ${isMobile ? 'bg-gray-50' : ''}`}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 min-w-[33%] sm:min-w-fit py-3 sm:py-4 px-2 sm:px-6 text-[10px] sm:text-sm md:text-base font-bold uppercase transition-colors flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap snap-center outline-none ${activeTab === tab.id ? 'bg-white text-primary border-b-[3px] sm:border-b-4 border-primary' : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-primary'}`}
                    >
                        <tab.icon size={14} className="sm:w-[18px] sm:h-[18px]" />
                        <span className="hidden sm:inline-block">{tab.label}</span>
                        <span className="sm:hidden">{tab.label.substring(0, 4)}.</span>
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className={`p-4 sm:p-6 md:p-8 bg-white/95 backdrop-blur-sm ${isMobile ? 'overflow-y-auto flex-1 h-full pb-20' : ''}`}>
                {activeTab === 'acheter' && (
                    <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                        <div className="flex-1 bg-gray-100 rounded-lg p-3 sm:p-3 flex items-center gap-2 sm:gap-3">
                            <MapPin className="text-gray-400 shrink-0" size={16} />
                            <input type="text" placeholder="Ville, code postal..." className="bg-transparent border-none outline-none w-full font-medium text-sm sm:text-base" />
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-lg p-3 sm:p-3 flex items-center gap-2 sm:gap-3">
                            <Home className="text-gray-400 shrink-0" size={16} />
                            <select className="bg-transparent border-none outline-none w-full font-medium text-gray-600 text-sm sm:text-base">
                                <option>Type de bien</option>
                                <option>Maison</option>
                                <option>Appartement</option>
                                <option>Terrain</option>
                            </select>
                        </div>
                        <button className="btn-primary py-3 px-8 rounded font-bold uppercase w-full md:w-auto text-xs sm:text-sm">
                            Rechercher
                        </button>
                    </div>
                )}

                {activeTab === 'louer' && (
                    <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                        <div className="flex-1 bg-gray-100 rounded-lg p-3 sm:p-3 flex items-center gap-2 sm:gap-3">
                            <MapPin className="text-gray-400 shrink-0" size={16} />
                            <input type="text" placeholder="Ville, code postal..." className="bg-transparent border-none outline-none w-full font-medium text-sm sm:text-base" />
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-lg p-3 sm:p-3 flex items-center gap-2 sm:gap-3">
                            <Euro className="text-gray-400 shrink-0" size={16} />
                            <input type="number" placeholder="Budget min €" className="bg-transparent border-none outline-none w-full font-medium text-sm sm:text-base" />
                        </div>
                        <button className="btn-primary py-3 px-8 rounded font-bold uppercase w-full md:w-auto text-xs sm:text-sm">
                            Rechercher
                        </button>
                    </div>
                )}

                {(activeTab === 'vendre' || activeTab === 'estimer') && (
                    <div className="text-center py-2 sm:py-4">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary">Estimez votre bien gratuitement</h3>
                        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
                            <div className="flex-1 bg-gray-100 rounded-lg p-3 sm:p-3 flex items-center gap-2 sm:gap-3">
                                <MapPin className="text-gray-400 shrink-0" size={16} />
                                <input type="text" placeholder="Adresse du bien à estimer..." className="bg-transparent border-none outline-none w-full font-medium text-sm sm:text-base" />
                            </div>
                            <button className="bg-secondary text-white py-3 px-8 rounded font-bold uppercase hover:bg-opacity-90 transition-opacity w-full md:w-auto text-xs sm:text-sm">
                                Estimer maintenant
                            </button>
                        </div>
                        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">Rapide, gratuit et sans engagement.</p>
                    </div>
                )}

                {activeTab === 'trouver' && (
                    <div className="text-center py-2 sm:py-4">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary">Trouvez un expert</h3>
                        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
                            <div className="flex-1 bg-gray-100 rounded-lg p-3 sm:p-3 flex items-center gap-2 sm:gap-3">
                                <Users className="text-gray-400 shrink-0" size={16} />
                                <input type="text" placeholder="Ville ou code postal..." className="bg-transparent border-none outline-none w-full font-medium text-sm sm:text-base" />
                            </div>
                            <button className="btn-primary py-3 px-8 rounded font-bold uppercase w-full md:w-auto text-xs sm:text-sm">
                                Rechercher
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <section className="h-screen w-full relative flex items-center justify-center pt-20 overflow-hidden bg-primary">
            {/* Video Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 bg-black"
            >
                {videos.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: index === 0 ? '0%' : '100%' }}
                        animate={controls[index]}
                        className="absolute inset-0 w-full h-full"
                    >
                        <video
                            ref={el => videoRefs.current[index] = el}
                            src={src}
                            muted
                            playsInline
                            loop={false}
                            onTimeUpdate={index === currentVideoIndex ? handleTimeUpdate : undefined}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                ))}
            </motion.div>

            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-primary/80 pointer-events-none"></div>

            <div className="container relative z-10 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-light mb-8 drop-shadow-lg tracking-wide"
                >
                    L'ART DE VIVRE <br />
                    <span className="font-serif italic">À LA PARISIENNE</span>
                </motion.h1>

                {/* Mobile Drawer Trigger Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:hidden mt-10"
                >
                    <button
                        onClick={() => setIsMobileDrawerOpen(true)}
                        className="inline-flex items-center gap-3 py-4 px-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold tracking-widest uppercase hover:bg-white/20 transition-all shadow-xl active:scale-95"
                    >
                        <Search size={18} />
                        Rechercher un bien
                    </button>
                </motion.div>

                {/* Desktop Search Component */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block"
                >
                    {renderSearchInterface(false)}
                </motion.div>
            </div>

            {/* Mobile Search Drawer (Modal) */}
            <AnimatePresence>
                {isMobileDrawerOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileDrawerOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
                        />
                        {/* Sliding Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-[85%] max-w-[400px] bg-white z-[70] md:hidden shadow-2xl flex flex-col"
                        >
                            {renderSearchInterface(true)}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
