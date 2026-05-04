import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, Clock, ShieldCheck, Star, Users, FileText, Calendar, Car, ChevronDown, Check, Phone, TrendingUp, Handshake } from 'lucide-react';
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
    <div className="p-6 text-center">
        <div className="text-secondary flex justify-center mb-6">
            <Icon size={36} strokeWidth={1} />
        </div>
        <h4 className="text-lg font-bold uppercase tracking-wide mb-3">{title}</h4>
        <p className="text-gray-500 text-sm font-light leading-relaxed">{description}</p>
    </div>
);

const ExpertiseCard = ({ icon: Icon, title, description, benefits, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white p-8 md:p-12 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group"
    >
        <div className="w-16 h-16 bg-primary/5 flex items-center justify-center rounded-full mb-8 text-secondary group-hover:scale-110 transition-transform duration-500">
            <Icon size={32} />
        </div>
        <h3 className="text-2xl font-serif text-primary mb-6">{title}</h3>
        <p className="text-gray-500 font-light leading-relaxed mb-8">
            {description}
        </p>
        <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">La valeur ajoutée Sely</h4>
            <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                        <span className="text-sm text-gray-600 leading-relaxed">{benefit}</span>
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

const expertises = [
    {
        icon: ShieldCheck,
        title: "Le Bail Civil Sécurisé",
        description: "Nous sommes votre locataire direct. En signant un bail civil avec Sely, vous nous autorisez contractuellement à sous-louer le bien à notre clientèle premium.",
        benefits: [
            "Légalité totale et transparence absolue",
            "Contrat rédigé et validé par nos conseillers juridiques",
            "Protection maximale de votre patrimoine"
        ]
    },
    {
        icon: TrendingUp,
        title: "Garantie de Loyer Infaillible",
        description: "Finis les impayés et la vacance locative. Sely vous verse votre loyer tous les mois, à date fixe, que votre appartement soit occupé ou non par nos clients.",
        benefits: [
            "Versement régulier par virement automatique",
            "Aucun risque de carence locative",
            "Revenus 100% sécurisés et prévisibles"
        ]
    },
    {
        icon: Users,
        title: "Clientèle Corporate Exclusive",
        description: "Nous sous-louons exclusivement à des cadres en mobilité, des expatriés et une clientèle d'affaires rigoureusement sélectionnée par nos réseaux.",
        benefits: [
            "Partenariats avec des banques et multinationales",
            "Séjours professionnels garantissant le calme",
            "Aucune sous-location de type évènementiel"
        ]
    },
    {
        icon: Star,
        title: "Entretien Qualité Hôtelière",
        description: "Pour satisfaire nos clients haut de gamme, votre appartement doit être parfait. Le ménage professionnel et la petite maintenance sont à notre charge.",
        benefits: [
            "Nettoyage professionnel régulier de haut niveau",
            "Petites réparations gérées par nos artisans facturées à Sely",
            "Votre bien maintenu dans un état clinique"
        ]
    },
    {
        icon: Handshake,
        title: "Zéro Frais, Zéro Contrainte",
        description: "Contrairement à une agence classique, nous ne prenons aucun pourcentage de gestion. Notre rémunération réside uniquement dans notre activité de sous-location.",
        benefits: [
            "100% gratuit pour le propriétaire",
            "Aucun honoraire de mise en location",
            "Pas de frais de suivi ou d'état des lieux"
        ]
    },
    {
        icon: Key,
        title: "Disponibilité et Flexibilité",
        description: "Nous gérons tout, de A à Z. Et si vous avez besoin de récupérer votre bien selon les termes du contrat, nous vous le restituons dans un état impeccable.",
        benefits: [
            "Un seul interlocuteur dédié à votre écoute",
            "Remise en état systématique avant restitution",
            "Tranquillité d'esprit totale"
        ]
    }
];

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
                        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Sous-Location Professionnelle</span>
                        <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                            Votre Loyer <br />
                            <span className="italic font-light text-secondary">Garanti à 100%</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                            Sely devient votre locataire de confiance. Nous garantissons le versement de votre loyer chaque mois, tout en assurant la gestion intégrale de votre bien auprès d'une clientèle corporate exclusive. Une rentabilité sécurisée, la tranquillité d'esprit en plus.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-white text-primary px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-secondary hover:text-white transition-all duration-300">
                                Confier mon bien
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
                            <h3 className="text-4xl font-serif text-secondary mb-2">100%</h3>
                            <p className="text-sm uppercase tracking-widest text-gray-400">Transparence</p>
                        </div>
                        <div className="py-4 md:py-0">
                            <h3 className="text-4xl font-serif text-secondary mb-2">✦</h3>
                            <p className="text-sm uppercase tracking-widest text-gray-400">Excellence Reconnue</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERTISES GRID */}
            <section className="py-16 md:py-20 lg:py-32 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Notre Accompagnement en <br className="hidden md:block" /><span className="text-secondary italic font-light">Bail Corporate</span></h2>
                        <p className="text-gray-500 font-light leading-relaxed">
                            Découvrez notre modèle de sous-location professionnelle. Une solution clé en main vous garantissant des revenus fixes, l'absence totale de frais de gestion, et un entretien premium de votre bien.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {expertises.map((exp, index) => (
                            <ExpertiseCard key={index} index={index} {...exp} />
                        ))}
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
                                src="/assets/conciergerie/paris_apartment.png"
                                alt="Intérieur d'un appartement réaliste de haut standing avec vue sur Paris"
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
                            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Notre Engagement</span>
                            <h2 className="text-3xl md:text-5xl font-serif mb-8">Une tranquillité d'esprit absolue</h2>
                            <p className="text-gray-400 mb-10 leading-relaxed">
                                Sely devient votre locataire principal. Oubliez la gestion immobilière classique, les risques d'impayés et la vacance locative. Nous vous garantissons un revenu fixe chaque mois, tout en assurant un entretien méticuleux de votre patrimoine parisien.
                            </p>

                        </div>

                        <div className="lg:w-1/2">
                            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Questions Fréquentes</span>
                            <h2 className="text-3xl md:text-4xl font-serif mb-8">Vos interrogations</h2>

                            <div className="bg-white p-8 lg:p-8 lg:p-12 text-black shadow-2xl">
                                <div className="space-y-2">
                                    <AccordionItem title="Quel est l'intérêt de louer à Sely plutôt qu'à un particulier ?">
                                        En signant un bail avec Sely, nous devenons votre locataire direct. Vous éliminez 100% des risques d'impayés et de vacance locative. De plus, votre bien bénéficie d'un entretien de niveau hôtelier effectué par nos équipes.
                                    </AccordionItem>
                                    <AccordionItem title="Y a-t-il vraiment aucun frais de gestion ?">
                                        Absolument aucun. Contrairement à une agence traditionnelle qui prélève entre 5% et 10% de vos loyers, notre service est totalement gratuit pour les propriétaires.
                                    </AccordionItem>
                                    <AccordionItem title="Qui occupera mon appartement ?">
                                        Nous sous-louons exclusivement à une clientèle Corporate de haut niveau : cadres dirigeants en mobilité, diplomates ou expatriés, via nos partenariats exclusifs avec des entreprises.
                                    </AccordionItem>
                                    <AccordionItem title="Comment est assuré l'entretien de mon bien ?">
                                        L'état de votre bien est notre outil de travail. Nous effectuons des ménages professionnels hebdomadaires, et prenons en charge la petite maintenance (plomberie légère, petites réparations) à nos frais.
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
                        Échangeons en toute confidentialité sur le potentiel locatif de votre patrimoine.
                    </p>
                    <Link to="/contact" className="inline-block bg-primary text-white px-12 py-5 uppercase tracking-[0.15em] text-xs font-medium hover:bg-secondary transition-colors duration-300">
                        Rencontrer un conseiller
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Conciergerie;
