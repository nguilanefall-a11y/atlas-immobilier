import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, Clock, ShieldCheck, Star, Users, FileText, Calendar, Car, ChevronDown, Check, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import YieldCalculator from '../components/YieldCalculator';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-serif text-primary">{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="text-secondary" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-500 font-light leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ServiceCard = ({ icon: Icon, title, description }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
    >
        <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mb-6 text-secondary">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-serif text-primary mb-3">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const Conciergerie = () => {
    const [showPhone, setShowPhone] = useState(false);

    const handlePhoneClick = () => {
        setShowPhone(true);
    };
    return (
        <div className="bg-white">
            {/* HERO */}
            <div className="relative h-[85vh] w-full flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/conciergerie/hero.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Sous-Location Professionnelle & Conciergerie</span>
                        <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                            Votre Loyer <br />
                            <span className="italic font-light text-secondary">Garanti à 100%</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                            Nous devenons votre locataire principal via un bail adapté. Nous vous versons un loyer fixe chaque mois, et nous occupons de sous-louer votre bien (moyenne et longue durée, professionnels) dans les règles de l'art. Un revenu assuré, zéro souci.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-white text-primary px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-secondary hover:text-white transition-all duration-300">
                                Louer mon bien (Longue Durée)
                            </Link>
                            <Link to="/conciergerie/expertises" className="border border-white text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-primary transition-all duration-300">
                                Offre Sous-Location
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* TRUST INDICATORS */}
            <section className="py-10 lg:py-20 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                        <div className="py-4 md:py-0">
                            <h3 className="text-4xl font-serif text-secondary mb-2">100%</h3>
                            <p className="text-sm uppercase tracking-widest text-gray-400">Loyer Garanti</p>
                        </div>
                        <div className="py-4 md:py-0">
                            <h3 className="text-4xl font-serif text-secondary mb-2">24/7</h3>
                            <p className="text-sm uppercase tracking-widest text-gray-400">Gestion Premium</p>
                        </div>
                        <div className="py-4 md:py-0">
                            <h3 className="text-4xl font-serif text-secondary mb-2">0 €</h3>
                            <p className="text-sm uppercase tracking-widest text-gray-400">Frais Cachés</p>
                        </div>
                        <div className="py-4 md:py-0">
                            <h3 className="text-4xl font-serif text-secondary mb-2">5★</h3>
                            <p className="text-sm uppercase tracking-widest text-gray-400">Note Clients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Comment ça marche ?</h2>
                        <p className="text-gray-500 font-light leading-relaxed">
                            Vous signez un bail avec nous, et nous nous occupons du reste. Notre rémunération vient des sous-locations que nous effectuons (plateformes, sociétés, expatriés) : c'est notre métier, vous ne payez aucuns frais de gestion.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={ShieldCheck}
                            title="Bail Civil Sécurisé"
                            description="Nous signons un bail officiel vous autorisant la sous-location professionnelle. Tout est légal, transparent, et contractuellement encadré."
                        />
                        <ServiceCard
                            icon={Users}
                            title="Clientèle Corporate"
                            description="Nous louons votre logement à des entreprises, des expatriés ou des professionnels en déplacement, garantissant un grand soin de votre bien."
                        />
                        <ServiceCard
                            icon={Star}
                            title="Entretien Haut de Gamme"
                            description="Pour rentabiliser nos sous-locations, nous avons besoin d'un bien en état parfait. Nous assurons le ménage professionnel et la petite maintenance à nos frais."
                        />
                        <ServiceCard
                            icon={Calendar}
                            title="Optimisation Rendement"
                            description="Étude de marché permanente pour ajuster vos loyers aux meilleures opportunités tout en garantissant une vacance locative minimale."
                        />
                        <ServiceCard
                            icon={FileText}
                            title="Gestion Administrative"
                            description="Prise en charge intégrale de la location longue durée : rédaction des baux, états des lieux, et gestion des relations avec les locataires."
                        />
                        <ServiceCard
                            icon={Key}
                            title="Ingénierie Juridique"
                            description="Veille réglementaire constante et sécurisation juridique de vos baux pour prévenir tout risque de contentieux."
                        />
                    </div>
                </div>
            </section>

            {/* SPLIT SECTION: WHY US */}
            <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full z-0"></div>
                            <img
                                src="https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=2000"
                                alt="Concierge service details"
                                className="relative z-10 w-full rounded-sm shadow-2xl"
                            />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[20px] border-gray-50 z-0"></div>
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Notre Philosophie</span>
                            <h2 className="text-4xl font-serif text-primary mb-8">Pourquoi choisir Sely ?</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center">
                                        <span className="font-serif text-xl">01</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif text-primary mb-2">Rigueur Absolue</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Nous ne laissons rien au hasard. Chaque procédure est documentée, chaque intervention est rapportée.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center">
                                        <span className="font-serif text-xl">02</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif text-primary mb-2">Transparence Totale</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Accédez à votre espace propriétaire en temps réel : calendrier, revenus, factures et rapports d'intervention.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center">
                                        <span className="font-serif text-xl">03</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif text-primary mb-2">Partenaires d'Élite</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Nous travaillons exclusivement avec les meilleurs artisans et prestataires de Paris.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* PRICING & FAQ */}
            <section className="py-16 md:py-12 md:py-16 lg:py-24 lg:py-32 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                        <div className="lg:w-1/2">
                            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Tarification</span>
                            <h2 className="text-3xl md:text-5xl font-serif mb-8">Une offre simple et transparente</h2>
                            <p className="text-gray-400 mb-10 leading-relaxed">
                                Pas de frais cachés. Notre rémunération est basée sur la performance. Nous ne gagnons de l'argent que si vous en gagnez.
                            </p>

                        </div>

                        <div className="lg:w-1/2">
                            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Questions Fréquentes</span>
                            <h2 className="text-3xl md:text-4xl font-serif mb-8">Vos interrogations</h2>

                            <div className="bg-white p-8 lg:p-8 lg:p-12 text-black shadow-2xl">
                                <div className="space-y-2">
                                    <AccordionItem title="Quels sont les avantages d'un bail civil ou commercial ?">
                                        Le bail civil offre une plus grande flexibilité contractuelle, permettant de définir librement la durée et les conditions, idéal pour une clientèle corporate ou en mobilité. Le bail commercial sécurise les revenus sur le long terme avec des locataires institutionnels.
                                    </AccordionItem>
                                    <AccordionItem title="Comment garantissez-vous le paiement des loyers ?">
                                        Nous effectuons un audit financier drastique des candidats. De plus, nous proposons des garanties loyers impayés (GLI) et des cautions bancaires pour une sécurité totale de vos revenus.
                                    </AccordionItem>
                                    <AccordionItem title="Quelle est la durée des locations ?">
                                        Nos locations sont généralement conclues pour une durée comprise entre 30 jours et 12 mois maximum, afin de garantir une flexibilité optimale pour les propriétaires et les locataires corporate.
                                    </AccordionItem>
                                    <AccordionItem title="Gérez-vous également les travaux de rénovation ?">
                                        Oui, nos équipes peuvent superviser des travaux de rafraîchissement ou de rénovation complète entre deux locataires pour maintenir le standing et optimiser la valeur de votre bien.
                                    </AccordionItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-12 md:py-16 lg:py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8">Un projet de mise en location ?</h2>
                    <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto font-light">
                        Discutons de votre bien et de son potentiel locatif autour d'un café.
                    </p>
                    <Link to="/contact" className="inline-block bg-primary text-white px-12 py-5 uppercase tracking-widest text-sm font-bold shadow-xl hover:bg-secondary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        Rencontrer un expert
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Conciergerie;
