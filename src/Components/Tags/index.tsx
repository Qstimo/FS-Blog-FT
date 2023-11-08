import React from 'react'
import Avatar from '../../Img/avatar'
import s from './tags.module.scss'
import TagSkeleton from './skelton'
import { useAppDispatch } from '../../Slice/store'
import { fetchTagsPosts } from '../../Slice/slices/post/postSlice'
type PTags = {
    tags?: string[],
    isLoading?: boolean
}

const Tags: React.FC<PTags> = ({ tags, isLoading }) => {
    const dispatch = useAppDispatch();
    const tagsArray = tags?.filter(tag => tag !== '')
    const handleTagsClick = (tag: string) => {
        dispatch(fetchTagsPosts(tag))
        console.log(tag)
    }

    if (isLoading) return <div className={s.tags}> {[...new Array(5)].map((e, i) => <TagSkeleton key={i} />)}</div >
    if (!tagsArray) return <div ></div>
    return (
        <div className={s.tags}> {tagsArray.map((tag: string) => <span key={tag} onClick={() => handleTagsClick(tag)} className={s.tag}>{'#' + tag}</span>)} </div>

    )
}

export default Tags