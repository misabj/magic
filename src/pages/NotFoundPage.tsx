import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

export default function NotFoundPage() {
    const { lang } = useLanguage();
    const T = {
        sr: { code: '404', title: 'Stranica nije pronađena', body: 'Stranica koju tražite ne postoji ili je premeštena.', btn: 'Vrati se na početnu' },
        en: { code: '404', title: 'Page not found', body: 'The page you are looking for does not exist or has been moved.', btn: 'Back to home' },
    }[lang];

    return (
        <section className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
            <div className="text-center">
                <p className="text-[#A07848] text-[11px] tracking-[0.3em] uppercase font-medium mb-4" style={{ fontFamily: 'var(--font-inter)' }}>{T.code}</p>
                <h1 className="text-[#F5F0E8] font-light uppercase tracking-[0.1em] mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,4vw,3.5rem)' }}>{T.title}</h1>
                <p className="text-[#6A6A6A] text-sm font-light mb-10 max-w-md mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>{T.body}</p>
                <Link to="/" className="inline-block px-8 py-3 border border-[#A07848] text-[#A07848] text-[11px] tracking-[0.2em] uppercase hover:bg-[#A07848] hover:text-[#0A0A0A] transition-all" style={{ fontFamily: 'var(--font-inter)' }}>{T.btn}</Link>
            </div>
        </section>
    );
}
