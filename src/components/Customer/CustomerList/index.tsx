import { Avatar } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import CustomerService from '../../../services/CustomerService'
import { AddNewButtom, CustomerListBox, List, ListItem, MiniCustomer, MiniCustomerDetails } from './style'
import ICustomer from '../interfaces/ICustomer'
import { CustomerContext, CustomerContextType } from '../contexts/CustomerContext'
import EmptyList from '../EmptyList'
import Button from '../../common/Button'
import { GrAdd } from 'react-icons/gr'
import { useTranslation } from 'react-i18next'

export default function CustomerList() {
	const service = new CustomerService()

	const [customers, setCustomers] = useState<ICustomer[]>([])
	const { customer, setCustomer, setCreate, create, deleteCustomer, setDeleteCustomer } = useContext(CustomerContext) as CustomerContextType
	const { t } = useTranslation()

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

				if (deleteCustomer) {
					const id = deleteCustomer._id
					setDeleteCustomer(null)
					setCustomer(null)
					return prev.filter((c: ICustomer) => c._id !== id)
				}

				return prev.map((c: ICustomer) => {
					if (c._id === customer._id) {
						return customer
					}
					return c
				})
			})
		}
	}, [customer, deleteCustomer])

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
					<Button startIcon={<GrAdd />} id='addNew' name={t('customer.list.add.button')} onClick={handleAddNew} />
				</AddNewButtom>
			)}
		</>
	)
}
