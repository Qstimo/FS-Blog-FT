import React from "react"
import ContentLoader from "react-content-loader"
import s from './tags.module.scss'

const TagSkeleton = () => (
    <ContentLoader
        speed={3}
        width={60}
        height={18}
        viewBox="0 0 60 18"
        backgroundColor="#e6e6e6"
        foregroundColor="#d0cdcd"

    >
        <rect x="0" y="0" rx="5" ry="5" width="50" height="15" />
    </ContentLoader>
)


export default TagSkeleton