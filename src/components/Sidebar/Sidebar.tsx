import React from 'react'
import UserBar from './UserBar'

import { SidebarWrapper } from './style'

const Sidebar = () => {
	return (
		<SidebarWrapper className="sidebar-container">
			<UserBar />			
		</SidebarWrapper>
	)
}

export default Sidebar
