import * as Yup from 'yup'
import { Avatar } from '@mui/material'
import { Form, Formik } from 'formik'
import Button from '../../common/Buttom'
import Input from '../../common/Input'
import { CustomerDetailBox, CustomerDetails, CustomerImage } from './style'
import { useContext } from 'react'
import { CustomerContext, CustomerContextType } from '../contexts/CustomerContext'
import ICustomer from '../interfaces/ICustomer'
import InputMask from '../../common/InputMasked'

export default function CustomerDetail() {
	const { customer } = useContext(CustomerContext) as CustomerContextType

	const schema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Email is invalid'),
		phone: Yup.string(),
		userImage: Yup.string(),
	})

	const initialValues: ICustomer = {
		name: customer?.name || '',
		email: customer?.email || '',
		phone: customer?.phone || '',
		userImage: customer?.userImage || '',
	}

	return (
		<CustomerDetailBox>
			<Formik onSubmit={(d) => console.log('submiting', d)} validationSchema={schema} initialValues={initialValues}>
				{({ errors, handleChange, touched, values }) => {
					return (
						<Form noValidate>
							<CustomerImage>
								<Avatar alt='test' src='https://mui.com/static/images/avatar/2.jpg' sx={{ width: 150, height: 150 }} />
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
								/>
								<Button type='submit' name='Save' color='#18687E' textColor='#fff' marginTop='20px' />
							</CustomerDetails>
						</Form>
					)
				}}
			</Formik>
		</CustomerDetailBox>
	)
}
