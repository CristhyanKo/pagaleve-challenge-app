import { Avatar } from '@mui/material'
import { LanguageOption, LanguageSelectorBox } from './style'
import { useTranslation } from 'react-i18next'

export default function LanguageSelector() {
	const { i18n } = useTranslation()

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language)
	}

	return (
		<LanguageSelectorBox>
			<LanguageOption
				onClick={() => {
					changeLanguage('ptBr')
				}}
			>
				<Avatar
					className={`${i18n.language === 'ptBr' ? 'active' : ''}`}
					alt='PT-BR'
					src={'https://thumbs.dreamstime.com/t/transi%C3%A7%C3%A3o-com-bandeira-brasileira-129757211.jpg'}
				/>
			</LanguageOption>

			<LanguageOption
				onClick={() => {
					changeLanguage('en')
				}}
			>
				<Avatar
					className={`${i18n.language === 'en' ? 'active' : ''}`}
					alt='EN'
					src={'https://static.cloud-boxloja.com/lojas/wyfyg/produtos/ee738912-66f9-4f5d-9e1f-8b48bbe63287.jpg'}
				/>
			</LanguageOption>
		</LanguageSelectorBox>
	)
}
