"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Dictionary, type Language } from "@/lib/dictionary";

const STORAGE_KEY = "rasta-language";
const DEFAULT_LANGUAGE: Language = "en";

interface LanguageContextValue {
  language: Language;
  direction: "rtl" | "ltr";
  /** The active language's string tree. */
  translations: Dictionary;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentLanguage(language: Language) {
  const element = document.documentElement;
  element.lang = language;
  element.dir = language === "ar" ? "rtl" : "ltr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  // Restore the saved preference once on mount. We start from the default on
  // both server and first client render to avoid a hydration mismatch, then
  // reconcile to the stored choice here.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") {
      // Intentional post-mount setState: reading localStorage during render
      // would diverge from the server's English markup and break hydration.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(stored);
      applyDocumentLanguage(stored);
    }
  }, []);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyDocumentLanguage(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "ar" ? "en" : "ar");
  }, [language, setLanguage]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction: language === "ar" ? "rtl" : "ltr",
      translations: dictionary[language],
      setLanguage,
      toggleLanguage,
    }),
    [language, setLanguage, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
