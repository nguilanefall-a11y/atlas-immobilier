import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cookies = () => {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 text-sm text-gray-400 font-medium mb-8">
                        <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
                        <span>/</span>
                        <span className="text-secondary">Gestion des Cookies</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-12">Gestion des Cookies</h1>

                    <div className="space-y-12 text-gray-600 font-light leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">Qu'est-ce qu'un cookie ?</h2>
                            <p>Un cookie est un petit fichier texte simple enregistré sur le disque dur de votre ordinateur ou de votre appareil mobile lorsque vous visitez le Site. Ils sont largement utilisés pour faire fonctionner les sites Web avec efficacité, ainsi que pour fournir des informations aux propriétaires du site.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">Utilisation des cookies par Sely Immobilier</h2>
                            <p>Nous utilisons des cookies sur notre Site exclusviement pour les raisons suivantes :</p>

                            <h3 className="font-bold text-gray-800 mt-6 mb-2">Cookies strictement nécessaires (Fonctionnels)</h3>
                            <p>Ces cookies sont indispensables au bon fonctionnement du Site. Sans ces cookies, vous ne seriez pas en mesure de naviguer correctement ou d'utiliser certaines fonctionnalités (comme notre tiroir de navigation mobile ou les réglages linguistiques).</p>

                            <h3 className="font-bold text-gray-800 mt-6 mb-2">Cookies analytiques / de performance</h3>
                            <p>Ces cookies nous permettent de reconnaître et de compter le nombre de visiteurs ainsi que de voir comment nos visites se déplacent sur notre site (par exemple, Google Analytics). Ces données nous aident à améliorer le fonctionnement de notre Site Web (par exemple, en s'assurant que les utilisateurs cherchent et trouvent facilement ce dont ils ont besoin).</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">Gestion de vos préférences</h2>
                            <p>La plupart des navigateurs web permettent un certain contrôle de la plupart des cookies grâce aux paramètres du navigateur. Vous avez la possibilité de configurer votre navigateur pour accepter tous les cookies, rejeter tous les cookies, ou vous informer lorsqu'un cookie est émis.</p>
                            <p className="mt-4">Néanmoins, veuillez noter que si vous choisissez de désactiver tous les cookies via les paramètres de votre navigateur, certaines sections de notre site pourraient ne pas fonctionner de la manière la plus optimale.</p>
                        </section>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Cookies;
