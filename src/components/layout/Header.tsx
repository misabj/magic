import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;
    const { lang, setLang } = useLanguage();

    const navLinks = [
        { href: "/", label: lang === "sr" ? "Početna" : "Home" },
        { href: "/proizvodi", label: lang === "sr" ? "Proizvodi" : "Products" },
        { href: "/winner-fileri", label: lang === "sr" ? "Winner Fileri" : "Winner Fillers" },
        { href: "/o-nama", label: lang === "sr" ? "O nama" : "About" },
        { href: "/kontakt", label: lang === "sr" ? "Kontakt" : "Contact" },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const isLight = false;

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#C4956A]/20 shadow-lg"
                : "bg-transparent"
                }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="group relative flex items-center">
                        <img
                            src="/logo.png"
                            alt="Magic Crystals"
                            width={100}
                            height={50}
                            className="object-contain transition-opacity duration-300 group-hover:opacity-80 mix-blend-screen"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`relative text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-300 group ${pathname === link.href
                                    ? isLight ? "text-[#A07848]" : "text-[#C4956A]"
                                    : isLight ? "text-[#333]/70 hover:text-[#111]" : "text-white/70 hover:text-white"
                                    }`}
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#A07848] transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                            </Link>
                        ))}

                        {/* Language switcher */}
                        <div className="flex items-center gap-1 ml-4 pl-4">
                            <button
                                onClick={() => setLang("sr")}
                                className={`text-[10px] tracking-[0.2em] font-medium transition-all duration-200 ${lang === "sr"
                                    ? isLight ? "text-[#A07848]" : "text-[#C4956A]"
                                    : isLight ? "text-[#333]/40 hover:text-[#333]" : "text-white/40 hover:text-white"
                                    }`}
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >SR</button>
                            <span className={isLight ? "text-[#333]/20" : "text-white/20"}>|</span>
                            <button
                                onClick={() => setLang("en")}
                                className={`text-[10px] tracking-[0.2em] font-medium transition-all duration-200 ${lang === "en"
                                    ? isLight ? "text-[#A07848]" : "text-[#C4956A]"
                                    : isLight ? "text-[#333]/40 hover:text-[#333]" : "text-white/40 hover:text-white"
                                    }`}
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >EN</button>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className={`lg:hidden p-2 transition-colors ${isLight ? "text-[#333] hover:text-[#A07848]" : "text-[#C4956A] hover:text-white"}`}
                        onClick={() => setMenuOpen(true)}
                        aria-label="Otvori meni"
                    >
                        <Menu size={22} strokeWidth={1.5} />
                    </button>
                </div>
            </header>

            {/* Mobile overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-[#0A0A0A]"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A07848] to-transparent origin-left"
                        />

                        <div className="flex flex-col h-full px-8 pt-8 pb-12">
                            <div className="flex items-center justify-between mb-16">
                                <Link to="/" className="flex items-center">
                                    <img src="/logo.png" alt="Magic Crystals" width={110} height={52} className="object-contain mix-blend-screen" />
                                </Link>
                                <button className="text-[#A07848] p-2 hover:text-white transition-colors" onClick={() => setMenuOpen(false)} aria-label="Zatvori meni">
                                    <X size={24} strokeWidth={1.5} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-2 flex-1">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.07 }}
                                    >
                                        <Link
                                            to={link.href}
                                            className={`block py-4 text-2xl font-light uppercase tracking-[0.15em] border-b border-[#A07848]/20 transition-colors duration-200 ${pathname === link.href ? "text-[#C4956A]" : "text-white/80 hover:text-[#C4956A]"}`}
                                            style={{ fontFamily: 'var(--font-cormorant)' }}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Mobile language switcher */}
                            <div className="flex items-center gap-3 pt-8 border-t border-[#A07848]/15">
                                <button onClick={() => setLang("sr")} className={`text-sm tracking-[0.2em] font-medium transition-colors ${lang === "sr" ? "text-[#C4956A]" : "text-white/40 hover:text-white"}`} style={{ fontFamily: 'var(--font-inter)' }}>SR</button>
                                <span className="text-white/20">|</span>
                                <button onClick={() => setLang("en")} className={`text-sm tracking-[0.2em] font-medium transition-colors ${lang === "en" ? "text-[#C4956A]" : "text-white/40 hover:text-white"}`} style={{ fontFamily: 'var(--font-inter)' }}>EN</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
