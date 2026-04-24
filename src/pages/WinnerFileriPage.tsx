import { Reveal } from '@/components/ui/Reveal';
import GoldButton from '@/components/ui/GoldButton';
import CtaBanner from '@/components/sections/CtaBanner';
import { useLanguage } from '@/context/LanguageContext';

const fillersSr = [
    { name: 'Vitaminska Bomba', nameEn: 'Winner Filler',  desc: 'Efekat filera bez igle. Volumen, hidratacija i mladalački sjaj u jednom serumu.' },
    { name: 'Anti-Age', nameEn: 'Anti Age Filler',  desc: 'Zategnutost, obnova i mladalački sjaj. Intenzivan anti-age filer sa hijaluronom i kolagenskim stimulatorima.'  },
    { name: 'Duboka Hidratacija', nameEn: 'Hydrating filler',  desc: 'Molekularna voda za ćelije. Dubinska hidratacija. Volumen. Ravnoteža.'  },
    { name: 'Za Akne', nameEn: 'Acne Filler',  desc: 'Balans bez isušivanja. Precizna terapija za akne, sebum i upale.'  },
    { name: 'Eye Rescue', nameEn: 'Eye Rescue Filler',  desc: 'Osvežen pogled bez podočnjaka i otoka. Intenzivna nega za regiju oko očiju.'  },
    { name: 'Skin Relief', nameEn: 'Skin Relief Filler',  desc: 'Brza pomoć za osetljivu i reaktivnu kožu. Umirenje, regeneracija i dubinska hidratacija.'  },
];

const fillersEn = [
    { name: 'Vitamin Bomb', nameEn: 'Winner Filler',   desc: 'A filler-like effect without needles. Volume, hydration, and a youthful glow in a single serum.'   },
    { name: 'Anti-Age', nameEn: 'Anti Age Filler',   desc: 'Firmness, renewal, and a youthful glow. An intensive anti-age filler with hyaluronic acid and collagen stimulators.'    },
    { name: 'Deep Hydration', nameEn: 'Hydrating Filler',   desc: 'Molecular water for your cells. Deep hydration. Volume. Balance.'   },
    { name: 'Acne Filler', nameEn: 'Acne Filler',  desc: 'Balance without drying. A precise treatment for acne, sebum, and inflammation.'  },
    { name: 'Eye Rescue', nameEn: 'Eye Rescue Filler',   desc: 'A refreshed look without dark circles and puffiness. Intensive care for the eye area.'   },
    { name: 'Skin Relief', nameEn: 'Skin Relief Filler',  desc: 'Quick relief for sensitive and reactive skin. Soothing, regeneration, and deep hydration.'    },
];

const stepsSr = [
    { n: '01', title: 'Cleanser', desc: 'Losion čisti kožu i skida šminku' },
    { n: '02', title: 'Liberty', desc: 'Enzimski piling otvara pore' },
    { n: '03', title: 'Oasis Serum', desc: 'Serum štiti kožu od pritiska' },
    { n: '04', title: 'Fileri', desc: 'Aplikacija 20 minuta — čarobni štapić' },
    { n: '05', title: 'Oasis Mask', desc: 'Maska 15 minuta dubinskog delovanja' },
    { n: '06', title: 'Oasis Cream', desc: 'Završna krema, odlična podloga' },
];
const stepsEn = [
    { n: '01', title: 'Cleanser', desc: 'Cleanses skin and removes makeup' },
    { n: '02', title: 'Liberty', desc: 'Enzyme peel opens pores' },
    { n: '03', title: 'Oasis Serum', desc: 'Serum protects skin from air pressure' },
    { n: '04', title: 'Fillers', desc: 'Application 20 minutes — magic wand' },
    { n: '05', title: 'Oasis Mask', desc: 'Mask 15 minutes of deep action' },
    { n: '06', title: 'Oasis Cream', desc: 'Finishing cream, excellent makeup base' },
];

export default function WinnerFileriPage() {
    const { lang } = useLanguage();
    const fillers = lang === 'sr' ? fillersSr : fillersEn;
    const steps = lang === 'sr' ? stepsSr : stepsEn;

    const T = {
        sr: {
            heroTag: "Revolucionarni tretman · Ossigenoterapia",
            heroTitleLine1: "Winner",
            heroTitleLine2: "Fileri",
            heroSubtitle: "100% prirodni hijaluronski fileri bez igala",
            heroBody: "Revolucionaran tretman koji kombinuje prirodne hijaluronske filere sa terapijom kiseonikom. Efekat je odmah vidljiv — prirodne supstance brže prodiru, bolje se razgrađuju i daju trajni rezultat.",
            heroCta1: "Pogledaj set",
            heroCta2: "Zakažite tretman",
            formulasTag: "Šest formulacija",
            formulasTitle: "Šest različitih filera",
            formulasBody: "Svaki filer ima posebnu namenu. Kombinujte ih prema potrebi — prvi naneseni ima i najveći efekat.",
            protocolTitle: "Protokol tretmana",
        },
        en: {
            heroTag: "Revolutionary treatment · Ossigenoterapia",
            heroTitleLine1: "Winner",
            heroTitleLine2: "Fillers",
            heroSubtitle: "100% natural hyaluronic fillers without needles",
            heroBody: "A revolutionary treatment combining natural hyaluronic fillers with oxygen therapy. Results are immediately visible — natural substances penetrate faster, break down better and give lasting results.",
            heroCta1: "View the set",
            heroCta2: "Book a treatment",
            formulasTag: "Six formulations",
            formulasTitle: "Six different fillers",
            formulasBody: "Each filler has a specific purpose. Combine them as needed — the first applied has the greatest effect.",
            protocolTitle: "Treatment protocol",
        },
    }[lang];

    return (
        <>
            {/* Hero */}
            <section className="relative min-h-screen flex items-center bg-[#0A0A0A] overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/proizvodi/set-za-filere.jpg"
                        alt="Magic Crystals Winner Fileri"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        className="opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="max-w-2xl">
                        <Reveal>
                            <span className="text-[#A07848] text-[11px] tracking-[0.3em] uppercase font-medium mb-6 block" style={{ fontFamily: 'var(--font-inter)' }}>{T.heroTag}</span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h1 className="text-white font-light uppercase tracking-[0.08em] leading-none mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem,6vw,5.5rem)' }}>
                                {T.heroTitleLine1}<br />
                                <span style={{ background: 'linear-gradient(135deg, #C4956A 0%, #8B6340 50%, #C4956A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{T.heroTitleLine2}</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-white/60 text-2xl italic font-light mb-10" style={{ fontFamily: 'var(--font-cormorant)' }}>{T.heroSubtitle}</p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p className="text-white/50 text-base font-light leading-relaxed mb-12 max-w-lg" style={{ fontFamily: 'var(--font-inter)' }}>{T.heroBody}</p>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <GoldButton href="/proizvodi/set-za-filere" variant="gold" size="lg">{T.heroCta1}</GoldButton>
                                <GoldButton href="/kontakt" variant="outline" size="lg">{T.heroCta2}</GoldButton>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 6 Fillers grid */}
            <section className="bg-[#111] py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20">
                        <Reveal>
                            <span className="text-[#A07848] text-[11px] tracking-[0.3em] uppercase font-medium mb-4 block" style={{ fontFamily: 'var(--font-inter)' }}>{T.formulasTag}</span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-[#F5F0E8] font-light uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,4vw,3rem)' }}>{T.formulasTitle}</h2>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="text-[#8A8A8A] text-base font-light mt-4 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>{T.formulasBody}</p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fillers.map((filler, i) => (
                            <Reveal key={filler.name} delay={i * 0.08}>
                                <div className="bg-[#0A0A0A] border border-[#A07848]/25 hover:border-[#A07848]/50 p-8 group transition-all duration-300 h-full hover:shadow-md">
                                    <div className="flex items-start justify-between mb-6">
                                        <span className="text-[#A07848]/30 text-xs tracking-[0.3em]" style={{ fontFamily: 'var(--font-inter)' }}>0{i + 1}</span>
                                        
                                    </div>
                                    <h3 className="text-[#F5F0E8] text-2xl font-light uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>{filler.name}</h3>
                                    <p className="text-[#A07848] text-[11px] tracking-wider mb-4" style={{ fontFamily: 'var(--font-inter)' }}>{filler.nameEn}</p>
                                    <div className="h-[1px] w-8 bg-[#A07848]/50 group-hover:w-full mb-5 transition-all duration-500" />
                                    <p className="text-[#8A8A8A] text-sm font-light leading-relaxed mb-4" style={{ fontFamily: 'var(--font-inter)' }}>{filler.desc}</p>
                                    
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Protocol steps */}
            <section className="bg-[#0A0A0A] py-24 lg:py-32">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20">
                        <Reveal>
                            <h2 className="text-[#F5F0E8] font-light uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,4vw,3rem)' }}>{T.protocolTitle}</h2>
                        </Reveal>
                    </div>
                    <div className="space-y-0">
                        {steps.map((step, i) => (
                            <Reveal key={step.n} delay={i * 0.1}>
                                <div className="flex items-center gap-8 py-6 border-b border-[#A07848]/20 group hover:bg-[#111] px-4 transition-colors duration-300 -mx-4">
                                    <span className="text-[#A07848]/30 text-3xl font-light w-12 shrink-0" style={{ fontFamily: 'var(--font-cormorant)' }}>{step.n}</span>
                                    <div className="flex-1">
                                        <h3 className="text-[#F5F0E8] text-xl font-light uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-cormorant)' }}>{step.title}</h3>
                                        <p className="text-[#6A6A6A] text-sm font-light" style={{ fontFamily: 'var(--font-inter)' }}>{step.desc}</p>
                                    </div>
                                    <div className="w-6 h-[1px] bg-[#A07848]/30 group-hover:bg-[#A07848] transition-colors duration-300" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner />
        </>
    );
}
