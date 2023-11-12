import React from "react"
import ContentLoader from "react-content-loader"
import s from './FullPost.module.scss'

const FullPostSkeleton = () => (
    <ContentLoader
        className={s.skeleton}
        speed={4}
        width={'auto'}
        height={'auto'}

        viewBox="0 0 610 750"
        backgroundColor="#e6e6e6"
        foregroundColor="#d0cdcd"

    >
        <rect x="69" y="35" rx="5" ry="5" width="450" height="210" />
        <circle cx="62" cy="285" r="15" />
        <rect x="179" y="268" rx="6" ry="6" width="287" height="10" />
        <rect x="130" y="291" rx="6" ry="6" width="378" height="11" />
        <rect x="226" y="650" rx="6" ry="6" width="74" height="10" />
        <rect x="315" y="650" rx="6" ry="6" width="74" height="10" />
        <rect x="33" y="652" rx="3" ry="3" width="33" height="8" />
        <rect x="457" y="650" rx="6" ry="6" width="101" height="11" />
        <rect x="32" y="380" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="395" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="411" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="426" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="442" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="457" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="473" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="488" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="362" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="523" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="538" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="554" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="569" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="585" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="600" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="616" rx="0" ry="0" width="526" height="10" />
        <rect x="32" y="505" rx="0" ry="0" width="526" height="10" />
        <rect x="30" y="308" rx="6" ry="6" width="65" height="9" />
    </ContentLoader>
)


export default FullPostSkeleton