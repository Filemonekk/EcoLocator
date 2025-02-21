import Card from 'react-bootstrap/Card'
import styles from './WasteCard.module.scss'

interface WasteCardProps {
	waste: {
		'Type of waste'?: string
		Description?: string
		City?: string
		'Company Name'?: string
		Address?: string
		ZipCode?: string
		Files?: { url: string }[]
	}
}

const WasteCard: React.FC<WasteCardProps> = ({ waste }) => {
	return (
		<Card className={styles.wasteCard}>
			{waste.Files && waste.Files.length > 0 && (
				<Card.Img variant='top' src={waste.Files[0].url} alt='Zdjęcie odpadu' />
			)}
			<Card.Body>
				<Card.Title>{waste['Type of waste'] || 'Nieznany odpad'}</Card.Title>
				<Card.Text>
					<strong>Opis:</strong> {waste.Description || 'Brak opisu'}
				</Card.Text>
				<Card.Text>
					<strong>Miasto:</strong> {waste.City || 'Brak'}
				</Card.Text>
				<Card.Text>
					<strong>Firma:</strong> {waste['Company Name'] || 'Brak'}
				</Card.Text>
				<Card.Text>
					<strong>Adres:</strong> {waste.Address || 'Brak'}, {waste.ZipCode || ''}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default WasteCard
