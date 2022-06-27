import * as Yup from 'yup'
import { Avatar } from '@mui/material'
import { Form, Formik } from 'formik'
import Button from '../../common/Button'
import Input from '../../common/Input'
import { Actions, CustomerDetailBox, CustomerDetails, CustomerImage } from './style'
import { useContext, useState } from 'react'
import { CustomerContext, CustomerContextType } from '../contexts/CustomerContext'
import ICustomer from '../interfaces/ICustomer'
import InputMask from '../../common/InputMasked'
import CustomerService from '../../../services/CustomerService'
import { toast } from 'react-toastify'
import EmptyDetail from '../EmptyDetail'
import { useTranslation } from 'react-i18next'

export default function CustomerDetail() {
	const service = new CustomerService()
	const { t } = useTranslation()

	const { customer, setCustomer, create, setDeleteCustomer } = useContext(CustomerContext) as CustomerContextType
	const [isLoading, setIsLoading] = useState(false)

	const schema = Yup.object().shape({
		name: Yup.string().required(t('customer.detail.input.name.require')),
		email: Yup.string().email(t('customer.detail.input.email.invalid')).required(t('customer.detail.input.email.require')),
		phone: Yup.string().required(t('customer.detail.input.phone.require')),
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
					toast.success(t('customer.toast.update'), {
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
				.catch((error) => {
					toast.error(error.response.data.error, {
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
					toast.success(t('customer.toast.create'), {
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
				.catch((error) => {
					toast.error(error.response.data.error, {
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

	const handleDelete = async () => {
		setIsLoading(true)
		if (customer && customer._id) {
			await service
				.delete(customer._id)
				.then(() => {
					toast.success(t('customer.toast.delete'), {
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					})
					setDeleteCustomer(customer)
				})
				.catch(() => {
					toast.error(t('toast.default.error'), {
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
										label={t('customer.detail.input.name.name')}
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
										label={t('customer.detail.input.email.name')}
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
										label={t('customer.detail.input.phone.name')}
										width='400px'
										error={touched.phone && Boolean(errors.phone)}
										helperText={touched.phone && errors.phone}
										onChange={handleChange}
										value={values.phone}
										required
									/>
									<Actions>
										<Button
											isLoading={isLoading}
											type='submit'
											name={customer ? t('customer.detail.button.save') : t('customer.detail.button.create')}
											color='#18687E'
											textColor='#fff'
											marginTop='20px'
										/>
										{customer && (
											<Button
												className='deleteButton'
												isLoading={isLoading}
												type='button'
												name={t('customer.detail.button.delete')}
												color='#e44834'
												textColor='#fff'
												marginTop='20px'
												onClick={handleDelete}
											/>
										)}
									</Actions>
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
