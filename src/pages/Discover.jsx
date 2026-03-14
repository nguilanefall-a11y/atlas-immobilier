import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Globe, Award, ChevronRight, CheckCircle, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Discover = () => {
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 1000], ['0%', '30%']);
    const opacityBg = useTransform(scrollY, [0, 500], [0.05, 0.15]);

    const values = [
        {
            icon: CheckCircle,
            title: "Excellence",
            desc: "Chaque détail compte. Nous visons la perfection dans chaque interaction pour sublimer votre patrimoine."
        },
        {
            icon: Sparkles,
            title: "Prestige",
            desc: "Un accès exclusif aux biens les plus rares de la capitale, souvent commercialisés en toute discrétion."
        },
        {
            icon: ShieldCheck,
            title: "Confidentialité",
            desc: "La discrétion est notre priorité absolue. Nous protégeons vos intérêts avec une rigueur sans faille."
        }
    ];

    return (
        <div className="bg-white relative">
            {/* GLOBAL BACKGROUND ELEMENTS */}
            <motion.div
                style={{ opacity: opacityBg }}
                className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-20"></div>
            </motion.div>

            {/* HER0 SECTION */}
            <div className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
                <motion.div
                    style={{ y: yHero }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-[url('/assets/conciergerie/hero.png')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-primary/50 mix-blend-multiply"></div>
                </motion.div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <div className="inline-block border border-white/30 px-6 py-2 mb-8 backdrop-blur-sm">
                            <span className="text-xs font-bold uppercase tracking-[0.5em]">Depuis 2010</span>
                        </div>
                        <h1 className="text-5xl md:text-9xl font-serif mb-6 leading-none tracking-tighter">
                            L'Esprit <br /><span className="italic font-light text-secondary">Parisien</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="w-1 h-32 bg-gradient-to-b from-secondary to-transparent mx-auto"
                    ></motion.div>
                </div>
            </div>

            {/* SECTION 1: NOTRE ADN (Affiche Style) */}
            <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch bg-white shadow-2xl border border-gray-100 min-h-[600px]">
                        {/* Left: The "Poster" part */}
                        <div className="md:w-5/12 relative overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200"
                                alt="Paris Architecture"
                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-1000"></div>
                            <div className="absolute inset-8 border border-white/40 flex flex-col justify-end p-8 text-white">
                                <span className="text-6xl font-serif mb-4 leading-none">A.</span>
                                <div className="h-1 w-12 bg-secondary mb-6"></div>
                                <p className="text-xs uppercase tracking-[0.4em] font-bold">L'Excellence Immobilière</p>
                            </div>
                        </div>

                        {/* Right: The Text part */}
                        <div className="md:w-7/12 p-8 lg:p-12 md:p-20 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Notre ADN</span>
                                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-10 leading-tight">
                                    Une vision <br />singulière du luxe
                                </h2>
                                <p className="text-gray-600 text-xl leading-relaxed mb-8 font-light italic">
                                    "Nous ne vendons pas des mètres carrés, nous transmettons des patrimoines qui ont une âme."
                                </p>
                                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
                                    Sely Immobilier a été fondé sur la conviction que l'immobilier de prestige nécessite
                                    une écoute, une expertise et une discrétion hors du commun. Nous accompagnons une clientèle
                                    exigeante dans la réalisation de ses rêves les plus ambitieux au cœur de la capitale.
                                </p>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: NOS VALEURS (Floating Cards) */}
            <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">Nos Piliers</h2>
                        <div className="w-24 h-[1px] bg-secondary mx-auto mb-6"></div>
                        <p className="text-gray-400 uppercase tracking-[0.3em] text-[10px] font-bold">Les fondations de notre engagement</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 max-w-6xl mx-auto">
                        {values.map((v, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group relative bg-white p-8 lg:p-12 shadow-xl border border-gray-50 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="mb-8 relative inline-block">
                                    <v.icon size={48} className="text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
                                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary/5 rounded-full -z-10 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                                </div>
                                <h3 className="text-2xl font-serif text-primary mb-6">{v.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light text-lg">
                                    {v.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: L'AFFICHE (The requested "Affiche" section) */}
            <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="relative aspect-[21/9] w-full bg-primary overflow-hidden group shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1550340499-a6c6030e6953?q=80&w=2000"
                            alt="Luxury Paris Interior"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[5s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent"></div>

                        <div className="absolute inset-0 flex items-center p-8 lg:p-12 md:p-24">
                            <div className="max-w-xl text-white">
                                <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Sely Manifesto</span>
                                <h3 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">Le luxe est <br />une émotion</h3>
                                <p className="text-lg text-gray-200 font-light leading-relaxed mb-10">
                                    Chaque appartement que nous sélectionnons raconte une histoire.
                                    La vôtre commence ici, entre les lignes de l'histoire parisienne
                                    et le confort de l'innovation contemporaine.
                                </p>
                                <button className="border-b-2 border-secondary pb-2 text-xs font-bold uppercase tracking-[0.3em] hover:text-secondary transition-colors">
                                    Découvrir nos exclusivités
                                </button>
                            </div>
                        </div>

                        {/* Decorative poster elements */}
                        <div className="absolute top-12 right-12 text-white/20 font-serif text-9xl select-none hidden lg:block">
                            SELY
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-40 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-serif mb-10">Écrivez votre prochain chapitre</h2>
                    <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        Que vous soyez un propriétaire en quête de discrétion ou un acquéreur en quête d'exception,
                        notre équipe est prête à relever votre défi.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-8">
                        <Link to="/contact" className="bg-secondary text-white px-12 py-5 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-primary transition-all duration-500">
                            Nous contacter
                        </Link>
                        <Link to="/buy" className="border border-white/20 text-white px-12 py-5 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-primary transition-all duration-500">
                            Explorer le catalogue
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Discover;