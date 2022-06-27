import { useContext } from 'react'
import EmptyListAnimate from '../../Animations/EmptyListAnimate'
import Button from '../../common/Button'
import { CustomerContext, CustomerContextType } from '../contexts/CustomerContext'
import { EmptyMessage } from './style'
import { useTranslation } from 'react-i18next'

export default function EmptyList() {
	const { setCreate } = useContext(CustomerContext) as CustomerContextType
	const { t } = useTranslation()

	return (
		<EmptyMessage>
			<EmptyListAnimate />
			<h1>{t('customer.list.empty.title')}</h1>
			<span>{t('customer.list.empty.description')}</span>
			<Button name={t('customer.list.empty.button')} color='#1232a1' textColor='#fff' marginTop='20px' onClick={() => setCreate(true)} />
		</EmptyMessage>
	)
}
