import { useParams, Link, Navigate } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';
import GoldButton from '@/components/ui/GoldButton';
import ProductCard from '@/components/ui/ProductCard';
import CtaBanner from '@/components/sections/CtaBanner';
import { products, getRelatedProducts, categoryLabels } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const { lang } = useLanguage();

    const product = products.find((p) => p.slug === slug);
    if (!product) return <Navigate to="/404" replace />;

    const related = getRelatedProducts(slug!, product.category, 3);
    const name = lang === 'en' && product.nameEn ? product.nameEn : product.name;
    const catLabel = categoryLabels[product.category] ?? product.category;

    const T = {
        sr: {
            back: "← Svi proizvodi",
            description: "Opis",
            contents: "Sadržaj seta",
            ingredients: "Sastojci",
            howToUse: "Način upotrebe",
            order: "Poručite odmah",
            contact: "Stupite u kontakt",
            related: "Slični proizvodi",
        },
        en: {
            back: "← All products",
            description: "Description",
            contents: "Set contents",
            ingredients: "Ingredients",
            howToUse: "How to use",
            order: "Order now",
            contact: "Get in touch",
            related: "Related products",
        },
    }[lang];

    return (
        <>
            {/* Breadcrumb */}
            <div className="pt-28 pb-6 border-b border-[#A07848]/20 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center gap-2 text-xs text-[#6A6A6A]" style={{ fontFamily: 'var(--font-inter)' }}>
                        <Link to="/" className="hover:text-[#A07848] transition-colors">Magic Crystals</Link>
                        <span>/</span>
                        <Link to="/proizvodi" className="hover:text-[#A07848] transition-colors">{T.back.replace('← ', '')}</Link>
                        <span>/</span>
                        <span className="text-[#F5F0E8]">{name}</span>
                    </div>
                </div>
            </div>

            {/* Product Hero */}
            <section className="bg-[#0A0A0A] py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Image */}
                        <Reveal>
                            <div className="relative aspect-square bg-[#111] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={name}
                                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                {product.badge && (
                                    <span className="absolute top-4 left-4 bg-[#A07848] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5" style={{ fontFamily: 'var(--font-inter)' }}>
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                        </Reveal>

                        {/* Info */}
                        <div className="sticky top-28">
                            <Reveal delay={0.1}>
                                <span className="text-[#A07848] text-[11px] tracking-[0.3em] uppercase font-medium mb-3 block" style={{ fontFamily: 'var(--font-inter)' }}>{catLabel}</span>
                            </Reveal>
                            <Reveal delay={0.15}>
                                <h1 className="text-[#F5F0E8] font-light uppercase tracking-[0.08em] leading-tight mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,4vw,3.2rem)' }}>{name}</h1>
                            </Reveal>
                            {product.volume && (
                                <Reveal delay={0.2}>
                                    <p className="text-[#6A6A6A] text-sm tracking-widest mb-6" style={{ fontFamily: 'var(--font-inter)' }}>{product.volume}</p>
                                </Reveal>
                            )}
                            <Reveal delay={0.2}>
                                <div className="h-[1px] w-12 bg-[#A07848] mb-6" />
                            </Reveal>
                            <Reveal delay={0.25}>
                                <p className="text-[#8A8A8A] text-base font-light leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>{product.shortDescription}</p>
                            </Reveal>

                            {product.treatments && (
                                <Reveal delay={0.3}>
                                    <div className="flex gap-8 mb-8">
                                        {product.treatments.map((t) => (
                                            <div key={t.label}>
                                                <p className="text-[#F5F0E8] text-4xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>{t.count}+</p>
                                                <p className="text-[#6A6A6A] text-xs tracking-wider capitalize" style={{ fontFamily: 'var(--font-inter)' }}>{t.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Reveal>
                            )}

                            <Reveal delay={0.35}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <GoldButton href="/kontakt" variant="gold" size="lg">{T.order}</GoldButton>
                                    <GoldButton href="/kontakt" variant="outline" size="lg">{T.contact}</GoldButton>
                                </div>
                            </Reveal>

                            {product.videoUrl && (
                                <Reveal delay={0.4}>
                                    <a href={product.videoUrl} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 mt-6 text-[#A07848] text-sm hover:underline" style={{ fontFamily: 'var(--font-inter)' }}>
                                        <span>▶</span> Video prezentacija
                                    </a>
                                </Reveal>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Details */}
            <section className="bg-[#111] py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <Reveal>
                            <div>
                                <h2 className="text-[#F5F0E8] text-2xl font-light uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>{T.description}</h2>
                                <div className="h-[1px] w-8 bg-[#A07848] mb-5" />
                                <p className="text-[#8A8A8A] text-sm font-light leading-relaxed whitespace-pre-line" style={{ fontFamily: 'var(--font-inter)' }}>{product.description}</p>
                            </div>
                        </Reveal>

                        {product.contents && (
                            <Reveal delay={0.1}>
                                <div>
                                    <h2 className="text-[#F5F0E8] text-2xl font-light uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>{T.contents}</h2>
                                    <div className="h-[1px] w-8 bg-[#A07848] mb-5" />
                                    <ul className="space-y-2">
                                        {product.contents.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm font-light text-[#8A8A8A]" style={{ fontFamily: 'var(--font-inter)' }}>
                                                <span className="text-[#A07848] mt-1 shrink-0">—</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        )}

                        {(product.howToUse || product.ingredients) && (
                            <Reveal delay={0.2}>
                                <div className="space-y-8">
                                    {product.howToUse && (
                                        <div>
                                            <h2 className="text-[#F5F0E8] text-2xl font-light uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>{T.howToUse}</h2>
                                            <div className="h-[1px] w-8 bg-[#A07848] mb-5" />
                                            <p className="text-[#8A8A8A] text-sm font-light leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>{product.howToUse}</p>
                                        </div>
                                    )}
                                    {product.ingredients && (
                                        <div>
                                            <h2 className="text-[#F5F0E8] text-2xl font-light uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>{T.ingredients}</h2>
                                            <div className="h-[1px] w-8 bg-[#A07848] mb-5" />
                                            <p className="text-[#8A8A8A] text-sm font-light leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>{product.ingredients}</p>
                                        </div>
                                    )}
                                </div>
                            </Reveal>
                        )}
                    </div>
                </div>
            </section>

            {/* Related */}
            {related.length > 0 && (
                <section className="bg-[#0A0A0A] py-16 lg:py-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <Reveal>
                            <h2 className="text-[#F5F0E8] font-light uppercase tracking-[0.1em] mb-12" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem,3vw,2.5rem)' }}>{T.related}</h2>
                        </Reveal>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {related.map((p, i) => (
                                <ProductCard key={p.slug} product={p} index={i} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaBanner />
        </>
    );
}
