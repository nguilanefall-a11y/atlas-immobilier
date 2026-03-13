import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
                        <span className="text-secondary">Politique de Confidentialité</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-12">Politique de Confidentialité</h1>

                    <div className="space-y-12 text-gray-600 font-light leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">1. Préambule</h2>
                            <p>Sely Immobilier s'engage à protéger la vie privée des utilisateurs de son Site web et la confidentialité des données personnelles transmises. La présente politique détaille notre approche concernant la collecte, l'utilisation et la protection des informations que vous nous confiez.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">2. Collecte des données personnelles</h2>
                            <p>Nous pouvons recueillir vos données personnelles (nom, prénom, adresse e-mail, numéro de téléphone, détails de votre projet immobilier) lorsque vous :</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Remplissez un formulaire de contact sur notre Site.</li>
                                <li>Vous abonnez à notre newsletter.</li>
                                <li>Prenez rendez-vous via nos plateformes partenaires.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">3. Finalité du traitement</h2>
                            <p>Les informations que nous recueillons sont utilisées dans les buts exclusifs suivants :</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Répondre à vos demandes d'information ou de prise de rendez-vous.</li>
                                <li>Vous accompagner dans la réalisation de votre projet immobilier.</li>
                                <li>Vous envoyer notre newsletter ou des alertes ciblées (avec votre consentement).</li>
                                <li>Améliorer l'expérience utilisateur sur notre Site web.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">4. Protection et conservation</h2>
                            <p>Nous mettons en œuvre des mesures de sécurité de haut niveau pour maintenir la sécurité de vos informations personnelles. Vos données sont conservées pour la durée stricte et nécessaire aux finalités pour lesquelles elles ont été collectées, dans le respect de la législation en vigueur.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">5. Partage des données à des tiers</h2>
                            <p>Sely Immobilier ne vend, n'échange, ni ne transfère vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre Site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">6. Vos droits d'accès</h2>
                            <p>Conformément à la Réglementation (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression ou d'opposition au traitement de vos données.</p>
                            <p className="mt-2">Vous pouvez exercer ces droits à tout moment en nous contactant à l'adresse suivante :</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Par email : dpo@sely.paris</li>
                                <li>Par courrier : DPO Sely Immobilier, 66 avenue des Champs-Elysées, 75008 Paris</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
