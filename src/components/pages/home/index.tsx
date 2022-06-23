import { Grid } from '@mui/material'
import CustomerDetail from '../../Customer/CustomerDetail'
import CustomerList from '../../Customer/CustomerList'
import PageContainer from '../../page/PageContainer'
import { CustomerBox } from './style'

export default function Home() {
	return (
		<PageContainer title={'Inicio'}>
			<CustomerBox>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<CustomerList />
					</Grid>
					<Grid item xs={8}>
						<CustomerDetail />
					</Grid>
				</Grid>
			</CustomerBox>
		</PageContainer>
	)
}
