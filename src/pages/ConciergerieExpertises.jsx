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
                        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Sous-location Professionnelle</span>
                        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">
                            Notre Accompagnement en <br className="hidden md:block" />
                            <span className="italic font-light">Bail Corporate</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                            Découvrez notre modèle de sous-location professionnelle. Une solution clé en main vous garantissant des revenus fixes, l'absence totale de frais de gestion, et un entretien premium de votre bien.
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
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 max-w-3xl mx-auto">Prêt à nous louer votre bien ?</h2>
                    <p className="text-lg text-gray-300 mb-10 font-light max-w-2xl mx-auto">
                        Contactez-nous pour une étude de faisabilité. Nous serons ravis d'estimer le loyer garanti que Sely peut vous verser.
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
