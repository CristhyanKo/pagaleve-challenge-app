import * as Yup from 'yup'
import { Avatar } from '@mui/material'
import { Form, Formik } from 'formik'
import Button from '../../common/Buttom'
import Input from '../../common/Input'
import { CustomerDetailBox, CustomerDetails, CustomerImage } from './style'
import { useContext, useState } from 'react'
import { CustomerContext, CustomerContextType } from '../contexts/CustomerContext'
import ICustomer from '../interfaces/ICustomer'
import InputMask from '../../common/InputMasked'
import CustomerService from '../../../services/CustomerService'
import { toast } from 'react-toastify'
import EmptyDetail from '../EmptyDetail'

export default function CustomerDetail() {
	const service = new CustomerService()

	const { customer, setCustomer, create } = useContext(CustomerContext) as CustomerContextType

	const [isLoading, setIsLoading] = useState(false)

	const schema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Email is invalid').required('Email is required'),
		phone: Yup.string().required('Phone is required'),
		userImage: Yup.string(),
	})

	const initialValues: ICustomer = {
		_id: customer?._id || '',
		name: customer?.name || '',
		email: customer?.email || '',
		phone: customer?.phone || '',
		userImage: customer?.userImage || '',
	}

	const handleSubmit = async (values: ICustomer) => {
		setIsLoading(true)
		if (customer && customer._id && !create) {
			await service
				.update(customer._id, values)
				.then(() => {
					toast.success('Customer updated!', {
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					})
					setCustomer(values)
				})
				.catch(() => {
					toast.error('Sorry we had an error.', {
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					})
				})
				.finally(() => {
					setIsLoading(false)
				})
		}

		if (create) {
			delete values._id
			await service
				.store(values)
				.then((data) => {
					toast.success('Customer created!', {
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					})
					setCustomer(data)
				})
				.catch(() => {
					toast.error('Sorry we had an error.', {
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					})
				})
				.finally(() => {
					setIsLoading(false)
				})
		}
	}

	return (
		<CustomerDetailBox>
			{customer || create ? (
				<Formik onSubmit={handleSubmit} validationSchema={schema} initialValues={initialValues} enableReinitialize>
					{({ errors, handleChange, touched, values }) => {
						return (
							<Form noValidate>
								<CustomerImage>
									<Avatar alt={values.name} src={values.userImage} sx={{ width: 150, height: 150 }} />
								</CustomerImage>
								<CustomerDetails>
									<Input
										id='name'
										name='name'
										label='Name'
										width='400px'
										required
										error={touched.name && Boolean(errors.name)}
										helperText={touched.name && errors.name}
										onChange={handleChange}
										value={values.name}
									/>
									<Input
										id='email'
										name='email'
										label='Email'
										width='400px'
										error={touched.email && Boolean(errors.email)}
										helperText={touched.email && errors.email}
										onChange={handleChange}
										value={values.email}
										type='email'
										required
									/>
									<InputMask
										mask='(99) 9 9999-9999'
										maskPlaceholder={' '}
										id='phone'
										name='phone'
										label='Phone'
										width='400px'
										error={touched.phone && Boolean(errors.phone)}
										helperText={touched.phone && errors.phone}
										onChange={handleChange}
										value={values.phone}
										required
									/>
									<Button
										isLoading={isLoading}
										type='submit'
										name={customer ? 'Save' : 'Create'}
										color='#18687E'
										textColor='#fff'
										marginTop='20px'
									/>
								</CustomerDetails>
							</Form>
						)
					}}
				</Formik>
			) : (
				<EmptyDetail />
			)}
		</CustomerDetailBox>
	)
}
