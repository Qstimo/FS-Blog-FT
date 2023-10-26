import React from 'react'
import s from './postImg.module.scss'

type TImgPost = {
    imageUrl: string | undefined
}

export const ImgPost: React.FC<TImgPost> = ({ imageUrl }) => {
    if (!imageUrl) return null
    return (
        <img className={s.img} src={`http://localhost:4444${imageUrl}`} alt="" />

    )
}

