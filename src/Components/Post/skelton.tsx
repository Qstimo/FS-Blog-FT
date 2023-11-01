import React from "react"
import ContentLoader from "react-content-loader"
import s from './post.module.scss'

const PostSkeleton = () => (
    <ContentLoader
        className={s.skelton}
        speed={4}
        width={'auto'}
        height={'auto'}
        viewBox="0 0 600 500"
        backgroundColor="#e6e6e6"
        foregroundColor="#d0cdcd"
    >
        <rect x="0" y="15" rx="10" ry="10" width="603" height="272" />
        <circle cx="63" cy="332" r="20" />
        <rect x="1" y="370" rx="7" ry="7" width="134" height="19" />
        <rect x="168" y="310" rx="7" ry="7" width="379" height="28" />
        <rect x="277" y="370" rx="2" ry="2" width="143" height="21" />
        <rect x="20" y="417" rx="2" ry="2" width="59" height="22" />
        <rect x="472" y="414" rx="2" ry="2" width="116" height="22" />
        <rect x="248" y="412" rx="2" ry="2" width="51" height="22" />
    </ContentLoader>
)


export default PostSkeleton