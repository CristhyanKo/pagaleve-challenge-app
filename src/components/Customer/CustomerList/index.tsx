import { Avatar } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import CustomerService from '../../../services/CustomerService'
import { AddNewButtom, CustomerListBox, List, ListItem, MiniCustomer, MiniCustomerDetails } from './style'
import ICustomer from '../interfaces/ICustomer'
import { CustomerContext, CustomerContextType } from '../contexts/CustomerContext'
import EmptyList from '../EmptyList'
import Button from '../../common/Buttom'
import { GrAdd } from 'react-icons/gr'

export default function CustomerList() {
	const service = new CustomerService()

	const [customers, setCustomers] = useState<ICustomer[]>([])
	const { customer, setCustomer, setCreate, create } = useContext(CustomerContext) as CustomerContextType

	const getInitialData = async () => {
		const data = await service.getAll()
		setCustomers(data)
	}

	useEffect(() => {
		getInitialData()
	}, [])

	useEffect(() => {
		if (customer) {
			setCustomers((prev: ICustomer[]) => {
				if (create) {
					setCreate(false)
					return [...prev, customer]
				}

				return prev.map((c: ICustomer) => {
					if (c._id === customer._id) {
						return customer
					}
					return c
				})
			})
		}
	}, [customer])

	const handleAddNew = () => {
		setCustomer(null)
		setCreate(true)
	}

	const handleSelectCustomer = (customerItem: ICustomer) => {
		setCreate(false)

		if (customer === customerItem) {
			setCustomer(null)
		} else {
			setCustomer(customerItem)
		}
	}

	return (
		<>
			<CustomerListBox>
				{customers.length > 0 ? (
					<>
						<List>
							{customers &&
								customers.map((customerItem: ICustomer, key: number) => (
									<ListItem key={key}>
										<MiniCustomer active={customerItem === customer} onClick={() => handleSelectCustomer(customerItem)}>
											<Avatar alt={customerItem.name} src={customerItem.userImage} />
											<MiniCustomerDetails>
												<p>{customerItem.name}</p>
												<span>{customerItem.email}</span>
											</MiniCustomerDetails>
										</MiniCustomer>
									</ListItem>
								))}
						</List>
					</>
				) : (
					<EmptyList />
				)}
			</CustomerListBox>
			{customers.length > 0 && (
				<AddNewButtom>
					<Button startIcon={<GrAdd />} id='addNew' name='Add Customer' onClick={handleAddNew} />
				</AddNewButtom>
			)}
		</>
	)
}
