import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './PageNav.scss'

function PageNav() {
	return (
		<nav className='navbar'>
			<ul className='ul-container'>
				<li>
					<NavLink to='/About'>About</NavLink>
				</li>
				<li>
					<NavLink to='/Shop'>Shop</NavLink>
				</li>
				<Logo />
				<li>
					<NavLink to='/Register'>Register/Login</NavLink>
				</li>
				<li>
					<NavLink to='/Contact'>Contact</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default PageNav
