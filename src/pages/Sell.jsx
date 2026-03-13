import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EstimationForm from '../components/EstimationForm';

const Sell = () => {
    const [showEstimation, setShowEstimation] = useState(false);

    return (
        <div className="pt-24 pb-20 min-h-screen bg-white">
            <AnimatePresence>
                {showEstimation && <EstimationForm onClose={() => setShowEstimation(false)} />}
            </AnimatePresence>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Confiez-nous votre bien</h1>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Une approche sur-mesure pour valoriser votre patrimoine.
                        Nos experts vous accompagnent à chaque étape de la vente.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
                    {/* Card 1: Estimation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-secondary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                        <span className="text-6xl text-gray-100 font-serif absolute top-4 right-4 z-0">01</span>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-serif text-primary mb-6">Estimation en ligne</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Obtenez une première évaluation précise de votre bien immobilier grâce à notre algorithme basé sur les dernières ventes parisiennes.
                            </p>
                            <button
                                onClick={() => setShowEstimation(true)}
                                className="bg-primary text-white px-8 py-3 rounded-none uppercase tracking-widest text-sm hover:bg-secondary transition-colors duration-300"
                            >
                                Estimer mon bien
                            </button>
                        </div>
                    </motion.div>

                    {/* Card 2: Mandat */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-primary p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden text-white"
                    >
                        <span className="text-6xl text-white opacity-10 font-serif absolute top-4 right-4 z-0">02</span>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-serif text-white mb-6">Un accompagnement dédié</h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Rencontrez un conseiller dédié pour définir la meilleure stratégie de vente. Photos HD, visite virtuelle, et diffusion ciblée.
                            </p>
                            <button className="bg-white text-primary px-8 py-3 rounded-none uppercase tracking-widest text-sm hover:bg-secondary hover:text-white transition-colors duration-300">
                                Contacter un expert
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Section: Why us? */}
                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-serif text-primary mb-12 italic">L'excellence au service de votre projet</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="p-6">
                            <div className="text-secondary text-4xl mb-4">✦</div>
                            <h4 className="text-lg font-bold uppercase tracking-wide mb-2">Expertise Locale</h4>
                            <p className="text-gray-500 text-sm">Une connaissance pointue de chaque arrondissement.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-secondary text-4xl mb-4">✦</div>
                            <h4 className="text-lg font-bold uppercase tracking-wide mb-2">Diffusion Premium</h4>
                            <p className="text-gray-500 text-sm">Vos biens mis en lumière sur les meilleurs portails.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-secondary text-4xl mb-4">✦</div>
                            <h4 className="text-lg font-bold uppercase tracking-wide mb-2">Suivi Personnalisé</h4>
                            <p className="text-gray-500 text-sm">Un interlocuteur unique du mandat à la signature.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sell;
