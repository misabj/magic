import { Reveal, StaggerContainer, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { lang } = useLanguage();

    const T = {
        sr: {
            tag: "Era napredne, prirodne kozmetologije",
            titleLine1: "MAGIC",
            titleLine2: "CRYSTALS",
            p1: `Magic Crystals je 100% prirodna kozmetika nove generacije, kreirana da ne neguje samo površinu kože – već da    pokrene njenu dubinsku regeneraciju, obnovu i vidljivu transformaciju. 

            Naše formule nastaju kao spoj prirodnih aktivnih sastojaka, savremene kozmetologije i precizno razvijenih protokola rada.

            Rezultat je koža koja je zategnutija, hidrirana, osvežena i vidljivo podmlađena – bez agresivnih metoda i bez kompromisa.

            Magic Crystals se danas koristi u preko 100 zemalja širom sveta, kao pouzdan izbor profesionalaca koji žele vrhunske rezultate i potpuno prirodan pristup lepoti. 

            Posebnu vrednost čine naši specijalizovani tretmani, razvijeni da ciljano rešavaju potrebe svake kože – od dubinske hidratacije i anti-age efekta, do regeneracije, čišćenja i vraćanja prirodnog sjaja. 

            Svaki tretman je pažljivo osmišljen kao jedinstveno iskustvo koje spaja luksuz, stručnost i vidljive rezultate.`,
            crystalText: "eliksiru od kristala",
            pillars: [
                { symbol: "EU", title: "EU Standardi", desc: "Svi preparati ručno izrađeni u sertifikovanoj laboratoriji" },
                { symbol: "✦", title: "100% Prirodno", desc: "Organski uzgoj, staklena ambalaža, bez kompromisa" },
            ],
        },
        en: {
            tag: "The era of advanced, natural cosmetology",
            titleLine1: "MAGIC",
            titleLine2: "CRYSTALS",
            p1: `Magic Crystals is a 100% natural, next-generation skincare line, created not only to care for the surface of the skin — but to stimulate its deep regeneration, renewal, and visible transformation.

            Our formulas are developed as a fusion of natural active ingredients, modern cosmetology, and precisely designed treatment protocols.

            The result is skin that is firmer, hydrated, refreshed, and visibly rejuvenated — without aggressive methods and without compromise.

            Today, Magic Crystals is used in over 100 countries worldwide, as a trusted choice of professionals who seek premium results and a completely natural approach to beauty.

            Our specialized treatments bring additional value, carefully developed to target the unique needs of every skin type — from deep hydration and anti-aging effects to regeneration, cleansing, and restoring the skin’s natural glow.

            Each treatment is thoughtfully designed as a unique experience that combines luxury, expertise, and visible results.`,
            crystalText: "crystal elixir",
            pillars: [
                { symbol: "EU", title: "EU Standards", desc: "All products handcrafted in an EU-certified laboratory" },
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
                            <p className="text-white/55 text-base font-light leading-[1.9] mb-6 whitespace-pre-line" style={{ fontFamily: 'var(--font-inter)' }}>{T.p1}</p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p className="text-white/55 text-base font-light leading-[1.9] mb-12" style={{ fontFamily: 'var(--font-inter)' }}>
                                {lang === "sr"
                                    ? <>Jer prava lepota ne dolazi spolja – ona se aktivira.</>
                                    : <>Because true beauty doesn’t come from the outside — it is activated.</>
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
