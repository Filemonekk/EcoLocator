import PageNav from '../components/PageNav/PageNav'
import './HomePage.scss'
import { Link } from 'react-router-dom'
{
	/*import HeroImage from '../components/HeroImage/HeroImage'*/
}

const HomePage: React.FC = () => {
	return (
		<main className='homepage'>
			<PageNav />
			<section className='section'>
				{/*} <HeroImage
			imageUrl='/img/HeroImage1920.jpg' 
			altText='ECO image' 
			headingTitle="Let's clean the world" 
		  />*/}
				<h1>Let's clean the world</h1>
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
