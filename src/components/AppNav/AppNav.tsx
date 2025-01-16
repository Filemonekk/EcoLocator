import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './AppNav.module.scss'

const AppNav: React.FC = () => {
	return (
		<nav className={styles.navList}>
			<ul>
				<li>
					<NavLink to='cities'>By Cities</NavLink>
				</li>
				<li>
					<NavLink to='waste'>By WasteType</NavLink>
				</li>
				<li>
					<NavLink to='company'>By Companies</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default AppNav
