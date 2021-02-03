import React from 'react'
import ContentContainer from '../Content'
import SidebarContainer from '../Sidebar'

const MainContainer = () => {
	return (
		<div className="main-container">
			<SidebarContainer />
			<ContentContainer />
		</div>
	)
}

export default MainContainer