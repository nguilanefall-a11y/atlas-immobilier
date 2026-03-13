import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LegalMentions = () => {
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
                        <span className="text-secondary">Mentions Légales</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-12">Mentions Légales</h1>

                    <div className="space-y-12 text-gray-600 font-light leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">1. Éditeur du site</h2>
                            <p>Le site <strong>Sely Paris Immobilier</strong> (ci-après le "Site") est édité par la société <strong>Sely Immobilier SAS</strong>, au capital de 100 000 euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789.</p>
                            <p className="mt-2">Siège social : 66 avenue des Champs-Elysées, 75008 Paris, France.</p>
                            <p className="mt-2">Numéro de TVA intracommunautaire : FR 12 123456789.</p>
                            <p className="mt-2">Directeur de la publication : Monsieur Arthur Fall, en qualité de Directeur d'Agence.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">2. Activité immobilière</h2>
                            <p>Sely Immobilier est titulaire de la carte professionnelle "Transaction sur immeubles et fonds de commerce" n° CPI 7501 2023 000 000 123 délivrée par la CCI de Paris Île-de-France.</p>
                            <p className="mt-2">Garantie financière : Compagnie Européenne de Garanties et Cautions (CEGC), 16 rue Hoche - Tour Kupka B - TSA 39999 - 92919 La Défense Cedex, pour un montant de 110 000 euros.</p>
                            <p className="mt-2">Assurance Responsabilité Civile Professionnelle : MMA IARD, 14 boulevard Marie et Alexandre Oyon 72030 Le Mans Cedex 9.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">3. Hébergement du site</h2>
                            <p>L'hébergement du Site est assuré par la société <strong>Vercel Inc.</strong></p>
                            <p className="mt-2">Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.</p>
                            <p className="mt-2">Site web : https://vercel.com</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">4. Propriété intellectuelle</h2>
                            <p>L'ensemble du contenu du Site (architecture, textes, photographies, illustrations, graphismes, logos, éléments multimédia) est la propriété exclusive de la société Sely Immobilier ou de ses partenaires.</p>
                            <p className="mt-2">Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Sely Immobilier.</p>
                            <p className="mt-2">Toute exploitation non autorisée du Site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-primary mb-4">5. Contact</h2>
                            <p>Pour toute question ou demande d'information concernant le Site, vous pouvez nous contacter :</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Par email : contact@sely.paris</li>
                                <li>Par téléphone : 06 52 90 49 51</li>
                                <li>Par courrier postal : 66 avenue des Champs-Elysées, 75008 Paris</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LegalMentions;
