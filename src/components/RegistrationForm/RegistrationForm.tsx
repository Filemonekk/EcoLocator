import { useState } from 'react'
import Button from '../Button/Button'
import styles from './RegistrationForm.module.scss'

type AuthMode = 'Sign Up' | 'Login'
interface RegistrationFormProps {
	className?: string
}

type FormData = {
	companyName?: string
	companyId?: string
	city: string
	zipCode?: string
	email: string
	password: string
	confirmPassword?: string
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ className }) => {
	const [authMode, setAuthMode] = useState<AuthMode>('Sign Up')
	const [formData, setFormData] = useState<FormData>({
		companyName: '',
		companyId: '',
		city: '',
		zipCode: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const [isSubmitted, setIsSubmitted] = useState(false)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setErrorMessage(null)

		if (authMode === 'Sign Up' && formData.password !== formData.confirmPassword) {
			setErrorMessage('Passwords do not match!')
			return
		}

		const apiUrl = 'https://api.airtable.com/v0/apprwDaolBP4tPVEu/USERS'
		const APIKEY = import.meta.env.VITE_AIRTABLE_APIKEY

		if (!APIKEY) {
			setErrorMessage('API KEY is missing. Check your .env file.')
			return
		}

		const requestBody = {
			records: [
				{
					fields: {
						'Company Name': formData.companyName,
						'Company ID': formData.companyId,
						City: formData.city,
						'Zip Code': formData.zipCode,
					},
				},
			],
		}

		try {
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${APIKEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(requestBody),
			})

			if (!response.ok) {
				const errorResponse = await response.json()
				throw new Error(errorResponse.error?.message || 'Failed to submit data')
			}

			setIsSubmitted(true)
			setFormData({
				companyName: '',
				companyId: '',
				city: '',
				zipCode: '',
				email: '',
				password: '',
				confirmPassword: '',
			})
		} catch (error) {
			setErrorMessage('Error submitting data. Please try again.')
			console.error('Submission error:', error)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.text}>{authMode}</div>
			</div>
			{isSubmitted && (
				<div className={styles.successMessage}>
					{authMode === 'Sign Up' ? 'Thank you! User successfully registered.' : 'Login successful!'}
				</div>
			)}
			{errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
			<form onSubmit={handleSubmit} className={`${styles.formStyle} ${className || ''}`}>
				{authMode === 'Sign Up' && (
					<>
						<label htmlFor='companyName'>Company name</label>
						<input
							id='companyName'
							type='text'
							name='companyName'
							value={formData.companyName}
							onChange={handleInputChange}
						/>
						<label htmlFor='companyId'>Company ID</label>
						<input
							id='companyId'
							type='number'
							name='companyId'
							value={formData.companyId}
							onChange={handleInputChange}
						/>
						<label htmlFor='city'>City</label>
						<input id='city' type='text' name='city' value={formData.city} onChange={handleInputChange} />
						<label htmlFor='zipCode'>Zip-Code</label>
						<input id='zipCode' type='number' name='zipCode' value={formData.zipCode} onChange={handleInputChange} />
					</>
				)}
				<label htmlFor='email'>Email</label>
				<input id='email' type='email' name='email' value={formData.email} onChange={handleInputChange} />
				<label htmlFor='password'>Password</label>
				<input id='password' type='password' name='password' value={formData.password} onChange={handleInputChange} />
				{authMode === 'Sign Up' && (
					<>
						<label htmlFor='confirmPassword'>Confirm Password</label>
						<input
							id='confirmPassword'
							type='password'
							name='confirmPassword'
							value={formData.confirmPassword}
							onChange={handleInputChange}
						/>
					</>
				)}
				<Button type='submit' label={authMode === 'Sign Up' ? 'Register' : 'Login'} />
			</form>
			<div className={styles.switchMode}>
				{authMode === 'Sign Up' ? (
					<p>
						Already have an account?{' '}
						<span onClick={() => setAuthMode('Login')} className={styles.link}>
							Login here
						</span>
					</p>
				) : (
					<p>
						Don't have an account?{' '}
						<span onClick={() => setAuthMode('Sign Up')} className={styles.link}>
							Register here
						</span>
					</p>
				)}
			</div>
		</div>
	)
}

export default RegistrationForm
