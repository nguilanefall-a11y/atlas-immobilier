import React, { useState } from 'react';
import Hero from '../components/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import propertiesData from '../data/properties.json';

const Home = () => {
    // Get first 3 properties from JSON for the featured section
    // Get first 3 non-confidential buy properties for the featured section
    const featuredProperties = propertiesData.properties
        .filter(p => p.type === 'buy')
        .sort((a, b) => {
            const aIsConfidential = !a.images || a.images.length === 0;
            const bIsConfidential = !b.images || b.images.length === 0;
            if (aIsConfidential && !bIsConfidential) return 1;
            if (!aIsConfidential && bIsConfidential) return -1;
            return 0;
        })
        .slice(0, 3)
        .map(p => ({
            id: p.id,
            title: p.title,
            location: p.location,
            price: p.price,
            img: p.images && p.images.length > 0 ? p.images[0] : ''
        }));

    const testimonials = [
        { id: 1, name: 'Alexandre & Victoria R.', role: 'Acquéreurs', text: "Un accompagnement attentif. L'équipe a su cibler parfaitement les biens correspondant à nos critères pour notre pied-à-terre parisien." },
        { id: 2, name: 'François M.', role: 'Vendeur', text: "La vente de notre appartement s'est déroulée avec discrétion et efficacité, grâce à une excellente connaissance du secteur." },
        { id: 3, name: 'Eléonore D.', role: 'Venderesse', text: "Au-delà de leur maîtrise du marché parisien, j'ai beaucoup apprécié la disponibilité et le professionnalisme de mon conseiller." },
        { id: 4, name: 'Charles H.', role: 'Acquéreur', text: "L'agence a su trouver l'appartement que nous cherchions depuis plusieurs mois. Une recherche pertinente et efficace." },
        { id: 5, name: 'Sophie C.', role: 'Venderesse', text: "Un service complet et très rassurant. L'équipe m'a tenue informée à chaque étape de la transaction." },
        { id: 6, name: 'Antoine & Claire B.', role: 'Vendeurs', text: "L'évaluation de notre bien était très juste. La mise en vente et les visites ont été gérées de manière très fluide." },
        { id: 7, name: 'Jérôme L.', role: 'Acquéreur', text: "Une écoute attentive et de bons conseils sur le marché. Un véritable partenaire pour concrétiser notre projet immobilier." },
        { id: 8, name: 'Béatrice V.', role: 'Venderesse', text: "Rigueur et transparence dans les échanges. L'équipe a parfaitement géré la commercialisation de notre bien." },
        { id: 9, name: 'Patrick N.', role: 'Expatrié', text: "Résidant à l'étranger, nous avions besoin d'une agence de confiance pour tout gérer à distance. Le suivi prospectif a été excellent." },
        { id: 10, name: 'Marie & Paul T.', role: 'Acquéreurs', text: "Une très belle connaissance des quartiers centraux. La transaction s'est faite simplement et avec beaucoup de sérénité." }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

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
                                        {p.img ? (
                                            <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        ) : (
                                            <div className="w-full h-full bg-secondary flex flex-col items-center justify-center border border-gray-100 transition-transform duration-1000 group-hover:scale-110 relative">
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
            <section className="py-16 md:py-20 lg:py-32 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-serif text-primary text-center md:text-left mb-8 md:mb-0">
                            Quelques mots <span className="italic text-secondary mt-2 block md:inline md:mt-0">qui comptent</span>
                        </h2>

                        <div className="flex gap-4 justify-center md:justify-end">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto relative min-h-[450px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 absolute w-full"
                            >
                                {[
                                    testimonials[currentTestimonial],
                                    testimonials[(currentTestimonial + 1) % testimonials.length]
                                ].map((t, idx) => (
                                    <div
                                        key={`${t.id}-${idx}`}
                                        className={`bg-white p-10 lg:p-14 border border-gray-100 relative group transition-colors duration-500 hover:border-gray-200 ${idx === 1 ? 'hidden md:block' : ''}`}
                                    >
                                        <Quote size={60} className="text-secondary/5 absolute top-8 left-8 transform -rotate-12 transition-transform duration-500 group-hover:rotate-0" strokeWidth={1} />
                                        <p className="text-gray-600 italic mb-10 relative z-10 leading-relaxed text-lg min-h-[120px]">"{t.text}"</p>

                                        <div className="w-12 h-[1px] bg-secondary/30 mb-8 mx-auto md:mx-0"></div>

                                        <div className="text-center md:text-left">
                                            <h4 className="font-serif font-medium text-lg text-primary tracking-wide mb-1">{t.name}</h4>
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">{t.role}</span>
                                        </div>
                                        <div className="flex justify-center md:justify-start gap-2 mt-6 text-secondary/40">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">L'immobilier comme art de vivre</h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light">
                        Rencontrons-nous en toute confidentialité pour dessiner les contours de votre futur patrimoine européen.
                    </p>
                    <Link to="/contact" className="inline-block bg-primary text-white px-10 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-secondary transition-colors">
                        Prendre rendez-vous
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;