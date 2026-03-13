import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Advisors = () => {
    const advisors = [
        {
            id: 0,
            name: "Arthur Fall",
            role: "Directeur d'Agence",
            description: "Fondateur et visionnaire, Arthur assure la direction stratégique de l'agence avec une exigence d'excellence absolue.",
            image: "/assets/advisors/artur.png",
            phone: "06 52 90 49 51"
        },
        {
            id: 1,
            name: "Valentine de La Tour",
            role: "Experte Immobilier",
            description: "Passionnée par l'immobilier de prestige depuis 15 ans, Valentine accompagne nos clients avec une vision centrée sur l'excellence.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            phone: "06 12 34 56 78"
        },
        {
            id: 2,
            name: "Maxime Chatenay",
            role: "Expert Transaction",
            description: "Spécialiste du marché parisien, Maxime accompagne ses clients dans leurs projets d'achat et de vente avec rigueur.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            phone: "06 98 76 54 32"
        },
        {
            id: 3,
            name: "David Kouakou",
            role: "Expert Transaction Senior",
            description: "Fort d'une expérience internationale, David allie une écoute attentive à une parfaite maîtrise du marché parisien pour vous offrir un accompagnement sur mesure.",
            image: "/assets/advisors/david.png",
            phone: "06 34 56 78 90"
        },
        {
            id: 4,
            name: "Éléonore Vasseur",
            role: "Responsable Location & Gestion",
            description: "Éléonore gère votre patrimoine avec soin. Sa réactivité assure une tranquillité d'esprit totale aux propriétaires.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            phone: "06 23 45 67 89"
        },
        {
            id: 5,
            name: "Victor Lemaire",
            role: "Négociateur Immobilier",
            description: "Dynamique et persévérant, Victor déniche les perles rares pour ses clients les plus exigeants.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            phone: "06 87 65 43 21"
        },
        {
            id: 6,
            name: "Béatrice Favier",
            role: "Responsable Marketing",
            description: "Béatrice sublime chaque bien grâce à des stratégies digitales innovantes pour une visibilité maximale.",
            image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            phone: "06 11 22 33 44"
        }
    ];

    return (
        <div className="pt-24 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Nos Conseillers</h1>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Une équipe d'experts passionnés à votre écoute pour concrétiser vos projets immobiliers les plus ambitieux.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advisors.map((advisor, index) => (
                        <motion.div
                            key={advisor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-gray-100">
                                <img
                                    src={advisor.image}
                                    alt={advisor.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500"></div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl font-serif font-bold text-primary mb-1">{advisor.name}</h3>
                                <div className="text-secondary text-xs font-bold uppercase tracking-widest mb-4">{advisor.role}</div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 px-2 min-h-[80px]">
                                    {advisor.description}
                                </p>

                                <div className="flex justify-center gap-4">
                                    <a href={`tel:${advisor.phone}`} className="flex items-center gap-2 bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors">
                                        <Phone size={14} />
                                        {advisor.phone}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Join Us Section */}
                <div className="mt-24 text-center bg-gray-50 p-8 lg:p-12 rounded-lg border border-gray-100">
                    <h2 className="text-2xl font-serif text-primary mb-4">Vous souhaitez rejoindre l'excellence ?</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Nous sommes toujours à la recherche de nouveaux talents pour enrichir notre équipe. Découvrez nos opportunités de carrière.
                    </p>
                    <a href="/join" className="inline-block bg-primary text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-secondary transition-colors duration-300">
                        Rejoindre l'équipe
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Advisors;
