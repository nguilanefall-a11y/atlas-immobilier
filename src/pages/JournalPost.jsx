import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import postsData from '../data/posts.json';
import LazyImage from '../components/LazyImage';

const JournalPost = () => {
    const { id } = useParams();
    const post = postsData.posts.find(p => p.id.toString() === id);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-serif text-primary mb-4">Article introuvable</h2>
                <Link to="/journal" className="text-secondary underline">Retour au journal</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Image */}
            <div className="relative h-[60vh] md:h-[70vh] w-full">
                <LazyImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl"
                        >
                            <span className="bg-secondary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-6 inline-block">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-6 text-white/90 text-sm font-medium">
                                <span className="flex items-center gap-2"><User size={18} /> {post.author}</span>
                                <span className="flex items-center gap-2"><Calendar size={18} /> {post.date}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <Link to="/journal" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors">
                            <ArrowLeft size={20} /> Retour au journal
                        </Link>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-none text-gray-700 leading-loose"
                        >
                            <p className="lead text-2xl text-gray-800 font-serif italic border-l-4 border-secondary pl-8 py-4 mb-12 bg-gray-50 rounded-r-lg">
                                {post.excerpt}
                            </p>

                            {/* Intelligent Content Parsing */}
                            {post.content.split('\n\n').map((block, index) => {
                                // Check if the block is a numbered title (e.g. "1. The Title")
                                const isTitle = /^\d+\./.test(block);

                                if (isTitle) {
                                    return (
                                        <h3 key={index} className="text-3xl font-serif font-bold text-primary mt-12 mb-6 border-b border-gray-100 pb-2">
                                            {block}
                                        </h3>
                                    );
                                }

                                return (
                                    <p key={index} className="mb-6 text-xl text-gray-600 font-light">
                                        {block}
                                    </p>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-24 space-y-12">
                            {/* Author Box */}
                            <div className="bg-gray-50 p-8 border border-gray-100 text-center">
                                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                                    <User className="w-8 h-8 text-gray-400" />
                                </div>
                                <h4 className="font-serif font-bold text-lg mb-2">{post.author}</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Auteur</p>
                                <p className="text-sm text-gray-600">Expert en immobilier de prestige et passionné par l'art de vivre parisien.</p>
                            </div>

                            {/* Newsletter Small */}
                            <div>
                                <h4 className="font-serif font-bold text-xl mb-4 text-primary">Newsletter</h4>
                                <p className="text-gray-500 text-sm mb-4">Ne manquez aucun de nos articles.</p>
                                <input type="email" placeholder="Votre email" className="w-full border border-gray-300 p-3 mb-2 text-sm focus:outline-none focus:border-secondary" />
                                <button className="w-full bg-primary text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors">S'inscrire</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JournalPost;
