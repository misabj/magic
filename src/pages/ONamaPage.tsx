import { Reveal } from '@/components/ui/Reveal';
import CtaBanner from '@/components/sections/CtaBanner';
import { useLanguage } from '@/context/LanguageContext';

export default function ONamaPage() {
    const { lang } = useLanguage();

    const T = {
        sr: {
            heroTag: "Ko smo mi",
            heroTitle: "O Brendu - Magic Crystals",
            missionQuote: `U svetu gde lepota često znači brza rešenja, Magic Crystals je nastao iz drugačije filozofije –da prava, dugotrajna lepota dolazi iz balansa, znanja i dubokog razumevanja kože. `,
                p1: `Naš brend nije samo
            kozmetika. To je spoj prirode, nauke i iskustva iz profesionalnih tretmana, razvijen kroz rad u salonima i
direktan kontakt sa klijentima i njihovim stvarnim potrebama.`,
                p2: `
                Naša misija je da ženama vratimo poverenje u svoju kožu –
                bez filtera, bez agresivnih metoda i bez kompromisa.
                Jer prava lepota nije savršena –ona je negovana, zdrava i autentična.`,
            valuesTitle: "Naši standardi",
            values: [
                { title: "Naša filozofija:", desc: ` Verujemo da koža ne traži agresiju – već inteligentan pristup.Zato stvaramo formule koje:
                ✔ poštuju prirodnu strukturu kože
                ✔ obnavljaju, a ne oštećuju
                ✔ daju vidljive rezultate bez kompromisa
                Svaki proizvod razvijen je sa idejom da kožu dovede u ravnotežu, a ne da prikrije problem.` },
                {
                    title: "Snaga formule:", desc: `Magic Crystals proizvodi kombinuju:
                ✔ prirodna biljna ulja i ekstrakte
                ✔ biotehnološke aktivne sastojke
                ✔ napredne dermokozmetičke formule
                Naša posebnost je u tome što proizvodi nisu kreirani samo za kućnu negu, već su deo profesionalnih
                tretmanskih protokola, gde postižu maksimalne rezultate.
                    ` },
                {
                    title: "Rezultati koje vidite i osećate", desc: `Naša kozmetika je osmišljena da:
                ✔ dubinski hidrira i regeneriše
                ✔ poboljša tonus i elastičnost kože
                ✔ deluje anti-age bez invazivnih metoda
                ✔ vrati koži prirodan sjaj i zdrav izgled
                Svaki proizvod ima svoju svrhu – ali zajedno stvaraju kompletan sistem nege.
                    ` },
                {
                    title: "Naš pristup klijentima", desc: ` Ne verujemo u univerzalna rešenja.Svaka koža je drugačija – i zato je naš cilj da pronađemo idealnu
                kombinaciju proizvoda i tretmana za svaku klijentkinju.
                Magic Crystals je tu da pruži:
                ✔ sigurnost
                ✔ kvalitet
                ✔ rezultate koji traju
                ✔ Naša misija
                    ` },
            ],
        },
        en: {
    heroTag: "Who we are",
    heroTitle: "About the Brand - Magic Crystals",
    missionQuote: `In a world where beauty often means quick fixes, Magic Crystals was born from a different philosophy – true, long-lasting beauty comes from balance, knowledge, and a deep understanding of the skin.`,
    p1: `Our brand is not just cosmetics. It is a fusion of nature, science, and experience from professional treatments, developed through work in salons and direct contact with clients and their real needs.`,
    p2: `
    Our mission is to restore women’s confidence in their skin –
    without filters, without aggressive methods, and without compromise.
    Because true beauty is not perfect – it is cared for, healthy, and authentic.`,
    valuesTitle: "Our Standards",
    values: [
        { 
            title: "Our Philosophy:", 
            desc: `We believe that skin does not need aggression – but an intelligent approach. That is why we create formulas that:
            ✔ respect the natural structure of the skin
            ✔ restore rather than damage
            ✔ deliver visible results without compromise
            Each product is developed with the idea of bringing the skin into balance, not masking the problem.` 
        },
        {
            title: "The Power of the Formula:", 
            desc: `Magic Crystals products combine:
            ✔ natural plant oils and extracts
            ✔ biotechnological active ingredients
            ✔ advanced dermocosmetic formulas
            Our uniqueness lies in the fact that the products are not created only for home care, but are part of professional treatment protocols, where they achieve maximum results.`
        },
        {
            title: "Results You Can See and Feel", 
            desc: `Our cosmetics are designed to:
            ✔ deeply hydrate and regenerate
            ✔ improve skin tone and elasticity
            ✔ provide anti-age effects without invasive methods
            ✔ restore the skin’s natural glow and healthy appearance
            Each product has its purpose – but together they create a complete skincare system.`
        },
        {
            title: "Our Approach to Clients", 
            desc: `We do not believe in universal solutions. Every skin is different – which is why our goal is to find the ideal combination of products and treatments for each client.
            Magic Crystals is here to provide:
            ✔ safety
            ✔ quality
            ✔ long-lasting results`
        },
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
