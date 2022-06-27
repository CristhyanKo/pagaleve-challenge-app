import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJson from './locales/en.json'
import ptBrJson from './locales/ptBr.json'

i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: enJson,
		},
		ptBr: {
			translation: ptBrJson,
		},
	},
})

export default i18n
