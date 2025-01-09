import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage'
import Admin from './pages/Admin'
import About from './pages/About'
import Shop from './pages/Shop'
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
					<Route path='shop' element={<Shop />} />
					<Route path='contact' element={<Contact />} />
					<Route path='enteringOrders' element={<EnteringOrders />} />
					<Route path='searchingOrders' element={<SearchingOrders />}>
						<Route path='cities' element={<p>Formularz do wpisania miasta</p>}
						/>
						<Route path='waste' element={<p>Listbox z rodzajami odpadów</p>} />
						<Route path='company' element={<p>Lista dostępnych firm</p>}/>
						</Route>
					<Route path='register' element={<Register />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
			
		</>
	)
}

export default App
