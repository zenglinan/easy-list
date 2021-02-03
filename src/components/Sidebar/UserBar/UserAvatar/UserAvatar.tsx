import React from 'react'
import { UserAvatar, Avatar } from './style'

interface IUserAvatarProps {
  avatar: string
  username: string
}

const UserBar = (props: IUserAvatarProps) => {
  const { avatar, username } = props

  return (
		<UserAvatar className="user-avatar">
      <Avatar src={avatar} />
      <span>{username}</span>
		</UserAvatar>
	)
}

export default UserBar