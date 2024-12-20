import { NavLink } from 'react-router-dom'
import Logo from './Logo'

function PageNav() {
	return (
		<nav>
			<ul>
			<Logo/>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/About'>About</NavLink>
				</li>
				<li>
					<NavLink to='/Contact'>Contact</NavLink>
				</li>
				<li>
					<NavLink to='/Admin'>Admin</NavLink>
				</li>
				<li>
					<NavLink to='/Register'>Register</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default PageNav
