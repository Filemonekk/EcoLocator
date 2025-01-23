import { useState } from 'react'
import Button from '../Button/Button'
import styles from './RegistrationForm.module.scss'

interface RegistrationFormProps {
	className?: string // Opcjonalny className
}

type FormData = {
	companyName?: string,
	companyId?: string,
	city: string,
	zipCode?: string,
	registrationPassword?: string,
	confirmRegistrationPassword?: string,
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



	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()


		//console.log("Wysłane dane:", formData);
		if (formData.registrationPassword === formData.confirmRegistrationPassword) {
			console.log('Form submitted:', formData)
			setIsSubmitted(true)
			setFormData({
				companyName: '',
				companyId: '',
				city: '',
				zipCode: '',
				registrationPassword: ''
		})
		}
		//alert(`Zarejestrowano użytkownika: ${formData.companyName}`
	}

  return ( 
    <div className={styles.container}>
		  <h1 className={styles.title}>Register</h1>
		  {isSubmitted && (
				<div className={styles.successMessage}>Thank you! User successfully registered</div>
			)}
		<form onSubmit={handleSubmit} className={`${styles.formStyle} ${className || ''}`}>
			<label htmlFor='companyName'>Company name</label>
        <input
          id='companyName'
          type='text'
          name='companyName'
          value={formData.companyName}
          onChange={handleInputChange} />
			<label htmlFor='number'>Company ID</label>
        <input
          id='number'
          type='number'
          name='companyId'
          value={formData.companyId}
          onChange={handleInputChange} />
			<label htmlFor='text'>City</label>
        <input
          id='text'
          type='text'
          name='city'
          value={formData.city}
          onChange={handleInputChange} />
			<label htmlFor='zipCode'>Zip-Code</label>
        <input
          id='zipCode'
          type='number'
          name='zipCode'
          value={formData.zipCode}
          onChange={handleInputChange} />
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
