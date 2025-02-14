import { Link } from 'react-router-dom'
import './Logo.scss'
import logo from '/img/updated_logo.png'

function Logo() {
	return (
		<div className='logo-container'>
			<Link to='/'>
				<img src={logo} alt='EcoLocator logo' />
			</Link>
		</div>
	)
}

export default Logo
