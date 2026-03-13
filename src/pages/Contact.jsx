import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
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
                    <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6 uppercase tracking-wider">Contactez l'excellence</h1>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Que vous souhaitiez vendre, acheter ou simplement échanger sur votre projet, nos conseillers vous répondent sous 24h.
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-0 bg-white shadow-2xl border border-gray-100">
                    {/* Contact Info Sidebar */}
                    <div className="bg-primary text-white p-6 md:p-8 lg:p-12 lg:col-span-1 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-serif mb-12">Sely Paris</h2>

                                <div className="space-y-10">
                                    <div className="flex items-start gap-5">
                                        <MapPin className="text-secondary mt-1 shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-bold uppercase tracking-widest text-xs mb-2 text-secondary">Adresse</h3>
                                            <p className="text-gray-300 leading-relaxed font-light">
                                                66 avenue des Champs-Elysées<br />
                                                75008 Paris, France
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <Phone className="text-secondary mt-1 shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-bold uppercase tracking-widest text-xs mb-2 text-secondary">Téléphone</h3>
                                            <p className="text-gray-300 leading-relaxed font-light">
                                                06 52 90 49 51
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <Mail className="text-secondary mt-1 shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-bold uppercase tracking-widest text-xs mb-2 text-secondary">Email</h3>
                                            <p className="text-gray-300 leading-relaxed font-light">
                                                contact@sely.paris
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <Clock className="text-secondary mt-1 shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-bold uppercase tracking-widest text-xs mb-2 text-secondary">Horaires</h3>
                                            <p className="text-gray-300 leading-relaxed font-light text-sm">
                                                Lundi - Vendredi : 9h00 - 19h30<br />
                                                Samedi : 10h00 - 18h00 sur RDV
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Contact Form Main */}
                    <div className="p-6 md:p-8 lg:p-12 lg:col-span-2 bg-white">
                        <h2 className="text-3xl font-serif mb-8 md:mb-10 text-primary">Votre projet immobilier</h2>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-10">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Prénom & Nom</label>
                                <input
                                    type="text"
                                    placeholder="Jean Dupont"
                                    className="w-full border-b border-gray-200 focus:border-secondary outline-none py-3 transition-all bg-transparent placeholder:text-gray-300 font-light text-lg"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Adresse Email</label>
                                <input
                                    type="email"
                                    placeholder="jean.dupont@email.com"
                                    className="w-full border-b border-gray-200 focus:border-secondary outline-none py-3 transition-all bg-transparent placeholder:text-gray-300 font-light text-lg"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Téléphone</label>
                                <input
                                    type="tel"
                                    placeholder="+33 6 00 00 00 00"
                                    className="w-full border-b border-gray-200 focus:border-secondary outline-none py-3 transition-all bg-transparent placeholder:text-gray-300 font-light text-lg"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type de projet</label>
                                <select className="w-full border-b border-gray-200 focus:border-secondary outline-none py-3 transition-all bg-transparent font-light text-lg appearance-none">
                                    <option>Conciergerie</option>
                                    <option>Achat d'un bien</option>
                                    <option>Vente d'un bien</option>
                                    <option>Location / Gestion</option>
                                    <option>Estimation</option>
                                    <option>Autre demande</option>
                                </select>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Décrivez votre projet en quelques mots..."
                                    className="w-full border-b border-gray-200 focus:border-secondary outline-none py-3 transition-all bg-transparent placeholder:text-gray-300 font-light text-lg resize-none"
                                ></textarea>
                            </div>

                            <div className="md:col-span-2 pt-4 md:pt-6">
                                <button className="group w-full md:w-auto flex items-center justify-center gap-4 bg-primary text-white px-8 md:px-12 py-4 md:py-5 uppercase tracking-widest text-xs font-bold hover:bg-secondary transition-all duration-500 overflow-hidden relative">
                                    <span className="relative z-10">Envoyer la demande</span>
                                    <Send size={16} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                </button>
                                <p className="text-[10px] text-gray-400 mt-6 leading-relaxed italic">
                                    * En soumettant ce formulaire, vous acceptez notre politique de confidentialité des données.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Map Representation Section */}
                <div className="mt-12 md:mt-20 h-[350px] md:h-[500px] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden border border-gray-100 shadow-sm group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.4754546597793!2d2.302008711832049!3d48.86821217122178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fccfb30cb1d%3A0x6b8ee9e6ae5c8f6!2s66%20Av.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sen!2sfr!4v1700000000000!5m2!1sen!2sfr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sely Paris Office Map"
                        className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    ></iframe>

                    <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 right-4 md:right-auto md:bottom-10 md:left-10 bg-white p-5 md:p-6 shadow-2xl md:max-w-sm">
                        <h4 className="font-serif font-bold text-primary mb-2">Notre Bureau</h4>
                        <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">
                            Ouvert aux visites et consultations<br />du lundi au samedi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;