import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import GoldButton from "@/components/ui/GoldButton";
import { useLanguage } from "@/context/LanguageContext";

export default function FillerSpotlight() {
    const { lang } = useLanguage();

    const T = {
        sr: {
            tag: "Signature tretman",
            title: "Winner Fileri",
            subtitle: "Revolucija u kozmetici — fileri bez igala",
            treatmentsLabel: "tretmana po setu",
            seeMore: "Saznaj više",
            seeSet: "Pogledaj set",
            benefits: [
                "Brže prodiru kroz kožu od konvencionalnih filera",
                "Odmah vidljiv efekat bez oporavka",
                "Ne prave zavisnost, daju trajni efekat",
                "6 različitih filera za svaki tip kože",
                "Bezbolna aplikacija — bez igala",
                "Ubrizgava se i kiseonik tokom tretmana",
            ],
            fillers: [
                { name: "Vitaminska Bomba", desc: "Efekat filera bez igle. Volumen, hidratacija i mladalački sjaj u jednom serumu." },
                { name: "Anti-Age", desc: "Zategnutost, obnova i mladalački sjaj. Intenzivan anti-age filer sa hijaluronom i kolagenskim stimulatorima." },
                { name: "Duboka Hidratacija", desc: "Molekularna voda za ćelije. Dubinska hidratacija. Volumen. Ravnoteža." },
                { name: "Za Akne", desc: "Balans bez isušivanja. Precizna terapija za akne, sebum i upale." },
                { name: "Eye Rescue", desc: "Osvežen pogled bez podočnjaka i otoka. Intenzivna nega za regiju oko očiju." },
                { name: "Skin Relief", desc: "Brza pomoć za osetljivu i reaktivnu kožu. Umirenje, regeneracija i dubinska hidratacija." },
            ],
        },
        en: {
            tag: "Signature treatment",
            title: "Winner Fillers",
            subtitle: "A revolution in cosmetics — needle-free fillers",
            treatmentsLabel: "treatments per set",
            seeMore: "Learn more",
            seeSet: "View the set",
            benefits: [
                "Penetrate the skin faster than conventional fillers",
                "Immediately visible results with no recovery time",
                "No dependency — lasting effects",
                "6 different fillers for every skin type",
                "Painless application — no needles",
                "Oxygen is also infused during the treatment",
            ],
            fillers: [
                { name: "Vitamin Bomb", desc: "A filler-like effect without needles. Volume, hydration, and a youthful glow in a single serum."  },
                { name: "Anti-Age", desc: "Firmness, renewal, and a youthful glow. An intensive anti-age filler with hyaluronic acid and collagen stimulators." },
                { name: "Deep Hydration", desc: "Molecular water for your cells. Deep hydration. Volume. Balance."},
                { name: "For Acne", desc: "Balance without drying. A targeted treatment for acne, sebum, and inflammation." },
                { name: "Eye Rescue", desc: "A refreshed look without dark circles and puffiness. Intensive care for the eye area." },
                { name: "Skin Relief", desc: "Quick relief for sensitive and reactive skin. Soothing, regeneration, and deep hydration." },
            ],
        },
    }[lang];

    return (
        <section className="bg-[#111] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[6fr_6fr] min-h-[90vh]">
                    <div className="relative min-h-[55vw] lg:min-h-0 order-first lg:order-last img-zoom">
                        <img
                            src="/proizvodi/set-za-filere.jpg"
                            alt="Magic Crystals Set za Winner Filere"
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:to-[#F8F6F3]/30" />
                        <div className="absolute bottom-8 left-8 lg:bottom-12 lg:right-12 lg:left-auto text-right">
                            <div className="inline-block border border-[#A07848]/30 bg-[#0A0A0A]/90 backdrop-blur-sm px-6 py-4">
                                <p className="text-[#A07848] text-5xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>72</p>
                                <p className="text-[#6A6A6A] text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-inter)' }}>{T.treatmentsLabel}</p>
                            </div>
                        </div>
                    </div>

                    <div className="px-10 py-16 lg:px-16 lg:py-20 flex flex-col justify-center order-last lg:order-first">
                        <Reveal>
                            <span className="text-[#A07848] text-[11px] tracking-[0.3em] uppercase font-medium mb-4 block" style={{ fontFamily: 'var(--font-inter)' }}>{T.tag}</span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-[#F5F0E8] font-light uppercase tracking-[0.08em] leading-tight mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,3.5vw,3rem)' }}>{T.title}</h2>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="text-[#A07848] text-xl italic font-light mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>{T.subtitle}</p>
                        </Reveal>
                        <Reveal delay={0.2}><div className="h-[1px] w-12 bg-[#A07848] mb-8" /></Reveal>
                        <Reveal delay={0.25}>
                            <ul className="space-y-3 mb-10">
                                {T.benefits.map((b) => (
                                    <li key={b} className="flex items-start gap-3">
                                        <Check size={13} strokeWidth={2} className="text-[#C4956A] mt-0.5 shrink-0" />
                                        <span className="text-[#8A8A8A] text-sm font-light leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal delay={0.35}>
                            <div className="grid grid-cols-2 gap-3 mb-10">
                                {T.fillers.map((f, i) => (
                                    <div key={i} className="border border-[#A07848]/25 hover:border-[#A07848]/40 bg-[#0A0A0A] px-4 py-3 transition-colors duration-300">
                                        <p className="text-[#A07848] text-xs tracking-wider uppercase font-medium mb-1" style={{ fontFamily: 'var(--font-inter)' }}>{f.name}</p>
                                        <p className="text-[#6A6A6A] text-xs font-light leading-snug" style={{ fontFamily: 'var(--font-inter)' }}>{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <GoldButton href="/winner-fileri" variant="gold">{T.seeMore}</GoldButton>
                                <GoldButton href="/proizvodi/set-za-filere" variant="outline">{T.seeSet}</GoldButton>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
