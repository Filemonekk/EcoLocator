import styles from './EnteringOrders.module.scss'
import PageNav from '../components/PageNav/PageNav'
import WasteForm from '../components/WasteForm/WasteForm'

const EnteringOrders: React.FC =() => {
	return (
		<div>
			<PageNav />
			<div className='text'>
				<h1>Please fill the information</h1>
			</div>
			<div className={styles.wasteForm}>
				<WasteForm />
				</div>
		</div>
	)
}

export default EnteringOrders