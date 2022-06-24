import { Grid } from '@mui/material'
import CustomerProvider from '../../Customer/contexts/CustomerContext'
import CustomerDetail from '../../Customer/CustomerDetail'
import CustomerList from '../../Customer/CustomerList'
import PageContainer from '../../PageContainer'
import { CustomerBox } from './style'

export default function Home() {
	return (
		<PageContainer title={'Inicio'}>
			<CustomerBox>
				<CustomerProvider>
					<Grid container spacing={2}>
						<Grid item md={4} sm={12} xs={12}>
							<CustomerList />
						</Grid>
						<Grid item md={8} sm={12} xs={12}>
							<CustomerDetail />
						</Grid>
					</Grid>
				</CustomerProvider>
			</CustomerBox>
		</PageContainer>
	)
}
