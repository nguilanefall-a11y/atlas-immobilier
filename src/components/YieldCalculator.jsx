import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Wallet, Percent } from 'lucide-react';

const YieldCalculator = () => {
    const [surface, setSurface] = useState(50);
    const [occupancy, setOccupancy] = useState(75);
    const [district, setDistrict] = useState('marais');

    const districts = {
        marais: { name: 'Le Marais', priceFactor: 1.4 },
        saintgermain: { name: 'Saint-Germain-des-Prés', priceFactor: 1.5 },
        trocadero: { name: 'Trocadéro / Eiffel', priceFactor: 1.6 },
        montmartre: { name: 'Montmartre', priceFactor: 1.2 },
        bastille: { name: 'Bastille / Canal', priceFactor: 1.0 },
    };

    const basePricePerM2 = 45; // Base price per m2 per night for 'Average' area

    const results = useMemo(() => {
        const nightlyRate = Math.round(surface * basePricePerM2 * districts[district].priceFactor / 10);
        const monthlyRevenue = Math.round(nightlyRate * 30 * (occupancy / 100));
        const annualRevenue = monthlyRevenue * 12;

        return { nightlyRate, monthlyRevenue, annualRevenue };
    }, [surface, occupancy, district]);

    return (
        <div className="bg-white border border-gray-100 shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
                {/* Inputs Side */}
                <div className="lg:w-1/2 p-8 lg:p-8 lg:p-12 bg-gray-50/50">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-sm">
                            <Calculator size={20} />
                        </div>
                        <h3 className="text-2xl font-serif text-primary text-left">Simulateur de revenus</h3>
                    </div>

                    <div className="space-y-10">
                        {/* District Selection */}
                        <div className="text-left">
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Quartier</label>
                            <select
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                className="w-full bg-white border-b border-gray-300 py-3 outline-none focus:border-secondary transition-colors font-medium text-primary"
                            >
                                {Object.entries(districts).map(([key, data]) => (
                                    <option key={key} value={key}>{data.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Surface Slider */}
                        <div className="text-left">
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Surface</label>
                                <span className="font-serif text-xl text-primary">{surface} m²</span>
                            </div>
                            <input
                                type="range"
                                min="20"
                                max="250"
                                step="5"
                                value={surface}
                                onChange={(e) => setSurface(parseInt(e.target.value))}
                                className="w-full accent-secondary"
                            />
                        </div>

                        {/* Occupancy Slider */}
                        <div className="text-left">
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Taux d'occupation annuel</label>
                                <span className="font-serif text-xl text-primary">{occupancy}%</span>
                            </div>
                            <input
                                type="range"
                                min="40"
                                max="100"
                                step="5"
                                value={occupancy}
                                onChange={(e) => setOccupancy(parseInt(e.target.value))}
                                className="w-full accent-secondary"
                            />
                        </div>
                    </div>
                </div>

                {/* Results Side */}
                <div className="lg:w-1/2 p-8 lg:p-8 lg:p-12 bg-primary text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 -mr-20 -mt-20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 h-full flex flex-col justify-between text-left">
                        <div>
                            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-2 block">Estimation annuelle</span>
                            <div className="flex items-baseline gap-2 mb-8">
                                <h4 className="text-5xl md:text-6xl font-serif text-white">
                                    {results.annualRevenue.toLocaleString('fr-FR')} €
                                </h4>
                                <span className="text-gray-400 text-sm italic">loyer garanti / an</span>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Prix moyen / nuit</p>
                                    <p className="text-xl font-serif text-secondary">{results.nightlyRate} €</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Revenu brut mensuel</p>
                                    <p className="text-xl font-serif text-secondary">{results.monthlyRevenue.toLocaleString('fr-FR')} €</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Garantie</p>
                                    <p className="text-xl font-serif text-secondary">Loyer 100% Garanti</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Service inclus</p>
                                    <p className="text-xl font-serif text-gray-300">Prise en charge totale</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-sm">
                            <p className="text-sm text-gray-300 font-light leading-relaxed">
                                <span className="text-secondary font-bold">Note :</span> Cette simulation est basée sur les données de marché actuelles et nos performances historiques dans ces quartiers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YieldCalculator;
