import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const isAuthenticated = () => {
	return localStorage.getItem('admin_logged_in') === 'true' // Sprawdza status logowania
}

const PrivateRoute: React.FC = () => {
	return isAuthenticated() ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute
