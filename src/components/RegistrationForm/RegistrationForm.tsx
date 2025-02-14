import { useState } from 'react'
import Button from '../Button/Button'
import styles from './RegistrationForm.module.scss'

interface RegistrationFormProps {
	className?: string // Opcjonalny className
}

type FormData = {
	companyName?: string
	companyId?: string
	city: string
	zipCode?: string
	registrationPassword?: string
	confirmRegistrationPassword?: string
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ className }) => {
	const [formData, setFormData] = useState<FormData>({
		companyName: '',
		companyId: '',
		city: '',
		zipCode: '',
		registrationPassword: '',
		confirmRegistrationPassword: '',
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

		if (formData.registrationPassword !== formData.confirmRegistrationPassword) {
			setErrorMessage('Passowords do not match!')
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
				registrationPassword: '',
				confirmRegistrationPassword: '',
			})
		} catch (error) {
			setErrorMessage('Error submitting data. Please try again.')
			console.error('Submission error:', error)
		}
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Register</h1>
			{isSubmitted && <div className={styles.successMessage}>Thank you! User successfully registered</div>}
			{errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
			<form onSubmit={handleSubmit} className={`${styles.formStyle} ${className || ''}`}>
				<label htmlFor='companyName'>Company name</label>
				<input
					id='companyName'
					type='text'
					name='companyName'
					value={formData.companyName}
					onChange={handleInputChange}
				/>
				<label htmlFor='number'>Company ID</label>
				<input id='number' type='number' name='companyId' value={formData.companyId} onChange={handleInputChange} />
				<label htmlFor='text'>City</label>
				<input id='text' type='text' name='city' value={formData.city} onChange={handleInputChange} />
				<label htmlFor='zipCode'>Zip-Code</label>
				<input id='zipCode' type='number' name='zipCode' value={formData.zipCode} onChange={handleInputChange} />
				<label htmlFor='password'>Password</label>
				<input
					id='password'
					type='password'
					name='registrationPassword'
					value={formData.registrationPassword}
					onChange={handleInputChange}
				/>
				<label htmlFor='confirmPassword'>Confirm Password</label>
				<input
					id='confirmPassword'
					type='password'
					name='confirmRegistrationPassword'
					value={formData.confirmRegistrationPassword}
					onChange={handleInputChange}
				/>
				<Button type='submit' label='Register' />
			</form>
		</div>
	)
}

export default RegistrationForm
