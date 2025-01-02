import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import EnteringOrders from './pages/EnteringOrders'
import SearchingOrders from './pages/SearchingOrders'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Register'


function App() {
	return (
		<>
			{/*<Heading title={"Let's clean the world"} / >*/}
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='about' element={<About />} />
					<Route path='admin' element={<Admin />} />
					<Route path='contact' element={<Contact />} />
					<Route path='enteringOrders' element={<EnteringOrders />} />
					<Route path='searchingOrders' element={<SearchingOrders />} />
					<Route path='register' element={<Register />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
			
		</>
	)
}

export default App
