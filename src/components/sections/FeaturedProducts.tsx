import { Reveal } from "@/components/ui/Reveal";
import ProductCard from "@/components/ui/ProductCard";
import GoldButton from "@/components/ui/GoldButton";
import { featuredProducts } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturedProducts() {
    const { lang } = useLanguage();
    const T = {
        sr: { tag: "Kolekcija", titleLine1: "Izdvojeni", titleLine2: "Proizvodi", cta: "Svi proizvodi →" },
        en: { tag: "Collection", titleLine1: "Featured", titleLine2: "Products", cta: "All products →" },
    }[lang];

    return (
        <section className="bg-[#0A0A0A] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
                    <div>
                        <Reveal>
                            <span className="text-[#A07848] text-[11px] tracking-[0.3em] uppercase font-medium mb-4 block" style={{ fontFamily: 'var(--font-inter)' }}>{T.tag}</span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-[#F5F0E8] font-light uppercase tracking-[0.1em] leading-tight" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,4vw,3rem)' }}>
                                {T.titleLine1}<br />
                                <span className="text-gradient-gold">{T.titleLine2}</span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2} direction="left">
                        <GoldButton href="/proizvodi" variant="outline">{T.cta}</GoldButton>
                    </Reveal>
                </div>
                <Reveal>
                    <div className="h-[1px] bg-gradient-to-r from-[#A07848]/60 via-[#C4956A]/30 to-transparent mb-16" />
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.slice(0, 4).map((product, i) => (
                        <ProductCard key={product.slug} product={product} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
