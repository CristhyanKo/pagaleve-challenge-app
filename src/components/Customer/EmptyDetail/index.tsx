import EmptyBoxAnimate from '../../Animations/EmptyBoxAnimate/EmptyBoxAnimate'
import { EmptyMessage } from './style'
import { useTranslation } from 'react-i18next'

export default function EmptyDetail() {
	const { t } = useTranslation()
	return (
		<EmptyMessage>
			<EmptyBoxAnimate />
			<span>{t('customer.detail.empty.description')}</span>
		</EmptyMessage>
	)
}
