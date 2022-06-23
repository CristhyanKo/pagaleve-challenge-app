import { Avatar, TextField } from '@mui/material'
import Button from '../../common/Buttom'
import Input from '../../common/Input'
import { CustomerDetailBox, CustomerDetails, CustomerImage } from './style'

export default function CustomerDetail() {
	return (
		<CustomerDetailBox>
			<CustomerImage>
				<Avatar alt='test' src='https://mui.com/static/images/avatar/2.jpg' sx={{ width: 150, height: 150 }} />
			</CustomerImage>
			<CustomerDetails>
				<Input id='name' name='name' label='Name' width='400px' required />
				<Input id='email' type='email' name='email' label='E-mail' width='400px' />
				<Input id='phone' name='phone' label='Phone' width='400px' />
				<Button name='Save' color='#FE35F1' textColor='#fff' />
			</CustomerDetails>
		</CustomerDetailBox>
	)
}
