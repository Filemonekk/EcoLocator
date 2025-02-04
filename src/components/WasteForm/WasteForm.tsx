import styles from './WasteForm.module.scss'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'


function WasteForm() {
	return (
		<div className={styles.container}>
			<Form className={styles.form}>
				<Row className='mb-3'>
					<Form.Group as={Col} controlId='formDescription'>
						<Form.Label>Description</Form.Label>
						<Form.Control type='text' placeholder='Describe the waste' />
					</Form.Group>

					<Form.Group as={Col} controlId='formWasteType'>
						<Form.Label>Type of waste</Form.Label>
						<Form.Select defaultValue='Choose...'>
							<option>Paper</option>
							<option>Glass</option>
							<option>Bio-waste</option>
							<option>Hazardous waste</option>
							<option>Expired medicines and chemicals</option>
							<option>Used batteries and accumulators</option>
							<option>Used tires</option>
							<option>Textile and clothing waste</option>
							<option>...</option>
						</Form.Select>
					</Form.Group>
				</Row>

				<Form.Group className='mb-3' controlId='formAddress'>
					<Form.Label>Address</Form.Label>
					<Form.Control placeholder='1234 Main St' />
				</Form.Group>

				<Row className='mb-3'>
					<Form.Group as={Col} controlId='formCity'>
						<Form.Label>City</Form.Label>
						<Form.Control />
					</Form.Group>

					<Form.Group as={Col} controlId='formZip'>
						<Form.Label>Zip</Form.Label>
						<Form.Control />
					</Form.Group>

					<Form.Group controlId='formFile' className='mb-3'>
						<Form.Label>Upload Photos</Form.Label>
						<Form.Control type='file' multiple />
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
