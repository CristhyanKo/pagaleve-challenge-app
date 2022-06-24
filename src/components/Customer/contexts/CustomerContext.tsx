import { createContext, useState } from 'react'
import ICustomer from '../interfaces/ICustomer'

export type CustomerContextType = {
	customer: ICustomer | null
	setCustomer: (customer: ICustomer | null) => void
}

export const CustomerContext = createContext<CustomerContextType | null>(null)

const CustomerProvider = ({ children }: { children: React.ReactNode }) => {
	const [customer, setCustomer] = useState<ICustomer | null>(null)

	return <CustomerContext.Provider value={{ customer, setCustomer }}>{children}</CustomerContext.Provider>
}

export default CustomerProvider
