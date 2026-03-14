import React from 'react';
import { Target, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Target className="text-secondary" />,
        title: "Vissage Précis",
        desc: "Nous identifions les acheteurs les plus qualifiés pour votre bien grâce à nos algorithmes avancés."
    },
    {
        icon: <TrendingUp className="text-secondary" />,
        title: "Valorisation Maximale",
        desc: "Estimation précise et mise en valeur professionnelle pour vendre au meilleur prix."
    },
    {
        icon: <ShieldCheck className="text-secondary" />,
        title: "Accompagnement Juridique",
        desc: "Sécurisation complète de la transaction, de l'offre à l'acte authentique."
    },
    {
        icon: <Zap className="text-secondary" />,
        title: "Vente Rapide",
        desc: "Un réseau de diffusion puissant sur les plus grandes plateformes internationales."
    }
];

const OwnersSection = () => {
    return (
        <section className="py-10 lg:py-20 bg-primary text-white">
            <div className="container">
                <div className="grid grid-cols-1 md-grid-cols-2 gap-6 lg:gap-12 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md-text-5xl font-bold mb-6"
                        >
                            VOUS ÊTES <span className="text-secondary">PROPRIÉTAIRE ?</span>
                        </motion.h2>
                        <p className="text-xl mb-8 opacity-80">
                            Sely Immobilier est votre partenaire de confiance pour vendre ou gérer votre bien. Nous transformons votre projet en succès grâce à notre expertise digitale.
                        </p>

                        <div className="grid grid-cols-1 md-grid-cols-2 gap-6 mb-12">
                            {features.map((f, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1">{f.icon}</div>
                                    <div>
                                        <h4 className="font-bold mb-1">{f.title}</h4>
                                        <p className="text-sm opacity-70">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col md-flex gap-4">
                            <button className="btn-primary" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>FAIRE ESTIMER MON BIEN</button>
                            <button className="btn-outline" style={{ borderColor: 'white', color: 'white' }}>PARLER À UN CONSEILLER</button>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="/images/apt1.png"
                            alt="Propriétaire Sely"
                            className="w-full rounded-xl shadow-2xl"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                        <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-lg text-primary max-w-xs">
                            <p className="italic text-sm mb-4">"Grâce à Sely, j'ai vendu ma villa en moins de 3 semaines au prix souhaité. Le suivi était impeccable."</p>
                            <p className="font-bold">- Raphaël S., Vendeur</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OwnersSection;
