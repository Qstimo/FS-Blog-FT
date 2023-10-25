import React from 'react'
import Avatar from '../../Img/avatar'
import s from './tags.module.scss'
type PTags = {
    tags?: string[],
    isLoading?: boolean
}

const Tags: React.FC<PTags> = ({ tags, isLoading }) => {
    if (isLoading) return <div className="">'Loading...'</div>
    if (!tags) return <div ></div>
    return (
        <div className={s.tags}> {tags.map((tag: string) => <span key={tag} className={s.tag}>{'#' + tag}</span>)} </div>

    )
}

export default Tags