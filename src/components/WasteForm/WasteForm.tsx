import { useState, ChangeEvent, FormEvent } from 'react'
import styles from './WasteForm.module.scss'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

interface WasteFormProps {
	className?: string
}

type WasteData = {
	description?: string
	wasteType?: string
	companyName?: string
	companyID?: string
	address?: string
	city?: string
	zip?: string
	files?: File[]
}

const WasteForm: React.FC<WasteFormProps> = () => {
	const [formData, setFormData] = useState<WasteData>({
		description: '',
		wasteType: '',
		companyName: '',
		companyID: '',
		address: '',
		city: '',
		zip: '',
		files: [],
	})

	const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
	}

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const selectedFiles = Array.from(event.target.files || [])
			setFormData(prevData => ({
				...prevData,
				files: selectedFiles,
			}))
		}
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setErrorMessage(null)

		const apiUrl = 'https://api.airtable.com/v0/apprwDaolBP4tPVEu/WASTE'
		const APIKEY = import.meta.env.VITE_AIRTABLE_APIKEY

		const requestBody = {
			records: [
				{
					fields: {
						Description: formData.description,
						'Type of waste': formData.wasteType,
						City: formData.city,
						'Company Name': formData.companyName,
						'Company ID': formData.companyID,
						Address: formData.address,
						ZipCode: formData.zip,
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
				description: '',
				wasteType: '',
				address: '',
				city: '',
				zip: '',
				files: [],
			})
		} catch (error) {
			setErrorMessage('Error submitting data. Please try again.')
			console.error('Submission error:', error)
		}
	}

	return (
		<div className={styles.container}>
			<Form className={styles.form} onSubmit={handleSubmit}>
				{errorMessage && <p className={styles.error}>{errorMessage}</p>}
				{isSubmitted && <p className={styles.success}>Form submitted successfully!</p>}

				<Row className='mb-3'>
					<Form.Group as={Col} controlId='wasteType'>
						<Form.Label>Type of waste</Form.Label>
						<Form.Select
							className={styles.formSelect}
							value={formData.wasteType}
							name='wasteType'
							onChange={handleChange}
							required>
							<option value='...'>...</option>
							<option value='Paper'>Paper</option>
							<option value='Glass'>Glass</option>
							<option value='Bio-waste'>Bio-waste</option>
							<option value='Hazardous waste'>Hazardous waste</option>
							<option value='Expired medicines and chemicals'>Expired medicines and chemicals</option>
							<option value='Used batteries and accumulators'>Used batteries and accumulators</option>
							<option value='Used tires'>Used tires</option>
							<option value='Textile and clothing waste'>Textile and clothing waste</option>
						</Form.Select>
					</Form.Group>

					<Form.Group as={Col} controlId='description'>
						<Form.Label>Description</Form.Label>
						<Form.Control
							type='text'
							name='description'
							placeholder='Describe the waste'
							value={formData.description}
							onChange={handleChange}
							required
						/>
					</Form.Group>
				</Row>

				<Form.Group className='mb-3' controlId='address'>
					<Form.Label>Address</Form.Label>
					<Form.Control
						placeholder='1234 Main St'
						name='address'
						value={formData.address}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Row className='mb-3'>
					<Form.Group as={Col} controlId='city'>
						<Form.Label>City</Form.Label>
						<Form.Control value={formData.city} name='city' onChange={handleChange} required />
					</Form.Group>

					<Form.Group as={Col} controlId='zip'>
						<Form.Label>Zip Code</Form.Label>
						<Form.Control value={formData.zip} name='zip' onChange={handleChange} required />
					</Form.Group>

					<Form.Group as={Col} controlId='companyName'>
						<Form.Label>Company Name</Form.Label>
						<Form.Control value={formData.companyName} name='companyName' onChange={handleChange} required />
					</Form.Group>

					<Form.Group controlId='files' className='mb-3'>
						<Form.Label>Upload Photos</Form.Label>
						<Form.Control type='file' multiple onChange={handleFileChange} />
					</Form.Group>
				</Row>

				<Button variant='primary' type='submit' className={styles.submitButton}>
					Submit Waste Report
				</Button>
			</Form>
		</div>
	)
}

export default WasteForm
