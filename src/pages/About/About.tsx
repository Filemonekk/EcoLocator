import PageNav from '../../components/PageNav/PageNav'
import styles from './About.module.scss'
import ecoImage from '/img/tree1280.jpg'

const About: React.FC = () => {
	return (
		<>
			<PageNav />
			<section className={styles.section}>
				<h1>
					Make waste a thing of the past – report, recycle, and connect with eco-conscious partners to build a cleaner,
					greener world.
				</h1>
				<img src={ecoImage} alt='Eco-friendly recycling' className={styles.aboutImage} />

				<p>
					At EcoLocator, we believe that protecting the planet starts with sustainable solutions for waste management.
					Our platform connects businesses, organizations, and individuals with trusted waste disposal partners, making
					recycling and waste utilization easier and more accessible than ever.
				</p>
				<p>
					Whether you have waste to dispose of or are looking for recyclable materials to support your business, we
					bring both worlds together in one seamless, eco-friendly solution. By fostering collaboration, we reduce
					landfill waste, lower environmental impact, and encourage responsible resource use.
				</p>
				<p>
					Our mission is simple: to promote environmental sustainability through innovation and cooperation. Together,
					we can minimize waste, protect natural ecosystems, and create a greener future for generations to come.
				</p>
				<p>
					Join us on this journey toward a cleaner world. Let’s turn waste into opportunity and make a lasting
					difference!
				</p>
			</section>
		</>
	)
}

export default About
