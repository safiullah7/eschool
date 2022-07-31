import i18n from "i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18n.use(HttpApi).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: false,
		keySeparator: false,
    backend: {
      loadPath: "/assets/languages/{{ns}}/{{lng}}.json",
    },
		ns: ["Home", "Login", "SignUp", "Reset"],
		interpolation: {
			escapeValue: false,
			formatSeparator: ",",
		},
		react: {
			useSuspense: false,
		},
		
})

export default i18n;