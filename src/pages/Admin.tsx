import PageNav from '../components/PageNav/PageNav'
import UsersTable from '../components/UsersTable/UsersTable'
import WasteTable from '../components/WasteTable/WasteTable'

const Admin: React.FC =() => {
	return (
		<div>
			<PageNav />
			<div> ADMIN</div>
			<UsersTable />
			<WasteTable/>
		</div>
	)
}

export default Admin
