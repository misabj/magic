import { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import GoldButton from '@/components/ui/GoldButton';
import { useLanguage } from '@/context/LanguageContext';

function FacebookIcon() {
    return <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
function YoutubeIcon() {
    return <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>;
}
function InstagramIcon() {
    return <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>;
}

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const { lang } = useLanguage();

    const T = {
        sr: {
            nameLabel: 'Ime i prezime', emailLabel: 'Email adresa', phoneLabel: 'Telefon (opciono)',
            messageLabel: 'Poruka', submitBtn: 'Pošaljite poruku',
            successTitle: 'Poruka poslata', successBody: 'Javicemo Vam se u najkracem roku. Hvala na poverenju.',
        },
        en: {
            nameLabel: 'Full name', emailLabel: 'Email address', phoneLabel: 'Phone (optional)',
            messageLabel: 'Message', submitBtn: 'Send message',
            successTitle: 'Message sent', successBody: 'We will get back to you shortly. Thank you for your trust.',
        },
    }[lang];

    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

    if (submitted) {
        return (
            <div className="border border-[#A07848]/30 p-12 text-center">
                <div className="w-12 h-12 border border-[#A07848] mx-auto mb-6 flex items-center justify-center">
                    <span className="text-[#A07848] text-xl">✓</span>
                </div>
                <h3 className="text-[#F5F0E8] text-2xl font-light uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>{T.successTitle}</h3>
                <p className="text-[#6A6A6A] text-sm font-light" style={{ fontFamily: 'var(--font-inter)' }}>{T.successBody}</p>
            </div>
        );
    }

    const fields = [
        { name: 'name', label: T.nameLabel, type: 'text', required: true },
        { name: 'email', label: T.emailLabel, type: 'email', required: true },
        { name: 'phone', label: T.phoneLabel, type: 'tel', required: false },
    ];

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {fields.map((field) => (
                <div key={field.name}>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-[#6A6A6A] mb-2" style={{ fontFamily: 'var(--font-inter)' }}>{field.label}</label>
                    <input
                        type={field.type}
                        required={field.required}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={e => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                        className="w-full bg-transparent border-b border-[#A07848]/30 focus:border-[#A07848] py-3 text-[#F5F0E8] text-sm font-light placeholder:text-[#aaa] transition-colors outline-none"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    />
                </div>
            ))}
            <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-[#6A6A6A] mb-2" style={{ fontFamily: 'var(--font-inter)' }}>{T.messageLabel}</label>
                <textarea
                    required rows={5}
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-transparent border-b border-[#A07848]/30 focus:border-[#A07848] py-3 text-[#F5F0E8] text-sm font-light placeholder:text-[#aaa] transition-colors outline-none resize-none"
                    style={{ fontFamily: 'var(--font-inter)' }}
                />
            </div>
            <GoldButton type="submit" variant="gold" size="md" className="w-full sm:w-auto">{T.submitBtn}</GoldButton>
        </form>
    );
}

export default function KontaktPage() {
    const { lang } = useLanguage();
    const T = {
        sr: {
            tag: "Stupite u kontakt",
            title: "Kontakt",
            addrLabel: "Adresa",
            emailLabel: "Email",
            telLabel: "Telefon",
            followLabel: "Pratite nas",
        },
        en: {
            tag: "Get in touch",
            title: "Contact",
            addrLabel: "Address",
            emailLabel: "Email",
            telLabel: "Phone",
            followLabel: "Follow us",
        },
    }[lang];

    return (
        <section className="min-h-screen bg-[#0A0A0A] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-16">
                    <Reveal>
                        <span className="text-[#A07848] text-[11px] tracking-[0.3em] uppercase font-medium mb-4 block" style={{ fontFamily: 'var(--font-inter)' }}>{T.tag}</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-[#F5F0E8] font-light uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem,5vw,4rem)' }}>{T.title}</h1>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16">
                    <Reveal delay={0.1}>
                        <ContactForm />
                    </Reveal>

                    <div>
                        <Reveal delay={0.2}>
                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-9 h-9 border border-[#A07848]/30 flex items-center justify-center shrink-0 mt-0.5">
                                        <MapPin size={14} strokeWidth={1.5} className="text-[#A07848]" />
                                    </div>
                                    <div>
                                        <p className="text-xs tracking-widest uppercase text-[#A07848] mb-1" style={{ fontFamily: 'var(--font-inter)' }}>{T.addrLabel}</p>
                                        <p className="text-[#8A8A8A] text-sm font-light leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>Paunova 24<br />11000 Beograd, Srbija</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-9 h-9 border border-[#A07848]/30 flex items-center justify-center shrink-0">
                                        <Mail size={14} strokeWidth={1.5} className="text-[#A07848]" />
                                    </div>
                                    <div>
                                        <p className="text-xs tracking-widest uppercase text-[#A07848] mb-1" style={{ fontFamily: 'var(--font-inter)' }}>{T.emailLabel}</p>
                                        <a href="mailto:magiccrystals@hotmail.com" className="text-[#8A8A8A] hover:text-[#A07848] text-sm font-light transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>magiccrystals@hotmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-9 h-9 border border-[#A07848]/30 flex items-center justify-center shrink-0">
                                        <Phone size={14} strokeWidth={1.5} className="text-[#A07848]" />
                                    </div>
                                    <div>
                                        <p className="text-xs tracking-widest uppercase text-[#A07848] mb-1" style={{ fontFamily: 'var(--font-inter)' }}>{T.telLabel}</p>
                                        <a href="tel:+381640015113" className="text-[#8A8A8A] hover:text-[#A07848] text-sm font-light transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>+381 64 001 5113</a>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="border-t border-[#A07848]/25 pt-8">
                                <p className="text-xs tracking-widest uppercase text-[#A07848] mb-4" style={{ fontFamily: 'var(--font-inter)' }}>{T.followLabel}</p>
                                <div className="flex items-center gap-3">
                                    {[
                                        { href: "https://www.facebook.com/magiccrystalskozmetika/", Icon: FacebookIcon },
                                        { href: "https://www.youtube.com/channel/UCMYQAId1KmsIK8vXEysf6SA", Icon: YoutubeIcon },
                                        { href: "https://www.instagram.com/p/Bp7yA50APRy/", Icon: InstagramIcon },
                                    ].map(({ href, Icon }) => (
                                        <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                                            className="w-9 h-9 border border-[#A07848]/30 flex items-center justify-center text-[#6A6A6A] hover:text-[#A07848] hover:border-[#A07848] transition-all">
                                            <Icon />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
