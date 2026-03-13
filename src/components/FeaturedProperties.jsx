import React from 'react';
import { Bed, Bath, Square, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import propertiesData from '../data/properties.json';

const FeaturedProperties = () => {
    // Get the first 3 buy properties for the featured section
    const properties = propertiesData.properties
        .filter(p => p.type === 'buy')
        .slice(0, 3)
        .map(p => ({
            ...p,
            image: p.images[0],
            tag: "EXCLUSIVITÉ",
            // Parse features string if needed or use defaults
            beds: p.features.includes('Pièces') ? parseInt(p.features) - 1 : 2,
            baths: 1,
            sqft: parseInt(p.features) || 50
        }));

    return (
        <section className="py-10 lg:py-20 bg-white">
            <div className="container">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Nos biens à la une</h2>
                        <p className="text-muted max-w-2xl">
                            Une sélection rigoureuse des plus belles propriétés sur le marché, choisies pour leur caractère unique.
                        </p>
                    </div>
                    <Link to="/buy" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary">
                        VOIR TOUT LE CATALOGUE <ChevronRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((prop, index) => (
                        <Link to={`/property/${prop.id}`} key={prop.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="property-card cursor-pointer group"
                            >
                                <div className="relative overflow-hidden">
                                    <img src={prop.image} alt={prop.title} className="property-img transition-transform duration-700 group-hover:scale-110" />
                                    <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded font-bold letter-spacing-1 uppercase tracking-widest">
                                        {prop.tag}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <p className="text-secondary font-bold text-sm mb-1 uppercase tracking-wider">{prop.location}</p>
                                    <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">{prop.title}</h3>
                                    <p className="text-primary font-bold text-xl mb-4">{prop.price}</p>

                                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm text-muted">
                                        <div className="flex items-center gap-1"><Bed size={16} /> {prop.beds} Ch.</div>
                                        <div className="flex items-center gap-1"><Square size={16} /> {prop.sqft} m²</div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <Link to="/buy" className="md:hidden block">
                    <button className="btn-outline w-full mt-8 uppercase tracking-widest font-bold">VOIR TOUT LE CATALOGUE</button>
                </Link>
            </div>
        </section>
    );
};

export default FeaturedProperties;