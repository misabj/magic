import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GoldButton from "@/components/ui/GoldButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { lang } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const img1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const img2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
    const img3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);

    const T = {
        sr: {
            eyebrow: "Prirodna kozmetika · Eliksir od kristala",
            line1: "Magic",
            line2: "Crystals",
            sub: "Nega kože kreirana za one kojima je kvalitet važniji od kompromisa.",
            cta1: "Istraži Proizvode",
            cta2: "Winner Fileri",
            stat1n: "100%", stat1l: "Prirodno",
            stat2n: "30+", stat2l: "Proizvoda",
            stat3n: "EU", stat3l: "Sertifikovano",
        },
        en: {
            eyebrow: "Natural cosmetics · Crystal elixir",
            line1: "Magic",
            line2: "Crystals",
            sub: "Skincare crafted for those who choose quality over compromise.",
            cta1: "Explore Products",
            cta2: "Winner Fillers",
            stat1n: "100%", stat1l: "Natural",
            stat2n: "30+", stat2l: "Products",
            stat3n: "EU", stat3l: "Certified",
        },
    }[lang];

    const ease = [0.22, 1, 0.36, 1] as const;

    return (
        <section ref={sectionRef} className="relative min-h-screen bg-onyx overflow-hidden">

            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold-light/25 to-transparent z-20" />

            {/* ══ ROTATING RING — centered on page, above images ══ */}
            {/* outer div handles position, inner motion.div handles entrance animation */}
            <div
                className="absolute hidden lg:block z-40"
                style={{ left: "50%", top: "50%", width: 240, height: 240, marginLeft: -120, marginTop: -120 }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, delay: 1.1, ease }}
                    style={{ position: "relative", width: "100%", height: "100%" }}
                >
                    {/* spinning ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ position: "absolute", inset: 0 }}
                    >
                        <svg viewBox="0 0 200 200" width="240" height="240">
                            <defs>
                                <path
                                    id="mc-ring"
                                    d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
                                />
                            </defs>
                            <circle cx="100" cy="100" r="76" fill="#0A0A0A" stroke="rgba(196,149,106,0.45)" strokeWidth="0.8" />
                            <text fill="#C4956A" fontSize="9.2" fontFamily="'Inter', sans-serif">
                                <textPath href="#mc-ring" textLength="477" lengthAdjust="spacing">
                                    MAGIC CRYSTALS · MAGIC CRYSTALS ·
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>

                    {/* logo center — absolutely centered inside outer div */}
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                            src="/logo.png"
                            alt="Magic Crystals"
                            width={100}
                            height={100}
                            style={{ objectFit: "contain", opacity: 0.95 }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* ══ GRID ══ */}
            <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] min-h-screen">

                {/* LEFT: text */}
                <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 xl:px-28 py-32 lg:py-24 relative z-10">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="h-px w-10 bg-gold-light shrink-0" />
                        <span
                            className="text-gold-light/75 text-[10px] tracking-[0.32em] uppercase"
                            style={{ fontFamily: "var(--font-inter)" }}
                        >
                            {T.eyebrow}
                        </span>
                    </motion.div>

                    {/* Magic — gold uppercase, smaller */}
                    <div style={{ overflow: "hidden", paddingTop: "0.1em", marginBottom: "0" }}>
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.05, delay: 0.35, ease }}
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "clamp(3rem, 5.5vw, 6rem)",
                                fontWeight: 300,
                                fontStyle: "normal",
                                textTransform: "uppercase",
                                letterSpacing: "0.22em",
                                lineHeight: 1,
                                color: "#A07848",
                                userSelect: "none",
                            }}
                        >
                            {T.line1}
                        </motion.h1>
                    </div>

                    {/* Crystals — white italic, larger, descender room */}
                    <div style={{ overflow: "hidden", paddingTop: "0.05em", paddingBottom: "1.8em", marginTop: "-0.35em", marginBottom: "2rem" }}>
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.05, delay: 0.52, ease }}
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "clamp(5.5rem, 10vw, 11rem)",
                                fontWeight: 300,
                                fontStyle: "italic",
                                letterSpacing: "0.01em",
                                lineHeight: 0.88,
                                color: "#ffffff",
                                userSelect: "none",
                            }}
                        >
                            {T.line2}
                        </motion.h1>
                    </div>

                    {/* Gold divider */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.75, ease }}
                        className="w-20 h-px bg-linear-to-r from-gold-light to-transparent mb-8 origin-left"
                    />

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.88, ease }}
                        className="text-white/55 text-xl font-light max-w-xs leading-relaxed mb-12"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        {T.sub}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 1.02, ease }}
                        className="flex flex-wrap gap-4 mb-16"
                    >
                        <GoldButton href="/proizvodi" variant="gold" size="lg">{T.cta1}</GoldButton>
                        <GoldButton href="/winner-fileri" variant="outlineDark" size="lg">{T.cta2}</GoldButton>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.3 }}
                        className="flex gap-10 md:gap-14"
                    >
                        {[
                            { n: T.stat1n, l: T.stat1l },
                            { n: T.stat2n, l: T.stat2l },
                            { n: T.stat3n, l: T.stat3l },
                        ].map(({ n, l }, i) => (
                            <div key={i}>
                                <div
                                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem", fontWeight: 300, color: "#C4956A", lineHeight: 1 }}
                                    className="mb-1"
                                >
                                    {n}
                                </div>
                                <div
                                    style={{ fontFamily: "var(--font-inter)", fontSize: "9px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.3em" }}
                                    className="uppercase"
                                >
                                    {l}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT: image collage */}
                <div className="relative hidden lg:block" style={{ overflow: "visible" }}>

                    {/* ambient glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "radial-gradient(ellipse 80% 60% at 65% 50%, rgba(196,149,106,0.06) 0%, transparent 70%)" }}
                    />

                    {/* img 1 — tall, top right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.07 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.4, delay: 0.2, ease }}
                        style={{ y: img1Y, boxShadow: "0 24px 80px rgba(0,0,0,0.55)", position: "absolute", top: "7%", right: "7%", width: "55%", overflow: "hidden" }}
                        className="aspect-3/4"
                    >
                        <img src="/proizvodi/set-za-filere.jpg" alt="" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* img 2 — medium, bottom left */}
                    <motion.div
                        initial={{ opacity: 0, y: 36 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, delay: 0.55, ease }}
                        style={{ y: img2Y, boxShadow: "0 16px 56px rgba(0,0,0,0.5)", position: "absolute", bottom: "7%", left: "5%", width: "43%", overflow: "hidden" }}
                        className="aspect-4/5"
                    >
                        <img src="/proizvodi/serum-anti-age.jpg" alt="" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* img 3 — small square, top left */}
                    <motion.div
                        initial={{ opacity: 0, y: -22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }}
                        style={{ y: img3Y, boxShadow: "0 12px 40px rgba(0,0,0,0.45)", position: "absolute", top: "9%", left: "6%", width: "32%", overflow: "hidden" }}
                        className="aspect-square"
                    >
                        <img src="/proizvodi/hidrantna-krema.jpg" alt="" className="w-full h-full object-cover" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9, duration: 1 }}
                className="absolute bottom-9 left-8 md:left-14 lg:left-20 xl:left-28 z-30 flex items-center gap-4"
            >
                <motion.div
                    animate={{ scaleX: [1, 1.7, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-px w-8 bg-gold-light/50 origin-left"
                />
                <span className="text-[9px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
                    scroll
                </span>
            </motion.div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold-light/15 to-transparent" />
        </section>
    );
}
