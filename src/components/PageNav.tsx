import { NavLink } from 'react-router-dom'

function PageNav() {
	return (
		<nav>
			<ul>
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
			</ul>
		</nav>
	)
}

export default PageNav
