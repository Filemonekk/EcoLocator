import { Link } from 'react-router-dom'
import PageNav from '../components/PageNav'

function HomePage() {
	return (
        <div>
            <PageNav/>
			<h1>Home Page</h1>
			<Link to='/contact'>Contact</Link>
		</div>
	)
}

export default HomePage
