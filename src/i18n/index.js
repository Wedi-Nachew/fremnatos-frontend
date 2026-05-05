import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: { common: {} },
    am: { common: {} },
    ti: { common: {} },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        debug: false,
        ns: ["common"],
        defaultNS: "common",
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
            lookupLocalStorage: "site-language",
        },
        interpolation: { escapeValue: false },
    });

export default i18n;
