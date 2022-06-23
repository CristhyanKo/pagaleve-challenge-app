import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from '../pages/404'
import Home from '../pages/home'

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='*' element={<PageNotFound />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}
