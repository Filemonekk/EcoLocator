import { Link } from 'react-router-dom'
import './Logo.scss'

function Logo() {
	return (
		<div className='logo-container'>
			<Link to='/'>
				<img src='/img/updated_logo.png' alt='EcoLocator logo' />
			</Link>
		</div>
	)
}

export default Logo
