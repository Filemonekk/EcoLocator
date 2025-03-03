import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

interface AdminLoginProps {
	show: boolean
	handleClose: () => void
}

const AdminLogin: React.FC<AdminLoginProps> = ({ show, handleClose }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()

		// Mockowane dane do logowania
		const adminEmail = 'admin@example.com'
		const adminPassword = 'admin123'

		if (email === adminEmail && password === adminPassword) {
			localStorage.setItem('admin_logged_in', 'true')
			handleClose()
			navigate('/admin')
		} else {
			setError('Nieprawidłowy email lub hasło')
		}
	}

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Logowanie do Admina</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{error && <p className='text-danger text-center'>{error}</p>}
				<Form onSubmit={handleLogin}>
					<Form.Group className='mb-3'>
						<Form.Label>Email</Form.Label>
						<Form.Control type='email' value={email} onChange={e => setEmail(e.target.value)} required />
					</Form.Group>
					<Form.Group className='mb-3'>
						<Form.Label>Hasło</Form.Label>
						<Form.Control type='password' value={password} onChange={e => setPassword(e.target.value)} required />
					</Form.Group>
					<Button type='submit' variant='primary' className='w-100'>
						Zaloguj się
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	)
}

export default AdminLogin
