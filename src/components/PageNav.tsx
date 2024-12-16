import { Link } from 'react-router-dom'

function PageNav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='About'>About</Link>
				</li>
				<li>
					<Link to='Contact'>Contact</Link>
				</li>
				<li>
					<Link to='Admin'>Admin</Link>
				</li>
			</ul>
		</nav>
	)
}

export default PageNav
