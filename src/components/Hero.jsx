import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Home, Key, Euro, Users, X, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, useAnimation, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import EstimationForm from './EstimationForm';

const PARIS_LOCATIONS = [
    "Paris (Toute la ville)",
    "Paris 1er Arrondissement (75001)", "Paris 2e Arrondissement (75002)", "Paris 3e Arrondissement (75003)",
    "Paris 4e Arrondissement (75004)", "Paris 5e Arrondissement (75005)", "Paris 6e Arrondissement (75006)",
    "Paris 7e Arrondissement (75007)", "Paris 8e Arrondissement (75008)", "Paris 9e Arrondissement (75009)",
    "Paris 10e Arrondissement (75010)", "Paris 11e Arrondissement (75011)", "Paris 12e Arrondissement (75012)",
    "Paris 13e Arrondissement (75013)", "Paris 14e Arrondissement (75014)", "Paris 15e Arrondissement (75015)",
    "Paris 16e Arrondissement (75016)", "Paris 17e Arrondissement (75017)", "Paris 18e Arrondissement (75018)",
    "Paris 19e Arrondissement (75019)", "Paris 20e Arrondissement (75020)", "Neuilly-sur-Seine (92200)",
    "Boulogne-Billancourt (92100)", "Levallois-Perret (92300)", "Versailles (78000)"
];

const AutocompleteInput = ({ placeholder, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Ensure value is a string before calling toLowerCase
    const safeValue = value || '';
    const filtered = PARIS_LOCATIONS.filter(loc => loc.toLowerCase().includes(safeValue.toLowerCase()));

    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder={placeholder}
                value={safeValue}
                onChange={(e) => {
                    onChange(e.target.value);
                    setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                className="bg-transparent border-none outline-none w-full font-light text-sm sm:text-base placeholder:text-gray-300"
            />
            <AnimatePresence>
                {isOpen && safeValue.length > 0 && filtered.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-4 w-full bg-white border border-gray-100 shadow-2xl py-2 z-50 rounded-sm max-h-60 overflow-y-auto"
                    >
                        {filtered.map(loc => (
                            <div
                                key={loc}
                                className="px-4 py-3 text-sm cursor-pointer text-gray-500 font-light hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-50 last:border-b-0"
                                onClick={() => {
                                    onChange(loc);
                                    setIsOpen(false);
                                }}
                            >
                                {loc}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const y = useTransform(scrollY, [0, 1000], ['0%', '30%']);
    const [activeTab, setActiveTab] = useState('acheter');
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
    const [isTypeMenuOpen, setIsTypeMenuOpen] = useState(false);
    const [selectedType, setSelectedType] = useState('Type de bien');
    const [buyLocation, setBuyLocation] = useState('');
    const [rentLocation, setRentLocation] = useState('');
    const [sellLocation, setSellLocation] = useState('');
    const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);
    const propertyTypes = ['Maison', 'Appartement', 'Terrain'];

    const tabs = [
        { id: 'acheter', label: 'ACHETER', icon: Home },
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
        <div className={`flex flex-col h-full w-full ${!isMobile ? 'bg-white shadow-xl max-w-4xl mx-auto relative text-gray-800 border border-gray-100' : 'bg-white text-gray-800'}`}>
            {isMobile && (
                <div className="flex justify-between items-center p-4 sm:p-6 border-b shrink-0 bg-white">
                    <h2 className="font-serif text-xl sm:text-2xl text-primary">Recherche</h2>
                    <button onClick={() => setIsMobileDrawerOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={24} className="text-gray-500" />
                    </button>
                </div>
            )}

            {/* Tabs */}
            <div className={`flex overflow-x-auto no-scrollbar border-b border-gray-100 snap-x shrink-0 ${isMobile ? 'bg-gray-50' : ''}`}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 min-w-[33%] sm:min-w-fit py-4 sm:py-5 px-2 sm:px-6 text-[10px] sm:text-xs md:text-xs font-medium uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap snap-center outline-none ${activeTab === tab.id ? 'bg-white text-primary border-b-[2px] border-primary' : 'bg-gray-50/50 text-gray-400 hover:bg-gray-50 hover:text-primary'}`}
                    >
                        <tab.icon size={14} className="sm:w-[16px] sm:h-[16px]" />
                        <span className="hidden sm:inline-block">{tab.label}</span>
                        <span className="sm:hidden">{tab.label.substring(0, 4)}.</span>
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className={`p-6 sm:p-8 md:p-10 bg-white ${isMobile ? 'overflow-y-auto flex-1 h-full pb-20' : ''}`}>
                {activeTab === 'acheter' && (
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                        <div className="flex-1 border-b border-gray-200 pb-2 flex items-center gap-3 sm:gap-4 group focus-within:border-secondary transition-colors relative">
                            <MapPin className="text-gray-300 group-focus-within:text-secondary transition-colors shrink-0" size={18} />
                            <AutocompleteInput
                                placeholder="Ville, code postal..."
                                value={buyLocation}
                                onChange={setBuyLocation}
                            />
                        </div>
                        <div className="flex-1 border-b border-gray-200 pb-2 flex items-center gap-3 sm:gap-4 group relative">
                            <Home className="text-gray-300 group-hover:text-secondary transition-colors shrink-0" size={18} />

                            <div
                                className="w-full font-light text-sm sm:text-base cursor-pointer flex justify-between items-center text-gray-600"
                                onClick={() => setIsTypeMenuOpen(!isTypeMenuOpen)}
                            >
                                <span>{selectedType}</span>
                                <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isTypeMenuOpen ? 'rotate-180' : ''}`} />
                            </div>

                            <AnimatePresence>
                                {isTypeMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-4 w-full bg-white border border-gray-100 shadow-2xl py-2 z-50 rounded-sm"
                                    >
                                        {['Type de bien', ...propertyTypes].map((type) => (
                                            <div
                                                key={type}
                                                className={`px-4 py-3 text-sm cursor-pointer transition-colors ${selectedType === type ? 'text-primary font-medium bg-gray-50/50' : 'text-gray-500 font-light hover:bg-gray-50 hover:text-primary'}`}
                                                onClick={() => {
                                                    setSelectedType(type);
                                                    setIsTypeMenuOpen(false);
                                                }}
                                            >
                                                {type}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <button
                            onClick={() => {
                                const params = new URLSearchParams();
                                if (buyLocation) params.append('location', buyLocation);
                                if (selectedType && selectedType !== 'Type de bien') params.append('type', selectedType);
                                navigate(`/buy?${params.toString()}`);
                            }}
                            className="bg-primary text-white py-4 px-10 text-xs font-medium uppercase tracking-[0.15em] w-full md:w-auto hover:bg-secondary transition-colors duration-300"
                        >
                            Rechercher
                        </button>
                    </div>
                )}

                {(activeTab === 'vendre' || activeTab === 'estimer') && (
                    <div className="text-center py-4 sm:py-6 flex flex-col items-center">
                        <h3 className="text-xl sm:text-2xl font-serif mb-4 text-primary">L'évaluation confidentielle</h3>
                        <p className="text-gray-500 font-light text-sm sm:text-base mb-6 max-w-lg mx-auto">
                            Une expertise s'apprécie sur place. Sely se déplace en toute discrétion chez vous pour évaluer le potentiel unique de votre bien.
                        </p>
                        <Link to="/contact" className="bg-secondary text-white py-4 px-10 text-xs font-medium uppercase tracking-[0.15em] w-full md:w-auto hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                            Nous contacter
                        </Link>
                    </div>
                )}

                {activeTab === 'trouver' && (
                    <div className="text-center py-4 sm:py-6 flex flex-col items-center">
                        <h3 className="text-xl sm:text-2xl font-serif mb-4 text-primary">Besoin d'un accompagnement ?</h3>
                        <p className="text-gray-500 font-light text-sm sm:text-base mb-6 max-w-lg mx-auto">
                            Nos conseillers se tiennent à votre disposition pour échanger sur votre projet immobilier en toute confidentialité.
                        </p>
                        <Link to="/contact" className="bg-primary text-white py-4 px-10 text-xs font-medium uppercase tracking-[0.15em] w-full md:w-auto hover:bg-secondary transition-colors duration-300 flex items-center justify-center">
                            Nous contacter
                        </Link>
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

            <AnimatePresence>
                {isEstimationModalOpen && (
                    <EstimationForm onClose={() => setIsEstimationModalOpen(false)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
