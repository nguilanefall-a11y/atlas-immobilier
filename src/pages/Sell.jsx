import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Eye, Sparkles, Handshake, ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sell = () => {
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 1000], ['0%', '30%']);
    const opacityBg = useTransform(scrollY, [0, 500], [1, 0.4]);

    const steps = [
        {
            num: "01",
            icon: Search,
            title: "L'Évaluation Confidentielle",
            desc: "Au-delà des algorithmes de marché, nos experts analysent l'âme absolue de votre bien. Emplacement, histoire, volumes, potentiel de réenchantement : chaque subtilité est valorisée pour déterminer un prix juste, ancré dans la réalité ultra-premium."
        },
        {
            num: "02",
            icon: Sparkles,
            title: "La Mise en Lumière",
            desc: "Nous orchestrons la présentation visuelle de votre bien comme une œuvre d'art. Home staging éditorial, photographies d'art architecturales, vidéo immersive : nous créons le désir avant même la première visite."
        },
        {
            num: "03",
            icon: Eye,
            title: "La Diffusion Exclusive",
            desc: "Selon votre volonté de discrétion, nous proposons votre bien 'off-market' à notre carnet d'adresses qualifié ou nous le diffusons sur les plateformes de prestige internationales les plus sélectes."
        },
        {
            num: "04",
            icon: Handshake,
            title: "La Négociation Parfaite",
            desc: "Nos conseillers mènent les discussions avec fermeté et élégance. De la vérification rigoureuse de la solvabilité de l'acquéreur jusqu'à la signature de l'acte authentique chez le notaire, votre sérénité est totale."
        }
    ];

    const pillars = [
        "Un fichier d'acquéreurs internationaux ultra-qualifiés",
        "Une discrétion absolue garantie par clause de confidentialité",
        "Une stratégie de commercialisation sur-mesure",
        "Un accompagnement juridique et fiscal dédié"
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* HERO SECTION */}
            <div className="relative h-screen w-full overflow-hidden bg-primary text-white flex items-center justify-center">
                <motion.div style={{ y: yHero, opacity: opacityBg }} className="absolute inset-0 z-0">
                    {/* Using an elegant interior/architectural image */}
                    <div className="absolute inset-0 bg-[url('/images/apt_10/img_06.png')] bg-cover bg-center grayscale opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40"></div>
                </motion.div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center max-w-4xl"
                    >
                        <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Boutique Agency Parisienne</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight">
                            L'art de <br />
                            <span className="italic font-light text-white/90">bien vendre.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                            Confiez-nous la transaction de votre patrimoine d’exception. 
                            Une approche sur-mesure, confidentielle et redoutablement efficace.
                        </p>
                        <Link
                            to="/contact"
                            className="bg-secondary text-white px-10 py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-primary transition-colors duration-500 inline-flex items-center group"
                        >
                            Nous Contacter
                            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <span className="text-[10px] uppercase tracking-widest mb-2 font-bold">Découvrir l'approche</span>
                    <div className="w-[1px] h-12 bg-white"></div>
                </motion.div>
            </div>

            {/* INTRO EDITORIAL SECTION */}
            <section className="py-24 md:py-32 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className="lg:w-1/2"
                        >
                            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-6 block">Notre Philosophie</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                                Transcender <br />la transaction.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                                Vendre un bien de prestige n’est pas une équation mathématique. C’est la transmission d’une histoire, d’une adresse, d’un art de vivre.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                Chez Sely Immobilier, nous limitons volontairement notre portefeuille de mandats afin d'offrir à chaque propriétaire un niveau de service et d'attention inégalé sur le marché parisien. 
                                Votre bien est unique, notre stratégie de vente le sera tout autant.
                            </p>
                            
                            <ul className="space-y-4">
                                {pillars.map((pillar, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                                        <CheckCircle className="text-secondary w-5 h-5 mr-3 flex-shrink-0" />
                                        {pillar}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="aspect-[3/4] overflow-hidden relative border border-gray-100 p-2 bg-gray-50">
                                <img 
                                    src="/images/apt_12/img_01.png" 
                                    alt="Intérieur Parisien Haussmannien" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 border border-primary/10 m-6 pointer-events-none"></div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gray-100 rounded-full -z-10 blur-3xl opacity-50"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE PROCESS SECTION (Dark Mode to contrast) */}
            <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Le Processus Signature</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary">L'Excellence à chaque étape</h2>
                        <div className="w-16 h-[1px] bg-primary/20 mx-auto mt-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                className="bg-white p-8 lg:p-10 border border-gray-100 relative"
                            >
                                <span className="absolute -top-6 -right-2 text-8xl font-serif text-gray-50 opacity-50 z-0 select-none">
                                    {step.num}
                                </span>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary mb-8">
                                        <step.icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-serif text-primary mb-6 pr-4">{step.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-500 font-light flex-grow">
                                        {step.desc}
                                    </p>
                                    
                                    <div className="w-8 h-[2px] bg-secondary/30 mt-10"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-24 bg-white relative border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto overflow-hidden shadow-sm">
                        
                        <div className="p-16 lg:p-24 bg-primary text-white flex flex-col justify-center items-center text-center relative">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-serif mb-8">Votre projet immobilier à Paris</h3>
                                <p className="text-white/80 font-light mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                                    Une expertise s'apprécie sur place. Un de nos Directeurs au sein de Sely se déplace en toute discrétion chez vous pour évaluer le potentiel unique de votre bien.
                                </p>
                                <Link
                                    to="/contact"
                                    className="bg-secondary text-white px-10 py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-primary transition-colors duration-500 inline-block"
                                >
                                    Prendre Rendez-vous
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sell;
