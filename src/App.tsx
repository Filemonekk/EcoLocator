import React, { useState } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import Admin from './pages/Admin/Admin'
import About from './pages/About/About'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact/Contact'
import EnteringOrders from './pages/EnteringOrders/EnteringOrders'
import SearchingOrders from './pages/SearchingOrders/SearchingOrders'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Register/Register'
import PrivateRoute from './routes/PrivateRoute'
import AdminLogin from './components/AdminLogin/AdminLogin'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
		},
	},
})

const router = createHashRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <PageNotFound />,
	},
	{
		path: 'about',
		element: <About />,
	},
	{
		path: 'shop',
		element: <Shop />,
	},
	{
		path: 'contact',
		element: <Contact />,
	},
	{
		path: 'enteringOrders',
		element: <EnteringOrders />,
	},
	{
		path: 'searchingOrders',
		element: <SearchingOrders />,
		children: [
			{
				index: true,
				element: <p>List</p>,
			},
			{
				path: 'cities',
				element: <p>Formularz do wpisania miasta</p>,
			},
			{
				path: 'waste',
				element: <p>Listbox z rodzajami odpadów</p>,
			},
			{
				path: 'company',
				element: <p>Lista dostępnych firm</p>,
			},
		],
	},
	{
		path: 'register',
		element: <Register />,
	},
	{
		path: '*',
		element: <PageNotFound />,
	},
	{
		path: 'admin',
		element: <PrivateRoute />, // Sprawdza autoryzację
		children: [{ index: true, element: <Admin /> }],
	},
])

const App: React.FC = () => {
	const [showLogin, setShowLogin] = useState(false)
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<RouterProvider router={router}>
				{/* Modal logowania */}
				<button onClick={() => setShowLogin(true)}>Logowanie Admina</button>
				<AdminLogin show={showLogin} handleClose={() => setShowLogin(false)} />
			</RouterProvider>
		</QueryClientProvider>
	)
}

export default App
