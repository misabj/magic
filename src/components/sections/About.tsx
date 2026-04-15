import { Reveal, StaggerContainer, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { lang } = useLanguage();

    const T = {
        sr: {
            tag: "Naša filozofija",
            titleLine1: "Kozmetika koja",
            titleLine2: "deluje iznutra",
            p1: "Magic Crystals je urađen po standardima EU. Strogo vodimo računa o supstancama koje koristimo — većina je iz organskog uzgoja. Svi preparati su ručno izrađeni u laboratoriji sa EU sertifikatom, u staklenoj ambalaži sa pumpicama uvezenim iz Holandije.",
            crystalText: "eliksiru od kristala",
            pillars: [
                { symbol: "EU", title: "EU Standardi", desc: "Svi preparati ručno izrađeni u sertifikovanoj laboratoriji" },
                { symbol: "◈", title: "Eliksir od Kristala", desc: "Jedinstven u svetu — američki aparat posebnih frekvencija" },
                { symbol: "✦", title: "100% Prirodno", desc: "Organski uzgoj, staklena ambalaža, bez kompromisa" },
            ],
        },
        en: {
            tag: "Our Philosophy",
            titleLine1: "Cosmetics that",
            titleLine2: "work from within",
            p1: "Magic Crystals is made to EU standards. We carefully select our substances — most sourced from organic farming. All products are handcrafted in an EU-certified laboratory, in glass packaging with pumps imported from the Netherlands.",
            crystalText: "crystal elixir",
            pillars: [
                { symbol: "EU", title: "EU Standards", desc: "All products handcrafted in an EU-certified laboratory" },
                { symbol: "◈", title: "Crystal Elixir", desc: "Unique worldwide — American frequency device" },
                { symbol: "✦", title: "100% Natural", desc: "Organic farming, glass packaging, no compromises" },
            ],
        },
    }[lang];

    return (
        <section className="bg-[#0D0D0D] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] min-h-[70vh]">
                    <div className="relative min-h-[50vh] lg:min-h-0 img-zoom">
                        <img
                            src="/proizvodi/set-za-filere.jpg"
                            alt="Magic Crystals prirodna kozmetika"
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:bg-gradient-to-t lg:from-black/30 lg:to-transparent" />
                    </div>

                    <div className="bg-[#0D0D0D] px-10 py-16 lg:px-16 lg:py-20 flex flex-col justify-center">
                        <Reveal>
                            <span className="text-[#C4956A] text-[11px] tracking-[0.3em] uppercase font-medium mb-4 block" style={{ fontFamily: 'var(--font-inter)' }}>{T.tag}</span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-white font-light uppercase tracking-[0.08em] leading-tight mb-8" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem,4vw,3.5rem)' }}>
                                {T.titleLine1}<br />
                                <em className="not-italic text-[#C4956A]">{T.titleLine2}</em>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}><div className="h-[1px] w-16 bg-[#C4956A] mb-8" /></Reveal>
                        <Reveal delay={0.25}>
                            <p className="text-white/55 text-base font-light leading-[1.9] mb-6" style={{ fontFamily: 'var(--font-inter)' }}>{T.p1}</p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p className="text-white/55 text-base font-light leading-[1.9] mb-12" style={{ fontFamily: 'var(--font-inter)' }}>
                                {lang === "sr"
                                    ? <>Jedinstveni smo po <strong className="font-medium text-white">{T.crystalText}</strong> koji je sastavni deo svakog preparata — napravljen uz pomoć američkog aparata jedinstvenog u svetu po frekvencijama. U eliksir ubacujemo i potencije homeopatije. Ovo je napredna prirodna kozmetika koja tek ulazi u svet kozmetologije.</>
                                    : <>We are unique in our <strong className="font-medium text-white">{T.crystalText}</strong>, a component of every product — created using an American device unique in the world for its frequencies. We also infuse homeopathic potencies into the elixir. This is advanced natural cosmetics only now entering the world of cosmetology.</>
                                }
                            </p>
                        </Reveal>
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6" baseDelay={0.4} staggerDelay={0.1}>
                            {T.pillars.map((p) => (
                                <motion.div key={p.title} variants={staggerItem} className="border-l-2 border-[#C4956A]/30 pl-4">
                                    <span className="text-[#C4956A] text-xs tracking-widest font-medium block mb-2" style={{ fontFamily: 'var(--font-inter)' }}>{p.symbol}</span>
                                    <h4 className="text-white text-sm font-semibold tracking-wide uppercase mb-1" style={{ fontFamily: 'var(--font-inter)' }}>{p.title}</h4>
                                    <p className="text-white/45 text-xs font-light leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>{p.desc}</p>
                                </motion.div>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}
