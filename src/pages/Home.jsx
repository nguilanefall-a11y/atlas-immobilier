import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import propertiesData from '../data/properties.json';

const Home = () => {
    // Get first 3 properties from JSON for the featured section
    const featuredProperties = propertiesData.properties.slice(0, 3).map(p => ({
        id: p.id,
        title: p.title,
        location: p.location,
        price: p.price,
        img: p.images[0]
    }));

    const testimonials = [
        { id: 1, name: 'Jean & Marie D.', role: 'Acquéreurs', text: "Une expérience d'achat exceptionnelle. L'équipe Sely a su dénicher la perle rare que nous cherchions depuis des mois." },
        { id: 2, name: 'Sophie L.', role: 'Venderesse', text: "Professionnalisme et discrétion. Mon appartement a été vendu en moins de deux semaines au prix estimé." }
    ];

    return (
        <main>
            <Hero />

            {/* SECTION: Featured Properties (Carousel style) */}
            <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-between items-end mb-16"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Biens à la une</h2>
                            <div className="w-20 h-1 bg-secondary"></div>
                        </div>
                        <Link to="/buy" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors">
                            Voir toute la collection <ArrowRight size={16} />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProperties.map((p, index) => (
                            <Link to={`/property/${p.id}`} key={p.id}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative overflow-hidden aspect-[3/4] mb-6">
                                        <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Exclusivité</p>
                                        <h3 className="text-2xl font-serif text-primary mb-1 group-hover:text-secondary transition-colors">{p.title}</h3>
                                        <p className="text-gray-500 mb-3">{p.location}</p>
                                        <p className="text-xl font-medium text-primary">{p.price}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12 md:hidden">
                        <Link to="/buy" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest bg-primary text-white px-6 py-3 hover:bg-secondary transition-colors">
                            Voir toute la collection
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION: Brand Story & Video */}
            <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 relative bg-primary text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-40"
                    >
                        <source src="/assets/presentation-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-serif mb-8 leading-tight"
                        >
                            L'Art de Vivre <br /><span className="text-secondary italic">à la Française</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg"
                        >
                            Sely Immobilier réinvente les codes de l'immobilier de prestige.
                            Nous allions technologie de pointe et accompagnement ultra-personnalisé
                            pour offrir une expérience sans équivalent.
                        </motion.p>
                        <Link to="/discover" className="inline-block border border-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors">
                            Notre Philosophie
                        </Link>
                    </div>
                    <div className="md:w-1/2"></div>
                </div>
            </section>

            {/* SECTION: Testimonials */}
            <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif text-primary mb-16">Ce que disent nos clients</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-4xl mx-auto">
                        {testimonials.map((t, idx) => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="bg-white p-10 shadow-xl relative"
                            >
                                <Quote size={40} className="text-secondary/20 absolute top-6 left-6" />
                                <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">"{t.text}"</p>
                                <div>
                                    <h4 className="font-serif font-bold text-lg text-primary">{t.name}</h4>
                                    <span className="text-xs uppercase tracking-widest text-gray-400">{t.role}</span>
                                </div>
                                <div className="flex justify-center gap-1 mt-4 text-secondary">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Un projet immobilier ?</h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light">
                        Discutons de vos ambitions autour d'un café dans l'une de nos agences parisiennes.
                    </p>
                    <Link to="/contact" className="bg-primary text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-secondary transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                        Prendre rendez-vous
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;