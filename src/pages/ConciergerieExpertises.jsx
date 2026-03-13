import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Users, Calendar, Key, Link as LinkIcon, Building2, TrendingUp, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const ConciergerieExpertises = () => {
    const expertises = [
        {
            icon: Users,
            title: "Ciblage et Sélection Locative",
            description: "Nous identifions les profils les plus solvables et adaptés à votre bien. Notre réseau nous permet d'atteindre une clientèle corporate de haut niveau.",
            benefits: [
                "Accès au réseau diplomatique et expatriés premium",
                "Audit drastique des dossiers financiers et garanties",
                "Entretiens préalables rigoureux"
            ]
        },
        {
            icon: ShieldCheck,
            title: "Ingénierie Juridique et Fiscale",
            description: "Chaque location demande un cadre sur mesure. Nous rédigeons des baux spécifiques adaptés à votre stratégie patrimoniale.",
            benefits: [
                "Baux Code Civil et baux sociétés (Corporate)",
                "Stratégies d'optimisation de la fiscalité locale",
                "Suivi des évolutions réglementaires et encadrement des loyers"
            ]
        },
        {
            icon: TrendingUp,
            title: "Maximisation du Rendement",
            description: "Un bien d'exception mérite une rentabilité optimale. Nous ajustons la stratégie locative au marché pour limiter la vacance et maximiser les revenus.",
            benefits: [
                "Veille tarifaire en temps réel",
                "Arbitrage entre location longue durée et mobilité",
                "Garantie Visale et assurances loyers impayés intégrées"
            ]
        },
        {
            icon: Building2,
            title: "Gestion Technique et Intendance",
            description: "De la petite réparation à la gestion de dégâts des eaux complexes, nous préservons et valorisons votre actif au fil du temps.",
            benefits: [
                "Réseau d'artisans labellisés Sely, intervention 24/7",
                "Visites de contrôles annuelles documentées",
                "Gestion des sinistres et relations avec les assurances"
            ]
        },
        {
            icon: Handshake,
            title: "Gestion Administrative et Relation Locataire",
            description: "Nous assurons une gestion locative longue durée sans faille, devenant l'interlocuteur unique de votre locataire pour vous libérer de toute contrainte.",
            benefits: [
                "Gestion des interventions techniques et suivi des sinistres",
                "Gestion rigoureuse des baux et avenants",
                "Interface dédiée pour le propriétaire et le locataire"
            ]
        },
        {
            icon: Key,
            title: "Administration Financière Transparente",
            description: "Toute la gestion comptable est numérisée et accessible. Votre tableau de bord financier vous apporte clarté et sérénité.",
            benefits: [
                "Encaissement et révision annuelle des loyers automatisée",
                "Paiement des charges de copropriété et apurement",
                "Préparation du document d'aide à la déclaration fiscale"
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 bg-gray-50/50 -z-10"></div>

                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 -z-10"></div>

                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Le Savoir-Faire Sely</span>
                        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">
                            Nos Expertises en <br className="hidden md:block" />
                            <span className="italic font-light">Gestion Patrimoniale</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                            Découvrez le détail de nos méthodologies de gestion. Une combinaison exclusive de rigueur juridique, d'optimisation financière et d'un sens aigu du service sur-mesure.
                        </p>

                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 font-medium">
                            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
                            <span>/</span>
                            <Link to="/conciergerie" className="hover:text-primary transition-colors">Conciergerie</Link>
                            <span>/</span>
                            <span className="text-secondary">Expertises</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Expertises Grid */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {expertises.map((exp, index) => (
                            <ExpertiseCard key={index} index={index} {...exp} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 max-w-3xl mx-auto">Prêt à confier la gestion de votre patrimoine ?</h2>
                    <p className="text-lg text-gray-300 mb-10 font-light max-w-2xl mx-auto">
                        Nos conseillers en gestion locative sont à votre disposition pour une étude personnalisée de votre bien immobilier.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-primary px-10 py-5 uppercase tracking-widest text-sm font-bold shadow-xl hover:bg-secondary hover:text-white transition-all duration-500"
                    >
                        Contacter notre bureau
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ConciergerieExpertises;
