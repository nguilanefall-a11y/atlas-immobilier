import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, GraduationCap, Laptop, CheckCircle } from 'lucide-react';

const Join = () => {
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
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Devenez Conseiller Immobilier</h1>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Rejoignez le premier réseau français de mandataires et donnez une nouvelle dimension à votre carrière.
                        <span className="block mt-2 font-medium text-primary">Liberté. Performance. Excellence.</span>
                    </p>
                </motion.div>

                {/* Value Props */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 max-w-7xl mx-auto">
                    {[
                        { icon: Briefcase, title: "Indépendance", desc: "Gérez votre emploi du temps et conciliez vie pro/perso." },
                        { icon: TrendingUp, title: "Rémunération", desc: "Un système attractif à la hauteur de votre investissement." },
                        { icon: GraduationCap, title: "Formation", desc: "Université en ligne et accompagnement terrain local." },
                        { icon: Laptop, title: "Technologie", desc: "Des outils digitaux de pointe pour piloter votre activité." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-8 bg-gray-50 rounded-none border-b-2 border-transparent hover:border-secondary transition-colors duration-300 group"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-all">
                                <item.icon className="text-secondary" size={28} />
                            </div>
                            <h3 className="text-xl font-serif text-primary mb-3">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Form Section */}
                <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden max-w-6xl mx-auto">
                    {/* Left: Image/Info */}
                    <div className="bg-primary text-white p-8 lg:p-12 lg:w-2/5 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-serif mb-6">Changez de vie</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-secondary" />
                                    <span>Aucun diplôme requis</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-secondary" />
                                    <span>Statut auto-entrepreneur</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-secondary" />
                                    <span>Accompagnement personnalisé</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white p-8 lg:p-12 lg:w-3/5">
                        <h2 className="text-2xl font-bold mb-8 text-gray-800 uppercase tracking-wide text-sm">Formulaire de candidature</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Nom</label>
                                    <input type="text" className="w-full border-b border-gray-300 focus:border-secondary outline-none py-2 transition-colors bg-transparent" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Prénom</label>
                                    <input type="text" className="w-full border-b border-gray-300 focus:border-secondary outline-none py-2 transition-colors bg-transparent" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                                <input type="email" className="w-full border-b border-gray-300 focus:border-secondary outline-none py-2 transition-colors bg-transparent" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 uppercase">Téléphone</label>
                                <input type="tel" className="w-full border-b border-gray-300 focus:border-secondary outline-none py-2 transition-colors bg-transparent" />
                            </div>
                            <div className="pt-4">
                                <button className="bg-primary text-white px-8 py-4 w-full md:w-auto uppercase tracking-widest text-sm font-bold hover:bg-secondary transition-colors duration-300">
                                    Recevoir la brochure
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;
