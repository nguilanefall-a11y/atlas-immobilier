import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import postsData from '../data/posts.json';
import LazyImage from '../components/LazyImage';

const Journal = () => {
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
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Journal</h1>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        L'art de vivre parisien, les tendances du marché, l'architecture et nos coups de cœur. Plongez dans l'univers de Sely Immobilier.
                    </p>
                </motion.div>

                {/* Featured Post (First one) */}
                <Link to={`/journal/${postsData.posts[0].id}`} className="block mb-16 group">
                    <div className="relative h-[60vh] overflow-hidden rounded-sm">
                        <LazyImage
                            src={postsData.posts[0].image}
                            alt={postsData.posts[0].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-8 lg:p-12 text-white max-w-4xl">
                            <span className="bg-secondary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4 inline-block">
                                {postsData.posts[0].category}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
                                {postsData.posts[0].title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 mb-6 line-clamp-2">
                                {postsData.posts[0].excerpt}
                            </p>
                            <div className="flex items-center gap-6 text-sm font-medium">
                                <span className="flex items-center gap-2"><User size={16} /> {postsData.posts[0].author}</span>
                                <span className="flex items-center gap-2"><Calendar size={16} /> {postsData.posts[0].date}</span>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Grid of other posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {postsData.posts.slice(1).map((post, index) => (
                        <Link to={`/journal/${post.id}`} key={post.id} className="group flex flex-col h-full">
                            <div className="overflow-hidden mb-6 aspect-[3/2] rounded-sm">
                                <LazyImage
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex-1 flex flex-col">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-secondary text-xs font-bold uppercase tracking-widest">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-400 text-xs">
                                        {post.date}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-serif font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-primary font-bold text-xs uppercase tracking-widest mt-auto group-hover:text-secondary transition-colors">
                                    Lire l'article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Journal;
