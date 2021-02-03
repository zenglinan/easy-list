import React from 'react'
import UserBar from './UserBar'

const mockState = {
  currentUserAvatar: 'https://profile-photo.s3.cn-north-1.amazonaws.com.cn/files/avatar/50668/MTAxMzM3NjAzMXhib2xibDMy/avatar.png?v=6c7b05a43e1ee3032c1b778af852c75e',
  currentUsername: '大头'
}

const UserBarContainer = () => {
	return (
		<div className="user-bar">
			<UserBar
        avatar={mockState.currentUserAvatar}
        username={mockState.currentUsername}
			/>
		</div>
	)
}

export default UserBarContainer