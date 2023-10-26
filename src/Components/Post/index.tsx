import React from 'react'
import s from './post.module.scss'
import imgBg from '../../Img/pc_banner.jpg'
import Avatar from '../../Img/avatar'
import { TFetchPosts } from '../../Slice/slices/post/types'
import { Link } from 'react-router-dom'
import { dataFormat } from '../../Utils'
import AvatarUrl from '../AvatarUrl'
import Tags from '../Tags'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Slice/slices/auth/authSlice'
import { RemoveSvg, UpdateSvg } from '../../Img/svg'
import { ImgPost } from '../../Img/PostImg/PostImg'

type TPost = {
    isLoading?: boolean,
    post?: TFetchPosts

}

const Post: React.FC<TPost> = ({ isLoading = false, post }) => {

    const userData = useSelector(selectUser);

    if (isLoading || !post) return <div></div>;

    return (
        <div className={s.post}>
            <div className={s.img}><ImgPost imageUrl={post.imageUrl} /></div>
            {(userData && userData._id === post.user._id) && <div className={s.patch}>
                <RemoveSvg />
                <UpdateSvg />
            </div>}
            <div className={s.titleContainer}>
                <div className={s.user}>
                    <AvatarUrl avatarUrl={post.user.avatarUrl} />
                    <span>{post.user.fullName}</span>
                </div>
                <div className={s.title}>
                    <Link to={`/posts/${post._id}`} > <h3 >{post.title}</h3></Link>
                    <Tags tags={post.tags} />
                </div>
            </div>

            <div className={s.info}>
                <span className={s.viewsCount}>{post.viewsCount}</span>
                <span className={s.comments}>{post.comments && post.comments.length + ' комментариев'}</span>
                <span className={s.data}>{dataFormat(post.createdAt)}</span>
            </div>
        </div>
    )
}

export default Post