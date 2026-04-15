import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "sr" | "en";

interface LangContextType {
    lang: Lang;
    setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LangContextType>({
    lang: "sr",
    setLang: () => { },
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>("sr");

    useEffect(() => {
        try {
            const saved = localStorage.getItem("mc_lang") as Lang | null;
            if (saved === "sr" || saved === "en") setLangState(saved);
        } catch {
            // localStorage not available
        }
    }, []);

    const setLang = (l: Lang) => {
        setLangState(l);
        try {
            localStorage.setItem("mc_lang", l);
        } catch {
            // ignore
        }
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
