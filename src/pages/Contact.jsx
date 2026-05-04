import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from 'lucide-react';

const Contact = () => {
    const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('Conciergerie');
    const projectTypes = [
        'Conciergerie',
        'Achat d\'un bien',
        'Vente d\'un bien',
        'Location / Gestion',
        'Estimation',
        'Autre demande'
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
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 tracking-[0.1em]">Contact</h1>
                    <div className="w-24 h-[1px] bg-secondary mx-auto mb-10"></div>
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
                                        <Phone className="text-secondary mt-1 shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-bold uppercase tracking-widest text-xs mb-2 text-secondary">Téléphone</h3>
                                            <p className="text-gray-300 leading-relaxed font-light">
                                                01 84 16 08 42
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
                                    placeholder="Votre prénom & nom"
                                    className="w-full border-b border-gray-200 focus:border-secondary outline-none py-3 transition-all bg-transparent placeholder:text-gray-300 font-light text-lg"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Adresse Email</label>
                                <input
                                    type="email"
                                    placeholder="votre.adresse@email.com"
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

                            <div className="space-y-2 relative">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type de projet</label>

                                <div
                                    className="w-full border-b border-gray-200 focus-within:border-secondary transition-all py-3 flex justify-between items-center cursor-pointer font-light text-lg"
                                    onClick={() => setIsProjectMenuOpen(!isProjectMenuOpen)}
                                >
                                    <span>{selectedProject}</span>
                                    <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${isProjectMenuOpen ? 'rotate-180' : ''}`} />
                                </div>

                                <AnimatePresence>
                                    {isProjectMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 shadow-2xl py-2 z-50 rounded-sm"
                                        >
                                            {projectTypes.map((type) => (
                                                <div
                                                    key={type}
                                                    className={`px-4 py-3 text-sm cursor-pointer transition-colors ${selectedProject === type ? 'text-primary font-medium bg-gray-50/50' : 'text-gray-500 font-light hover:bg-gray-50 hover:text-primary'}`}
                                                    onClick={() => {
                                                        setSelectedProject(type);
                                                        setIsProjectMenuOpen(false);
                                                    }}
                                                >
                                                    {type}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
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

                {/* Map Representation Section Removed per user request */}
            </div>
        </div>
    );
};

export default Contact;