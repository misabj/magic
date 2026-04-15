import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

function FacebookIcon({ size = 15 }: { size?: number }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
function YoutubeIcon({ size = 15 }: { size?: number }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>;
}
function InstagramIcon({ size = 15 }: { size?: number }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>;
}

const socials = [
    { href: "https://www.facebook.com/magiccrystalskozmetika/", icon: FacebookIcon, label: "Facebook" },
    { href: "https://www.youtube.com/channel/UCMYQAId1KmsIK8vXEysf6SA", icon: YoutubeIcon, label: "YouTube" },
    { href: "https://www.instagram.com/p/Bp7yA50APRy/", icon: InstagramIcon, label: "Instagram" },
];

const footerLinks = [
    { href: "/", labelSr: "Početna" },
    { href: "/proizvodi", labelSr: "Proizvodi" },
    { href: "/winner-fileri", labelSr: "Winner Fileri" },
    { href: "/o-nama", labelSr: "O nama" },
    { href: "/kontakt", labelSr: "Kontakt" },
];

const categoryLinks = [
    { href: "/proizvodi?cat=setovi", labelSr: "Setovi" },
    { href: "/proizvodi?cat=fileri", labelSr: "Fileri" },
    { href: "/proizvodi?cat=kreme-serumi", labelSr: "Kreme i serumi" },
    { href: "/proizvodi?cat=pilinzi-maske", labelSr: "Pilinzi i maske" },
    { href: "/proizvodi?cat=infuzije", labelSr: "Infuzije" },
    { href: "/proizvodi?cat=ulja", labelSr: "Ulja" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] border-t border-[#A07848]/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Link to="/">
                                <img src="/logo.png" alt="Magic Crystals" width={180} height={84} className="object-contain hover:opacity-80 transition-opacity duration-300 mix-blend-screen" />
                            </Link>
                        </div>
                        <p className="text-[#8A8A8A] text-sm leading-relaxed font-light mb-1" style={{ fontFamily: 'var(--font-inter)' }}>
                            100% prirodna kozmetika sa eliksirom od kristala.
                        </p>
                        <p className="text-[#8A8A8A] text-xs leading-relaxed font-light italic mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
                            100% natural cosmetics with crystal elixir.
                        </p>
                        <div className="flex items-center gap-4">
                            {socials.map(({ href, icon: Icon, label }) => (
                                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                    className="w-9 h-9 border border-[#A07848]/30 flex items-center justify-center text-[#8A8A8A] hover:text-[#C4956A] hover:border-[#C4956A] transition-all duration-300">
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase text-[#C4956A] font-medium mb-6" style={{ fontFamily: 'var(--font-inter)' }}>Navigacija / Navigation</h3>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-[#8A8A8A] hover:text-[#C4956A] text-sm font-light transition-colors duration-200" style={{ fontFamily: 'var(--font-inter)' }}>
                                        {link.labelSr}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase text-[#C4956A] font-medium mb-6" style={{ fontFamily: 'var(--font-inter)' }}>Kategorije / Categories</h3>
                        <ul className="space-y-3">
                            {categoryLinks.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-[#8A8A8A] hover:text-[#C4956A] text-sm font-light transition-colors duration-200" style={{ fontFamily: 'var(--font-inter)' }}>
                                        {link.labelSr}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase text-[#C4956A] font-medium mb-6" style={{ fontFamily: 'var(--font-inter)' }}>Kontakt</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={14} className="text-[#A07848] mt-0.5 shrink-0" />
                                <span className="text-[#8A8A8A] text-sm font-light leading-snug" style={{ fontFamily: 'var(--font-inter)' }}>Paunova 24<br />11000 Beograd, Srbija</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={14} className="text-[#A07848] shrink-0" />
                                <a href="mailto:magiccrystals@hotmail.com" className="text-[#8A8A8A] hover:text-[#C4956A] text-sm font-light transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>magiccrystals@hotmail.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={14} className="text-[#A07848] shrink-0" />
                                <a href="tel:+381640015113" className="text-[#8A8A8A] hover:text-[#C4956A] text-sm font-light transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>+381 64 001 5113</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#A07848]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#6A6A6A] text-xs font-light" style={{ fontFamily: 'var(--font-inter)' }}>
                        © {new Date().getFullYear()} Magic Crystals. Sva prava zadržana.
                    </p>
                    <p className="text-[#444] text-xs font-light tracking-widest" style={{ fontFamily: 'var(--font-inter)' }}>
                        EU standardi · Ručna izrada · Beograd
                    </p>
                </div>
            </div>
        </footer>
    );
}
