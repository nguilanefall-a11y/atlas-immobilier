import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 border-t border-secondary/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-16">
                    {/* Brand Content */}
                    <div>
                        <div className="mb-6">
                            <span className="font-serif text-3xl tracking-[0.2em] font-medium">SELY</span>
                            <span className="block text-[10px] uppercase tracking-[0.5em] text-secondary mt-1 pl-1">Paris • Immobilier</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            L'excellence de l'immobilier parisien.
                            Une expertise unique pour des biens d'exception.
                            Transaction, Location, Gestion.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-serif font-bold mb-6 text-lg">Navigation</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/buy" className="hover:text-secondary transition-colors">Acheter un bien</Link></li>
                            <li><Link to="/rent" className="hover:text-secondary transition-colors">Louer un bien</Link></li>
                            <li><Link to="/sell" className="hover:text-secondary transition-colors">Vendre votre bien</Link></li>
                            <li><Link to="/journal" className="hover:text-secondary transition-colors">Journal</Link></li>
                            <li><Link to="/discover" className="hover:text-secondary transition-colors">Découvrir l'agence</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif font-bold mb-6 text-lg">Nous Contacter</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-secondary mt-1 min-w-[18px]" />
                                <span>66 avenue des Champs-Elysées<br />75008 Paris</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-secondary min-w-[18px]" />
                                <span>06 52 90 49 51</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-secondary min-w-[18px]" />
                                <span>contact@sely.paris</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif font-bold mb-6 text-lg">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-6">Recevez nos dernières exclusivités en avant-première.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full bg-gray-800/50 border border-gray-700 rounded-none py-3 px-4 text-sm text-white focus:outline-none focus:border-secondary transition-colors"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary hover:text-white transition-colors">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <div>
                        &copy; {new Date().getFullYear()} Sely Immobilier. Tous droits réservés.
                    </div>
                    <div className="flex gap-6 items-center">
                        <span className="hidden md:inline mr-4 opacity-70">66 avenue des Champs-Elysées, 75008 Paris</span>
                        <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
                        <Link to="/confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
