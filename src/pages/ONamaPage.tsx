import { Reveal } from '@/components/ui/Reveal';
import CtaBanner from '@/components/sections/CtaBanner';
import { useLanguage } from '@/context/LanguageContext';

export default function ONamaPage() {
    const { lang } = useLanguage();

    const T = {
        sr: {
            heroTag: "Ko smo mi",
            heroTitle: "O Brendu",
            missionQuote: '"Naša misija je da napravimo kozmetiku koja ne može da se poredi ni sa jednom jer je jedinstvena u svakom pogledu."',
            p1: "Magic Crystals je nastao iz želje da se napravi nešto istinski drugačije. Vodili smo računa da što više supstanci budu iz organskog uzgoja a ostale supstance budu procentualno u preparatima po zakonu EU.",
            p2: "Pakovanja za preparate su dizajnirana i izrađena od vrhunskog kvaliteta i jedinstvena u svetu kozmetike. Jedinstveni smo po eliksiru od kristala koji je sastavni deo svakog proizvoda — eliksir je napravljen uz pomoć američkog aparata koji je jedinstven u svetu po svojim frekvencijama. Ishli smo i korak dalje pa smo u eliksir ubacivali i potencije homeopatije.",
            valuesTitle: "Naši standardi",
            values: [
                { title: "EU standardi", desc: "Svi preparati su ručno izrađeni u laboratoriji sa EU sertifikatom, u staklenoj ambalaži sa pumpicama uvezenim iz Holandije visokog kvaliteta." },
                { title: "Organski uzgoj", desc: "Većina supstanci koje koristimo je iz organskog uzgoja. Strogo vodimo računa da procentualni sastav bude po zakonu EU, bez kompromisa." },
                { title: "Eliksir od kristala", desc: "Jedinstveni u svetu po eliksiru od kristala koji je sastavni deo svakog preparata. Napravljen uz pomoć američkog aparata posebnih frekvencija i potencija homeopatije." },
                { title: "Trajni efekti", desc: "Prirodne supstance odmah po prodiranju u kožu kreću da deluju i daju rezultate. Daje trajne i dugotrajne efekte bez zavisnosti." },
            ],
        },
        en: {
            heroTag: "Who we are",
            heroTitle: "About the Brand",
            missionQuote: '"Our mission is to create cosmetics that cannot be compared to any other because it is unique in every way."',
            p1: "Magic Crystals was born from a desire to create something truly different. We ensure that as many substances as possible come from organic farming, and the remaining substances are in formulations according to EU law.",
            p2: "The product packaging is designed and manufactured with premium quality, unique in the world of cosmetics. We are unique for our crystal elixir, which is an integral part of every product — the elixir is made using an American device that is unique in the world for its frequencies. We went a step further and also infused homeopathic potencies into the elixir.",
            valuesTitle: "Our Standards",
            values: [
                { title: "EU Standards", desc: "All products are handcrafted in an EU-certified laboratory, in glass packaging with pumps imported from the Netherlands." },
                { title: "Organic farming", desc: "Most of the substances we use are from organic farming. We strictly ensure the percentage composition complies with EU law, without compromise." },
                { title: "Crystal Elixir", desc: "Unique in the world for the crystal elixir that is integral to every product. Made with an American device of special frequencies and homeopathic potencies." },
                { title: "Lasting effects", desc: "Natural substances begin to work and produce results immediately upon penetrating the skin. Gives lasting and long-term effects without dependency." },
            ],
        },
    }[lang];

    return (
        <>
            <section className="relative min-h-[60vh] flex items-end bg-[#0A0A0A] overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/proizvodi/set-za-salonsku-upotrebu.jpg"
                        alt="Magic Crystals"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        className="opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20">
                    <Reveal>
                        <span className="text-[#A07848] text-[11px] tracking-[0.3em] uppercase font-medium mb-4 block" style={{ fontFamily: 'var(--font-inter)' }}>{T.heroTag}</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-white font-light uppercase tracking-[0.1em] leading-none" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem,6vw,5rem)' }}>{T.heroTitle}</h1>
                    </Reveal>
                </div>
            </section>

            <section className="bg-[#0A0A0A] py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl">
                        <Reveal>
                            <h2 className="text-white/80 font-light italic leading-relaxed mb-8" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,3.5vw,2.8rem)' }}>{T.missionQuote}</h2>
                        </Reveal>
                        <Reveal delay={0.1}><div className="h-[1px] w-16 bg-[#A07848] mb-8" /></Reveal>
                        <Reveal delay={0.15}>
                            <p className="text-white/55 text-base font-light leading-[1.9] mb-6" style={{ fontFamily: 'var(--font-inter)' }}>{T.p1}</p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-white/55 text-base font-light leading-[1.9]" style={{ fontFamily: 'var(--font-inter)' }}>{T.p2}</p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="bg-[#0A0A0A] py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <Reveal>
                        <h2 className="text-[#F5F0E8] font-light uppercase tracking-[0.1em] mb-16" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,4vw,3rem)' }}>{T.valuesTitle}</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#A07848]/25">
                        {T.values.map((v, i) => (
                            <Reveal key={v.title} delay={i * 0.1}>
                                <div className={"p-10 border-[#A07848]/25 " + (i % 2 === 0 ? "border-r" : "") + " " + (i < 2 ? "border-b" : "")}>
                                    <div className="w-8 h-[1px] bg-[#A07848] mb-6" />
                                    <h3 className="text-[#F5F0E8] text-2xl font-light uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>{v.title}</h3>
                                    <p className="text-[#6A6A6A] text-sm font-light leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>{v.desc}</p>
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
