import PageNav from '../components/PageNav/PageNav'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from './SearchingOrders.module.scss'
import Map from '../components/Map/Map'
import WasteCard from '../components/WasteCard/WasteCard'

function SearchingOrders() {
	return (
		<>
			<PageNav />
			<main className={styles.container}>
				<aside className={styles.sidebar}>
					<Sidebar title='Formula' />
				</aside>
				<section className={styles.content}>
					<div className={styles.map}>
						<Map titlemap='Map' />
					</div>
					<div className={styles.wasteCard}>
					<WasteCard />
					</div>
				</section>
			</main>
		</>
	)
}

export default SearchingOrders
