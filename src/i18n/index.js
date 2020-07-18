import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en_language from './translation/en';
import vi_language from './translation/vi';
import ja_language from './translation/ja';

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        vi: {
            translations: vi_language
        },
        en: {
            translations: en_language
        },
        ja: {
            translations: ja_language
        },
    },
    lng: "vi",
    fallbackLng: "vi",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;