import React from 'react'
import Avatar from '../../Img/avatar'
import s from './avatar.module.scss'
import { API_URL } from '../../Utils'
type PAvatar = {
    avatarUrl: string | undefined,
    onClick?: () => void,
}

const AvatarUrl: React.FC<PAvatar> = ({ avatarUrl, onClick }) => {
    return (
        <div className={s.avatar} onClick={onClick}>{Boolean(avatarUrl)
            ? <img className={s.image} src={`${API_URL}${avatarUrl}`} alt="avatar" />
            : <Avatar />}</div>

    )
}

export default AvatarUrl