import PageNav from '../components/PageNav/PageNav'
import UsersTable from '../components/UsersTable/UsersTable'

const Admin: React.FC =() => {
	return (
		<div>
			<PageNav />
			<div> ADMIN</div>
			<UsersTable/>
		</div>
	)
}

export default Admin
