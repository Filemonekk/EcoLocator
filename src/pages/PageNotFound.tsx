import React from 'react'

import PageNav from '../components/PageNav/PageNav'

const PageNotFound: React.FC = () => {
	return (
		<div>
			<PageNav />
			<h1 className='pageNotFound'>Page not found 😢</h1>
		</div>
	)
}

export default PageNotFound
