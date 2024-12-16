import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import EnteringOrders from './pages/EnteringOrders'
import SerchigOrders from './pages/SerchingOrders'

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
					<Route path='serchigOrders' element={<SerchigOrders />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
