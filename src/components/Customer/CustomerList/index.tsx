import { Avatar } from '@mui/material'
import { CustomerListBox, List, ListItem, MiniCustomer, MiniCustomerDetails } from './style'

export default function CustomerList() {
	return (
		<CustomerListBox>
			<List>
				<ListItem>
					<MiniCustomer>
						<Avatar alt='test' src='https://mui.com/static/images/avatar/1.jpg' />
						<MiniCustomerDetails>
							<p>John Doe</p>
							<span>jhondoe@email.com</span>
						</MiniCustomerDetails>
					</MiniCustomer>
				</ListItem>
				<ListItem>
					<MiniCustomer active>
						<Avatar alt='test' src='https://mui.com/static/images/avatar/2.jpg' />
						<MiniCustomerDetails>
							<p>John Doe</p>
							<span>jhondoe@email.com</span>
						</MiniCustomerDetails>
					</MiniCustomer>
				</ListItem>
				<ListItem>
					<MiniCustomer>
						<Avatar alt='test' src='https://via.placeholder.com/150' />
						<MiniCustomerDetails>
							<p>John Doe</p>
							<span>jhondoe@email.com</span>
						</MiniCustomerDetails>
					</MiniCustomer>
				</ListItem>
				<ListItem>
					<MiniCustomer>
						<Avatar alt='test' src='https://via.placeholder.com/150' />
						<MiniCustomerDetails>
							<p>John Doe</p>
							<span>jhondoe@email.com</span>
						</MiniCustomerDetails>
					</MiniCustomer>
				</ListItem>
			</List>
		</CustomerListBox>
	)
}
