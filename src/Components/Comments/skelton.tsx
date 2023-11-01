import React from "react"
import ContentLoader from "react-content-loader"
import s from './comments.module.scss'

const CommentSkeleton = () => (
    <ContentLoader
        className={s.skelton}
        speed={4}
        width={'auto'}
        height={60}
        viewBox="0 0 1000 60"
        backgroundColor="#e6e6e6"
        foregroundColor="#d0cdcd"

    >
        <circle cx="41" cy="23" r="15" />
        <rect x="70" y="32" rx="0" ry="0" width="500" height="8" />
        <rect x="70" y="11" rx="1" ry="1" width="65" height="9" />
        <rect x="70" y="49" rx="0" ry="0" width="500" height="8" />
    </ContentLoader>
)


export default CommentSkeleton