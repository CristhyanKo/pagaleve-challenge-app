import AppRoutes from '../routes'
import { GlobalStyle } from './style'

export default function Bootstrap() {
	return (
		<>
			<GlobalStyle />
			<AppRoutes />
		</>
	)
}
