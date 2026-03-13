import React from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import propertiesData from '../data/properties.json';

const Rent = () => {
    // Filter for 'rent' properties
    const properties = propertiesData.properties
        .filter(p => p.type === 'rent')
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
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Louer un bien de prestige</h1>
                    <div className="w-24 h-1 bg-secondary mx-auto"></div>
                </motion.div>

                {/* Filters */}
                <div className="bg-white p-6 border border-gray-100 shadow-xl mb-16 max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center rounded-none">
                    <div className="flex-1 w-full md:w-auto flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 px-2">
                        <MapPin size={20} className="text-gray-400" />
                        <input type="text" placeholder="Localisation" className="w-full outline-none text-gray-700 placeholder-gray-400 font-medium" />
                    </div>
                    <div className="flex-1 w-full md:w-auto flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 px-2">
                        <Search size={20} className="text-gray-400" />
                        <select className="w-full outline-none text-gray-700 font-medium bg-transparent">
                            <option>Type de location</option>
                            <option>Meublé</option>
                            <option>Non Meublé</option>
                        </select>
                    </div>
                    <div className="flex-1 w-full md:w-auto flex items-center gap-3 pb-2 md:pb-0 px-2">
                        <SlidersHorizontal size={20} className="text-gray-400" />
                        <select className="w-full outline-none text-gray-700 font-medium bg-transparent">
                            <option>Loyer max</option>
                            <option>2000 €</option>
                            <option>4000 €</option>
                            <option>{"> 4000 €"}</option>
                        </select>
                    </div>
                    <button className="bg-primary text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-secondary transition-colors duration-300 w-full md:w-auto">
                        Rechercher
                    </button>
                </div>

                {/* Properties Grid */}
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
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                                    <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold px-3 py-2 uppercase tracking-widest">
                                        Location
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
            </div>
        </div>
    );
};

export default Rent;