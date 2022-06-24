import { useContext } from 'react'
import EmptyListAnimate from '../../Animations/EmptyListAnimate'
import Button from '../../common/Buttom'
import { CustomerContext, CustomerContextType } from '../contexts/CustomerContext'
import { EmptyMessage } from './style'

export default function EmptyList() {
	const { setCreate } = useContext(CustomerContext) as CustomerContextType

	return (
		<EmptyMessage>
			<EmptyListAnimate />
			<h1>Looks like you haven't registered any customers yet!</h1>
			<span>Click the button below to register your first customer</span>
			<Button name={'Register New'} color='#1232a1' textColor='#fff' marginTop='20px' onClick={() => setCreate(true)} />
		</EmptyMessage>
	)
}
