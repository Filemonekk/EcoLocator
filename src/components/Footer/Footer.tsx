import React, { useState } from 'react'
import AdminLogin from '../AdminLogin/AdminLogin'
import styles from './Footer.module.scss'
import { Button } from 'react-bootstrap'

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear()
	const [showLogin, setShowLogin] = useState(false)

	return (
		<footer className={styles.footer}>
			<div className={styles.footerContener}>
				<div className={styles.adminLogin}>
					<Button variant='light' className={styles.loginButton} onClick={() => setShowLogin(true)}>
						ADMIN
					</Button>
				</div>

				<nav className={styles.socials} aria-label='Footer Social Links'>
					<a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
						Facebook
					</a>
					<a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
						Twitter
					</a>
					<a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
						Instagram
					</a>
				</nav>
			</div>
			<div className={styles.bottomBar}>
				<p>
					&copy; {currentYear} <strong>EcoLocator</strong>. All Rights Reserved.
				</p>
			</div>

			<AdminLogin show={showLogin} handleClose={() => setShowLogin(false)} />
		</footer>
	)
}

export default Footer
