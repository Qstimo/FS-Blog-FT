import React from 'react'
import s from './postImg.module.scss'
import cn from 'classnames'
import { API_URL } from '../../Utils'

type TImgPost = {
    imageUrl: string | undefined
    isFull?: boolean,
    isMicropost?: boolean,
}

export const ImgPost: React.FC<TImgPost> = ({ imageUrl, isFull = false, isMicropost }) => {
    if (!imageUrl) return <div className={s.noImg}></div>
    return (
        <img className={s.img} src={`${API_URL}${imageUrl}`} alt="" />

    )
}

