import React from 'react'
import UserAvatar from './UserAvatar'
import Search from './Search'

import { UserBarWrapper } from './style'

interface IUserBarProps {
	avatar: string
	username: string
}

const UserBar = (props: IUserBarProps) => {
	const { avatar, username } = props

	return (
		<UserBarWrapper className="user-bar">
			<UserAvatar 
				avatar={avatar}
				username={username}
			/>
			<Search />
		</UserBarWrapper>
	)
}

export default UserBar