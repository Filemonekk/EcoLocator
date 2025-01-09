import PageNav from '../components/PageNav/PageNav'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from './SearchingOrders.module.scss'
import Map from '../components/Map/Map'


const SearchingOrders: React.FC = () => {
	return (
		<>
			<PageNav />
			<div className={styles.side}>
				<Sidebar title='Formula'/>
				<Map titlemap='Map' />
			</div>
		</>
	)
}

export default SearchingOrders
