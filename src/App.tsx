import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import ProizvodiPage from '@/pages/ProizvodiPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import WinnerFileriPage from '@/pages/WinnerFileriPage';
import ONamaPage from '@/pages/ONamaPage';
import KontaktPage from '@/pages/KontaktPage';
import NotFoundPage from '@/pages/NotFoundPage';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

export default function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/proizvodi" element={<ProizvodiPage />} />
                        <Route path="/proizvodi/:slug" element={<ProductDetailPage />} />
                        <Route path="/winner-fileri" element={<WinnerFileriPage />} />
                        <Route path="/o-nama" element={<ONamaPage />} />
                        <Route path="/kontakt" element={<KontaktPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </LanguageProvider>
    );
}
