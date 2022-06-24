import AppRoutes from '../routes'
import { GlobalStyle } from './style'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Bootstrap() {
	return (
		<>
			<GlobalStyle />
			<ToastContainer theme='colored' />
			<AppRoutes />
		</>
	)
}
