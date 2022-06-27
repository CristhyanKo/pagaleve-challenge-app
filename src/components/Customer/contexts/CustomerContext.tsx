import { createContext, useState } from 'react'
import ICustomer from '../interfaces/ICustomer'

export type CustomerContextType = {
	customer: ICustomer | null
	create: boolean
	deleteCustomer: ICustomer | null
	setDeleteCustomer: (customer: ICustomer | null) => void
	setCreate: (value: boolean) => void
	setCustomer: (customer: ICustomer | null) => void
}

export const CustomerContext = createContext<CustomerContextType | null>(null)

const CustomerProvider = ({ children }: { children: React.ReactNode }) => {
	const [customer, setCustomer] = useState<ICustomer | null>(null)
	const [create, setCreate] = useState(false)
	const [deleteCustomer, setDeleteCustomer] = useState<ICustomer | null>(null)

	return (
		<CustomerContext.Provider value={{ customer, setCustomer, create, setCreate, deleteCustomer, setDeleteCustomer }}>
			{children}
		</CustomerContext.Provider>
	)
}

export default CustomerProvider
