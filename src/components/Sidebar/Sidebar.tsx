import { Outlet } from 'react-router-dom';
import styles from './Sidebar.module.scss'
import AppNav from '../AppNav/AppNav';


interface Props {
	title: string;
}

const Sidebar: React.FC<Props> = ({title}) => {
	return (
		<div className={styles.sidebar}>
			<h1> {title}</h1>
			<Outlet />
			<AppNav/>
			<footer className={styles.footer}>
				<p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by EcoLocator</p></footer>
		</div>
	)
}

export default Sidebar