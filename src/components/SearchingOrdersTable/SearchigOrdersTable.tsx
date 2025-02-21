import { useState } from 'react'
import { useAirtableDataWaste } from '../../services/useAirtableWaste'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import styles from './SearchingOrdersTable.module.scss'
import WasteCard from '../WasteCard/WasteCard'

export interface WasteRecord {
	id: string
	fields: {
		'Type of waste'?: string
		Description?: string
		City?: string
		'Company Name'?: string
		Address?: string
		ZipCode?: string
		Files?: { url: string }[]
	}
}

const SearchingOrdersTable: React.FC = () => {
	const { data, isLoading, error } = useAirtableDataWaste()
	const [selectedWaste, setSelectedWaste] = useState<WasteRecord | null>(null)

	if (isLoading) return <p>Loading data...</p>
	if (error) return <p>Error while downloading data...</p>

	return (
		<div className={styles.tableContainer}>
			<Table responsive bordered striped hover>
				<thead>
					<tr>
						<th>Typ odpadu</th>
						<th>Miasto</th>
						<th>Firma</th>
						<th>Akcja</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((record: WasteRecord) => (
						<tr key={record.id}>
							<td>{record.fields['Type of waste'] || 'Brak'}</td>
							<td>{record.fields.City || 'Brak'}</td>
							<td>{record.fields['Company Name'] || 'Brak'}</td>
							<td>
								<Button variant='primary' className={styles.detailsBtn} onClick={() => setSelectedWaste(record)}>
									Więcej
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Modal show={!!selectedWaste} onHide={() => setSelectedWaste(null)} centered>
				<Modal.Body>{selectedWaste && <WasteCard waste={selectedWaste.fields} />}</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={() => setSelectedWaste(null)}>
						Zamknij
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default SearchingOrdersTable
