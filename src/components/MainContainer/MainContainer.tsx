import React from 'react'
import MainContent from '../MainContent'
import MainSidebar from '../MainSidebar'

const MainContainer = () => {
	return (
		<div className="main-container">
			<MainSidebar />
			<MainContent />
		</div>
	)
}

export default MainContainer