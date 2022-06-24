import { Avatar } from '@mui/material'
import { SetStateAction, useContext, useEffect, useState } from 'react'
import CustomerService from '../../../services/CustomerService'
import { CustomerListBox, List, ListItem, MiniCustomer, MiniCustomerDetails } from './style'
import ICustomer from '../interfaces/ICustomer'
import { CustomerContext, CustomerContextType } from '../contexts/CustomerContext'

export default function CustomerList() {
	const service = new CustomerService()

	const [customers, setCustomers] = useState<ICustomer[]>([])
	const { customer, setCustomer } = useContext(CustomerContext) as CustomerContextType

	const getInitialData = async () => {
		const data = await service.getAll()
		setCustomers(data)
	}

	useEffect(() => {
		getInitialData()
	}, [])

	useEffect(() => {
		console.log('entrou', customer)
		if (customer) {
			setCustomers((prev: ICustomer[]) => {
				return prev.map((c: ICustomer) => {
					if (c._id === customer._id) {
						return customer
					}
					return c
				})
			})
		}
	}, [customer])

	return (
		<CustomerListBox>
			<List>
				{customers &&
					customers.map((customerItem: ICustomer, key: number) => (
						<ListItem key={key}>
							<MiniCustomer
								active={customerItem === customer}
								onClick={() => (customer ? setCustomer(null) : setCustomer(customerItem))}
							>
								<Avatar alt={customerItem.name} src={customerItem.userImage} />
								<MiniCustomerDetails>
									<p>{customerItem.name}</p>
									<span>{customerItem.email}</span>
								</MiniCustomerDetails>
							</MiniCustomer>
						</ListItem>
					))}
			</List>
		</CustomerListBox>
	)
}
