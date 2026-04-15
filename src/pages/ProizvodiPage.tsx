import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categoryLabels } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/context/LanguageContext';

const allCategories = ['sve', ...Object.keys(categoryLabels)];

const categoryDisplayLabels: Record<string, { sr: string; en: string }> = {
    sve: { sr: 'Sve', en: 'All' },
    setovi: { sr: 'Setovi', en: 'Sets' },
    fileri: { sr: 'Fileri', en: 'Fillers' },
    'kreme-serumi': { sr: 'Kreme i serumi', en: 'Creams & Serums' },
    'pilinzi-maske': { sr: 'Pilinzi i maske', en: 'Peels & Masks' },
    infuzije: { sr: 'Infuzije', en: 'Infusions' },
    ulja: { sr: 'Ulja', en: 'Oils' },
    ostalo: { sr: 'Ostalo', en: 'Other' },
};

export default function ProizvodiPage() {
    const [searchParams] = useSearchParams();
    const catParam = searchParams.get('cat') ?? 'sve';
    const [activeCategory, setActiveCategory] = useState(
        allCategories.includes(catParam) ? catParam : 'sve'
    );
    const { lang } = useLanguage();

    useEffect(() => {
        const cat = searchParams.get('cat') ?? 'sve';
        setActiveCategory(allCategories.includes(cat) ? cat : 'sve');
    }, [searchParams]);

    const T = {
        sr: { tag: 'Kolekcija', title: 'Svi Proizvodi' },
        en: { tag: 'Collection', title: 'All Products' },
    }[lang];

    const filtered = activeCategory === 'sve'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section className="min-h-screen bg-[#0A0A0A] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-16">
                    <Reveal>
                        <span className="text-[#A07848] text-[11px] tracking-[0.3em] uppercase font-medium mb-4 block" style={{ fontFamily: 'var(--font-inter)' }}>{T.tag}</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-[#F5F0E8] font-light uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem,5vw,4rem)' }}>{T.title}</h1>
                    </Reveal>
                </div>

                <Reveal delay={0.2}>
                    <div className="flex flex-wrap gap-2 mb-12 border-b border-[#A07848]/25 pb-6">
                        {allCategories.map(cat => {
                            const label = categoryDisplayLabels[cat]?.[lang] ?? cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-300 border ${activeCategory === cat
                                        ? 'bg-[#A07848] text-white border-[#A07848]'
                                        : 'bg-transparent text-[#6A6A6A] border-[#A07848]/20 hover:text-[#A07848] hover:border-[#A07848]/50'
                                        }`}
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {filtered.map((product, i) => (
                            <ProductCard key={product.slug} product={product} index={i} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
