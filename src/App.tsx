import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import EnteringOrders from './pages/EnteringOrders'
import SearchingOrders from './pages/SearchingOrders'
import PageNotFound from './pages/PageNotFound'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='about' element={<About />} />
					<Route path='admin' element={<Admin />} />
					<Route path='contact' element={<Contact />} />
					<Route path='enteringOrders' element={<EnteringOrders />} />
					<Route path='searchingOrders' element={<SearchingOrders />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
