import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from '../pages/404'
import Index from '../pages/home'

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Index />} />
			</Routes>
		</BrowserRouter>
	)
}
