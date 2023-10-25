import React from 'react'
import Avatar from '../../Img/avatar'
import s from './avatar.module.scss'
type PAvatar = {
    avatarUrl: string
}

const AvatarUrl: React.FC<PAvatar> = ({ avatarUrl }) => {
    return (
        <div className={s.avatar}>{Boolean(avatarUrl) ? <img src={`http://localhost:4444${avatarUrl}`} alt="avatar" /> : <Avatar />}</div>

    )
}

export default AvatarUrl