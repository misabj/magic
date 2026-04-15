import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const { lang } = useLanguage();

    const T = {
        sr: {
            tag: "Protokol",
            title: "Postupak tretmana",
            steps: [
                { number: "01", name: "Cleanser", subtitle: "Čišćenje", desc: "Losion uklanja nečistoće sa lica i skida šminku. Pre upotrebe promućkati." },
                { number: "02", name: "Liberty", subtitle: "Enzimski piling", desc: "Dubinski dezinfikuje pore, otvara ih i pravi sterilnu sredinu za aplikaciju filera." },
                { number: "03", name: "Oasis Serum", subtitle: "Zaštita", desc: "Anti-age serum štiti kožu od pritiska vazduha tokom aplikacije i hrani je." },
                { number: "04", name: "Fileri", subtitle: "Aplikacija ~20min", desc: "Čarobni štapić u vašim rukama. Kombinujte šest filera prema nameni — prvi naneseni ima najveći efekat." },
                { number: "05", name: "Oasis Mask", subtitle: "Maska 15min", desc: "Podpomaze dubinskom delovanju filera i intenzivno hrani kožu." },
                { number: "06", name: "Oasis Cream", subtitle: "Završna nega", desc: "Završna krema zatvara tretman i savršena je podloga za šminku." },
            ],
        },
        en: {
            tag: "Protocol",
            title: "Treatment Procedure",
            steps: [
                { number: "01", name: "Cleanser", subtitle: "Cleansing", desc: "The lotion removes impurities and makeup. Shake before use." },
                { number: "02", name: "Liberty", subtitle: "Enzyme peel", desc: "Deep-disinfects pores, opens them and creates a sterile environment for filler application." },
                { number: "03", name: "Oasis Serum", subtitle: "Protection", desc: "Anti-age serum protects the skin from air pressure during application and nourishes it." },
                { number: "04", name: "Fillers", subtitle: "Application ~20min", desc: "A magic wand in your hands. Combine the six fillers by purpose — the first applied has the greatest effect." },
                { number: "05", name: "Oasis Mask", subtitle: "Mask 15min", desc: "Supports deep filler action and intensely nourishes the skin." },
                { number: "06", name: "Oasis Cream", subtitle: "Finishing care", desc: "Finishing cream seals the treatment and is a perfect makeup base." },
            ],
        },
    }[lang];

    return (
        <section className="bg-[#0A0A0A] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-20">
                    <Reveal>
                        <span className="text-[#A07848] text-[11px] tracking-[0.3em] uppercase font-medium mb-4 block" style={{ fontFamily: 'var(--font-inter)' }}>{T.tag}</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-[#F5F0E8] font-light uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,4vw,3rem)' }}>{T.title}</h2>
                    </Reveal>
                </div>

                <div ref={ref} className="relative">
                    <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-[1px] bg-[#A07848]/15" />
                    <div className="space-y-0">
                        {T.steps.map((step, i) => {
                            const isLeft = i % 2 === 0;
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                                    className={`relative grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 === 0 ? "" : "lg:direction-rtl"}`}
                                >
                                    <div className={`px-6 py-6 lg:px-12 lg:py-8 border-b border-[#A07848]/20 ${isLeft ? "lg:border-r lg:border-b-0 lg:text-right" : "lg:col-start-2 lg:text-left"}`}>
                                        <div className={`inline-flex flex-col ${isLeft ? "lg:items-end" : "items-start"}`}>
                                            <span className="text-[#A07848]/40 text-xs tracking-[0.3em] mb-2" style={{ fontFamily: 'var(--font-inter)' }}>{step.number}</span>
                                            <h3 className="text-[#F5F0E8] text-2xl lg:text-3xl font-light uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>{step.name}</h3>
                                            <p className="text-[#C4956A] text-xs tracking-wider uppercase font-medium mb-3" style={{ fontFamily: 'var(--font-inter)' }}>{step.subtitle}</p>
                                            <p className="text-[#6A6A6A] text-sm font-light leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-inter)' }}>{step.desc}</p>
                                        </div>
                                    </div>
                                    {isLeft ? <div className="hidden lg:block" /> : <div className="hidden lg:block lg:order-first" />}
                                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0A0A0A] border border-[#A07848]/50 items-center justify-center z-10">
                                        <div className="w-2 h-2 bg-[#A07848] rounded-full" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
