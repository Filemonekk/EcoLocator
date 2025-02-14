import PageNav from '../../components/PageNav/PageNav'
import Footer from '../../components/Footer/Footer'
import './HomePage.scss'
import { Link } from 'react-router-dom'
{
	/*import HeroImage from '../components/HeroImage/HeroImage'*/
}

const HomePage: React.FC = () => {
	return (
		<>
			<PageNav />
			<main className='homepage'>
				<section className='section'>
					<h1>Let's clean the world</h1>
					<h2>
						Join the movement for a cleaner planet! Report waste for disposal or find materials for recycling -
						together, we reduce waste, protect nature, and build a sustainable future.
					</h2>
					<div className='button-section'>
						<Link to='/searchingOrders' className='cta'>
							Search for Orders
						</Link>
						<Link to='/enteringOrders' className='cta'>
							Add order
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default HomePage
