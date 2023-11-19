import React from 'react'
import s from './post.module.scss'
import { TFetchPosts } from '../../Slice/slices/post/types'
import { Link } from 'react-router-dom'
import { dataFormat } from '../../Utils'
import AvatarUrl from '../AvatarUrl'
import Tags from '../Tags'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Slice/slices/auth/authSlice'
import { CommentsSvg, ViewsSvg } from '../../Img/svg'
import { ImgPost } from '../../Img/PostImg/PostImg'
import PostSkeleton from './skelton'

type TPost = {
    isLoading?: boolean,
    post?: TFetchPosts

}

const Post: React.FC<TPost> = ({ isLoading, post }) => {

    const formatTitle = (title: string, sum: number) => {
        const string = title.split('');
        if (string.length > sum) {
            return string.splice(0, sum).join('') + '...'
        }
        return title
    }


    const userData = useSelector(selectUser);

    if (isLoading || !post) return <PostSkeleton />;

    return (

        <Link to={`/posts/${post._id}`} >
            <div className={s.post}>

                <div className={s.titleContainer}>
                    {/* <div className={s.user}>
                        <AvatarUrl avatarUrl={post.user.avatarUrl} />
                        <span>{post.user.fullName}</span>
                    </div> */}
                    <div className={s.title}>
                        {post.imageUrl
                            ? <div className={s.title}>
                                <h3 >{formatTitle(post.title, 30)}</h3>
                            </div>
                            : <div className={s.titleFull}>
                                <h3 >{formatTitle(post.title, 30)}</h3>
                            </div>
                        }
                    </div>
                </div>
                <Tags tags={post.tags} />
                <div className={s.img}><ImgPost imageUrl={post.imageUrl} />
                    <p className={s.text}>{formatTitle(post.text, 120)}</p>
                    <div className={s.info}>
                        <span className={s.viewsCount}><ViewsSvg /> {post.viewsCount}</span>
                        <span className={s.comments}><CommentsSvg /> {post.comments.length > 0 && post.comments.length}</span>
                        <span className={s.data}>{dataFormat(post.createdAt)}</span>
                    </div>
                </div>
            </div >
        </Link >

    )
}

export default Post