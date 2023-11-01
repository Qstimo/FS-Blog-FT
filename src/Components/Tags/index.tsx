import React from 'react'
import Avatar from '../../Img/avatar'
import s from './tags.module.scss'
import TagSkeleton from './skelton'
type PTags = {
    tags?: string[],
    isLoading?: boolean
}

const Tags: React.FC<PTags> = ({ tags, isLoading }) => {

    const tagsArray = tags?.filter(tag => tag !== '')


    if (isLoading) return <div className={s.tags}> {[...new Array(5)].map((e, i) => <TagSkeleton key={i} />)}</div >
    if (!tagsArray) return <div ></div>
    return (
        <div className={s.tags}> {tagsArray.map((tag: string) => <span key={tag} className={s.tag}>{'#' + tag}</span>)} </div>

    )
}

export default Tags