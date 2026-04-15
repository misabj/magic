import { Reveal } from "@/components/ui/Reveal";
import GoldButton from "@/components/ui/GoldButton";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaBanner() {
    const { lang } = useLanguage();
    const T = {
        sr: {
            tag: "Kontaktirajte nas",
            titleLine1: "Spremni za",
            titleLine2: "Transformaciju?",
            body: "Kontaktirajte nas za konsultacije, porudžbinu ili informacije o tretmanima. Tu smo za vas.",
            cta1: "Pošaljite poruku",
            cta2: "+381 64 001 5113",
        },
        en: {
            tag: "Contact us",
            titleLine1: "Ready for",
            titleLine2: "Transformation?",
            body: "Contact us for consultations, orders or information about treatments. We are here for you.",
            cta1: "Send a message",
            cta2: "+381 64 001 5113",
        },
    }[lang];

    return (
        <section className="relative py-24 lg:py-36 bg-[#0A0A0A] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(160,120,72,0.08) 0%, transparent 70%)" }} />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A07848]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A07848]/40 to-transparent" />

            <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                <Reveal>
                    <span className="text-[#A07848] text-[11px] tracking-[0.3em] uppercase font-medium mb-6 block" style={{ fontFamily: 'var(--font-inter)' }}>{T.tag}</span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="text-white font-light uppercase tracking-[0.1em] leading-tight mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
                        {T.titleLine1}<br />
                        <span className="text-gradient-gold">{T.titleLine2}</span>
                    </h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-white/50 text-base font-light leading-relaxed mb-12 max-w-lg mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>{T.body}</p>
                </Reveal>
                <Reveal delay={0.3}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <GoldButton href="/kontakt" variant="gold" size="lg">{T.cta1}</GoldButton>
                        <GoldButton href="tel:+381640015113" variant="ghost" size="lg" external>{T.cta2}</GoldButton>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
