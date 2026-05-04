import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, MapPin, ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import propertiesData from '../data/properties.json';

const Buy = () => {
    const [searchParams] = useSearchParams();
    const locationQuery = searchParams.get('location') || '';
    const typeQuery = searchParams.get('type') || '';

    const [filterLocation, setFilterLocation] = useState(locationQuery);
    const [filterType, setFilterType] = useState(typeQuery || 'Type de bien');
    const [filterBudget, setFilterBudget] = useState('Budget');

    useEffect(() => {
        setFilterLocation(searchParams.get('location') || '');
        setFilterType(searchParams.get('type') || 'Type de bien');
    }, [searchParams]);

    const matchLocation = (propLoc, searchLoc) => {
        if (!searchLoc) return true;
        const pLoc = propLoc.toLowerCase();
        const sLoc = searchLoc.toLowerCase();

        // Handle "Paris (Toute la ville)"
        if (sLoc.includes('toute la ville') && pLoc.includes('paris')) return true;

        // Direct inclusion
        if (pLoc.includes(sLoc) || sLoc.includes(pLoc)) return true;

        // Handle Paris arrondissements (e.g. "Paris 16ème" vs "Paris 16e Arrondissement (75016)")
        const sMatch = sLoc.match(/paris\s+(\d+)/);
        const pMatch = pLoc.match(/paris\s+(\d+)/);

        if (sMatch && pMatch && sMatch[1] === pMatch[1]) {
            return true;
        }

        // Handle postal codes (e.g 75016)
        const zipMatch = sLoc.match(/\(?(750\d{2})\)?/);
        if (zipMatch) {
            const arr = parseInt(zipMatch[1].substring(3), 10);
            if (pMatch && parseInt(pMatch[1], 10) === arr) return true;
        }

        return false;
    };

    const matchType = (prop, searchType) => {
        if (!searchType || searchType === 'Type de bien') return true;
        const content = (prop.title + " " + prop.description).toLowerCase();
        return content.includes(searchType.toLowerCase());
    };

    const matchBudget = (priceStr, searchBudget) => {
        if (!searchBudget || searchBudget === 'Budget') return true;
        // Parse "1 150 000 €" to number
        const price = parseInt(priceStr.replace(/\s/g, '').replace('€', ''), 10);
        if (isNaN(price)) return true;

        if (searchBudget === '< 1M €') return price < 1000000;
        if (searchBudget === '1M € - 3M €') return price >= 1000000 && price <= 3000000;
        if (searchBudget === '> 3M €') return price > 3000000;

        return true;
    };

    // Filter and sort properties dynamically (confidential at the end)
    const properties = propertiesData.properties
        .filter(p => p.type === 'buy')
        .filter(p => matchLocation(p.location, filterLocation))
        .filter(p => matchType(p, filterType))
        .filter(p => matchBudget(p.price, filterBudget))
        .sort((a, b) => {
            const aIsConfidential = !a.images || a.images.length === 0;
            const bIsConfidential = !b.images || b.images.length === 0;
            if (aIsConfidential && !bIsConfidential) return 1;
            if (!aIsConfidential && bIsConfidential) return -1;
            return 0; // Keep original order otherwise
        })
        .map(p => ({
            ...p,
            image: p.images && p.images.length > 0 ? p.images[0] : '',
            features: Array.isArray(p.features) ? p.features.join(' • ') : p.features
        }));

    return (
        <div className="pt-24 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Acheter un bien d'exception</h1>
                    <div className="w-24 h-1 bg-secondary mx-auto"></div>
                </motion.div>

                {/* Filters */}
                <div className="bg-white p-6 border border-gray-100 shadow-xl mb-16 max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center rounded-none">
                    <div className="flex-1 w-full md:w-auto flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 px-2">
                        <MapPin size={20} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Localisation"
                            className="w-full outline-none text-gray-700 placeholder-gray-400 font-medium"
                            value={filterLocation}
                            onChange={(e) => setFilterLocation(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 w-full md:w-auto flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 px-2">
                        <Search size={20} className="text-gray-400" />
                        <select
                            className="w-full outline-none text-gray-700 font-medium bg-transparent"
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                        >
                            <option>Type de bien</option>
                            <option>Appartement</option>
                            <option>Maison</option>
                            <option>Hôtel Particulier</option>
                        </select>
                    </div>
                    <div className="flex-1 w-full md:w-auto flex items-center gap-3 pb-2 md:pb-0 px-2">
                        <SlidersHorizontal size={20} className="text-gray-400" />
                        <select
                            className="w-full outline-none text-gray-700 font-medium bg-transparent"
                            value={filterBudget}
                            onChange={(e) => setFilterBudget(e.target.value)}
                        >
                            <option>Budget</option>
                            <option>{"< 1M €"}</option>
                            <option>1M € - 3M €</option>
                            <option>{"> 3M €"}</option>
                        </select>
                    </div>
                    <button className="bg-primary text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-secondary transition-colors duration-300 w-full md:w-auto">
                        Rechercher
                    </button>
                </div>

                {/* Properties Grid */}
                <AnimatePresence>
                    {properties.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20 text-gray-500 font-light text-lg"
                        >
                            Aucun bien ne correspond à votre recherche. N'hésitez pas à nous contacter.
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {properties.map((p, index) => (
                                <Link to={`/property/${p.id}`} key={p.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="group cursor-pointer"
                                    >
                                        <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                                            {p.image ? (
                                                <img
                                                    src={p.image}
                                                    alt={p.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-secondary flex flex-col items-center justify-center border border-gray-100 transition-transform duration-700 group-hover:scale-105 relative">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                                                        <span className="font-serif text-5xl font-black text-white select-none">Sely</span>
                                                    </div>
                                                    <div className="relative z-10 text-center px-4">
                                                        <span className="font-serif text-lg text-white block mb-2">Dossier Confidentiel</span>
                                                        <span className="text-xs text-white/70 font-light block uppercase tracking-widest">Photos sur demande</span>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="absolute top-0 left-0 w-full h-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-2 uppercase tracking-widest border-l-2 border-secondary z-20">
                                                Exclusivité
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                                                {p.title}
                                            </h3>
                                            <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-4">
                                                <span className="text-gray-500 text-sm font-medium">{p.location}</span>
                                                <span className="text-gray-500 text-sm font-medium">{p.features}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xl font-bold text-gray-900">{p.price}</span>
                                                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary group-hover:translate-x-1 transition-transform duration-300">
                                                    Voir le bien <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Buy;
