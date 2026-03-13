import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Home, Building2, Ruler, BedDouble, Star } from 'lucide-react';

const EstimationForm = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [formData, setFormData] = useState({
        propertyType: 'apartment', // or 'house'
        location: '',
        surface: '',
        rooms: '',
        condition: 'good', // 'new', 'good', 'renovate'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
        else calculateEstimate();
    };

    const calculateEstimate = () => {
        setLoading(true);
        // Simulate calculation delay
        setTimeout(() => {
            const basePricePerM2 = formData.location.startsWith('75') ? 10500 : 7000;
            const conditionMultiplier = formData.condition === 'new' ? 1.2 : formData.condition === 'good' ? 1.0 : 0.8;
            const size = parseFloat(formData.surface) || 0;
            const estimatedValue = size * basePricePerM2 * conditionMultiplier;

            setResult({
                min: Math.round(estimatedValue * 0.95),
                max: Math.round(estimatedValue * 1.05),
            });
            setLoading(false);
            setStep(4);
        }, 1500);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif text-primary mb-6">Quel type de bien souhaitez-vous estimer ?</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setFormData({ ...formData, propertyType: 'apartment' })}
                                className={`p-6 border flex flex-col items-center gap-3 transition-all duration-300 ${formData.propertyType === 'apartment' ? 'border-secondary bg-secondary/5 text-secondary' : 'border-gray-200 hover:border-gray-300'}`}
                            >
                                <Building2 size={32} />
                                <span className="uppercase tracking-widest text-sm font-bold">Appartement</span>
                            </button>
                            <button
                                onClick={() => setFormData({ ...formData, propertyType: 'house' })}
                                className={`p-6 border flex flex-col items-center gap-3 transition-all duration-300 ${formData.propertyType === 'house' ? 'border-secondary bg-secondary/5 text-secondary' : 'border-gray-200 hover:border-gray-300'}`}
                            >
                                <Home size={32} />
                                <span className="uppercase tracking-widest text-sm font-bold">Maison</span>
                            </button>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Code Postal</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="ex: 75008"
                                className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-secondary transition-colors"
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif text-primary mb-6">Caractéristiques du bien</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Surface (m²)</label>
                                <div className="relative">
                                    <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="number"
                                        name="surface"
                                        value={formData.surface}
                                        onChange={handleChange}
                                        className="w-full pl-12 p-4 bg-gray-50 border border-gray-200 outline-none focus:border-secondary transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Pièces</label>
                                <div className="relative">
                                    <BedDouble className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="number"
                                        name="rooms"
                                        value={formData.rooms}
                                        onChange={handleChange}
                                        className="w-full pl-12 p-4 bg-gray-50 border border-gray-200 outline-none focus:border-secondary transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif text-primary mb-6">État général</h3>
                        <div className="space-y-3">
                            {['new', 'good', 'renovate'].map((cond) => (
                                <button
                                    key={cond}
                                    onClick={() => setFormData({ ...formData, condition: cond })}
                                    className={`w-full p-4 border text-left flex items-center justify-between transition-all duration-300 ${formData.condition === cond ? 'border-secondary bg-secondary/5' : 'border-gray-200 hover:border-gray-300'}`}
                                >
                                    <span className="uppercase tracking-widest text-sm font-bold">
                                        {cond === 'new' ? 'Refait à neuf / Excellent' : cond === 'good' ? 'Bon état' : 'Travaux à prévoir'}
                                    </span>
                                    {formData.condition === cond && <Check size={20} className="text-secondary" />}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Star className="text-secondary" size={40} />
                        </div>
                        <h3 className="text-3xl font-serif text-primary mb-2">Estimation Indicative</h3>
                        <p className="text-gray-500 mb-8">Basée sur les caractéristiques fournies</p>

                        <div className="text-5xl font-serif text-secondary mb-8">
                            {result.min.toLocaleString()} € - {result.max.toLocaleString()} €
                        </div>

                        <p className="text-sm text-gray-600 max-w-md mx-auto mb-8 bg-gray-50 p-4 border border-gray-100 italic">
                            Cette estimation est donnée à titre indicatif. Pour une valorisation précise tenant compte des spécificités de votre bien (étage, vue, plan...), une visite est indispensable.
                        </p>

                        <button onClick={onClose} className="bg-primary text-white px-8 py-3 w-full uppercase tracking-widest text-sm font-bold hover:bg-secondary transition-colors duration-300">
                            Prendre rendez-vous avec un expert
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-md"
        >
            <div className="bg-white w-full max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative max-h-[90vh] overflow-y-auto">
                {/* Progress Bar */}
                {step < 4 && (
                    <div className="w-full h-1 bg-gray-100">
                        <div
                            className="h-full bg-secondary transition-all duration-500 ease-out"
                            style={{ width: `${(step / 3) * 100}%` }}
                        ></div>
                    </div>
                )}

                <div className="p-8 md:p-8 lg:p-12">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors">
                        Fermer [X]
                    </button>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-10 lg:py-20">
                            <div className="w-12 h-12 border-2 border-gray-100 border-t-secondary rounded-full animate-spin mb-4"></div>
                            <span className="uppercase tracking-widest text-xs font-bold text-gray-500">Calcul en cours...</span>
                        </div>
                    ) : (
                        renderStep()
                    )}

                    {step < 4 && !loading && (
                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 bg-primary text-white px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-secondary transition-colors duration-300"
                            >
                                {step === 3 ? 'Voir mon estimation' : 'Continuer'}
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default EstimationForm;
