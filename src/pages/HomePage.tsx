import PageNav from '../components/PageNav'

import { Link } from 'react-router-dom'

function HomePage() {
	return (
		<main>
			<PageNav />

			<section>
				<h1>"Let's clean the world"</h1>
				<h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iure dolores est minima quo eum quam
					officiis optio quod aliquam!
				</h2>
				<Link to='/searchingOrders'>Search for Orders</Link>
				<Link to='/enteringOrders'>Add order</Link>
			</section>
		</main>
	)
}

export default HomePage
