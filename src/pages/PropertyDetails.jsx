import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Square, ChevronLeft, ChevronRight } from 'lucide-react';
import propertiesData from '../data/properties.json';

const PropertyDetails = () => {
    const { id } = useParams();
    // Helper to find property by string or number ID
    const property = propertiesData.properties.find(p => p.id.toString() === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!property) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-serif text-primary mb-4">Bien introuvable</h2>
                <Link to="/buy" className="text-secondary underline">Retour aux ventes</Link>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    // Determine back link based on property type (default to buy if undefined)
    const backLink = property.type === 'rent' ? '/rent' : '/buy';
    const backText = property.type === 'rent' ? 'Retour aux locations' : 'Retour aux ventes';

    return (
        <div className="pt-24 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-4">
                <Link to={backLink} className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 transition-colors">
                    <ArrowLeft size={20} /> {backText}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                    {/* Image Gallery */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                    >
                        {/* Image Gallery or Request Message */}
                        {property.images && property.images.length > 0 ? (
                            <>
                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg group">
                                    <img 
                                        src={property.images[currentImageIndex]} 
                                        alt={property.title} 
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />
                                    
                                    {property.images.length > 1 && (
                                        <>
                                            <button 
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                                            >
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button 
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                                            >
                                                <ChevronRight size={24} />
                                            </button>
                                        </>
                                    )}
                                    
                                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 text-sm rounded-full backdrop-blur-sm">
                                        {currentImageIndex + 1} / {property.images.length}
                                    </div>
                                </div>

                                {/* Thumbnails */}
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {property.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`relative flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                        >
                                            <img src={img} alt="" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="relative aspect-[4/3] flex flex-col items-center justify-center bg-secondary border border-gray-100 rounded-lg overflow-hidden group">
                                {/* Elegant Background Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                                    <span className="font-serif text-[120px] font-black text-white select-none">Sely</span>
                                </div>
                                
                                <div className="relative z-10 flex flex-col items-center text-center p-8">
                                    <Square size={48} strokeWidth={1} className="text-white mb-6" />
                                    <h3 className="font-serif text-3xl text-white mb-4">Dossier Confidentiel</h3>
                                    <p className="text-white/80 font-light mb-8 max-w-sm">
                                        Par souci de discrétion, les photographies de ce bien d'exception sont accessibles unqiuement sur demande qualifiée.
                                    </p>
                                    <Link to="/contact" className="px-8 py-3 bg-white text-secondary hover:bg-gray-100 transition-colors duration-300 font-bold text-sm tracking-widest uppercase inline-block">
                                        Demander le dossier
                                    </Link>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Details */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="mb-2 text-secondary font-bold tracking-wider uppercase text-sm">
                            {property.location}
                        </div>
                        <h1 className="text-4xl font-serif text-primary mb-4">{property.title}</h1>
                        <div className="text-3xl font-bold text-gray-900 mb-8">{property.price}</div>

                        <div className="flex gap-6 border-y border-gray-100 py-6 mb-8">
                            <div className="flex items-center gap-2">
                                <Square size={20} className="text-gray-400" />
                                <span className="font-medium">{property.features || "N/A"}</span>
                            </div>
                        </div>

                        <div className="prose prose-lg text-gray-600 mb-8">
                            <h3 className="text-xl font-bold text-primary mb-4">Description</h3>
                            <p className="whitespace-pre-line leading-relaxed">
                                {property.description || "Aucune description disponible pour ce bien."}
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-8">
                            <h3 className="font-bold text-primary mb-4">Intéressé par ce bien ?</h3>
                            <Link to="/contact" className="block w-full text-center bg-primary text-white py-4 font-bold uppercase tracking-widest hover:bg-secondary transition-colors duration-300">
                                Contacter l'agence
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;