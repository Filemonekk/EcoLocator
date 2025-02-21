import PageNav from '../../components/PageNav/PageNav'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from './SearchingOrders.module.scss'
import Map from '../../components/Map/Map'
import WasteCard from '../../components/WasteCard/WasteCard'
import { WasteRecord } from '../../components/SearchingOrdersTable/SearchigOrdersTable'
import { useState } from 'react'

const SearchingOrders: React.FC = () => {
	const [selectedWaste, setSelectedWaste] = useState<WasteRecord | null>(null)
	return (
		<>
			<PageNav />
			<main className={styles.container}>
				<aside className={styles.sidebar}>
					<Sidebar title='Waste notification list' />
				</aside>
				<section className={styles.content}>
					<div className={styles.map}>
						<Map titlemap='Map' />
					</div>
					<div className={styles.wasteCard}>
						{selectedWaste ? <WasteCard waste={selectedWaste.fields} /> : <p>Wybierz odpad do wyświetlenia</p>}
					</div>
				</section>
			</main>
		</>
	)
}

export default SearchingOrders
