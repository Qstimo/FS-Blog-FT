import React from 'react'
import s from './FullPost.module.scss'
import imgBg from '../../Img/pc_banner.jpg'
import Comment from '../../Components/Comments'
import CommentAdd from '../../Components/CommentsAdd'
import Avatar from '../../Img/avatar'
import { useParams } from 'react-router-dom'
import axios from '../../Utils/axios'
import { TFetchComments, TFetchPosts } from '../../Slice/slices/post/types'
import { dataFormat } from '../../Utils'
import AvatarUrl from '../../Components/AvatarUrl'
import { ImgPost } from '../../Img/PostImg/PostImg'
import { RemoveSvg, UpdateSvg } from '../../Img/svg'

const FullPost: React.FC = () => {
    const { id } = useParams();
    const [data, setData] = React.useState<TFetchPosts>();
    const [comments, setComments] = React.useState<TFetchComments[]>();
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        axios.get(`/posts/${id}`).then((response) => {
            setData(response.data);
            setIsLoading(false)
        }).catch((error) => alert(error));
        axios.get(`/posts/${id}/comments`).then((response) => {
            setComments(response.data);
        }).catch((error) => alert(error));

    }, [])

    if (isLoading || !data) { return <div>loading...</div> }

    return (
        <div className={s.root}>
            <div className={s.post}>
                <div className={s.img}><ImgPost imageUrl={data.imageUrl} /></div>
                <div className={s.patch}>
                    <UpdateSvg />
                    <RemoveSvg />
                </div>
                <div className={s.titleContainer}>
                    <div className={s.user}>
                        <AvatarUrl avatarUrl={data.user.avatarUrl} />
                        <span>{data.user.fullName}</span>
                    </div>
                    <div className={s.title}>
                        <h3 >{data.title}</h3>
                    </div>
                </div>
                <div className={s.text}>{data.text}</div>
                <div className={s.info}>
                    <span className={s.viewsCount}>{data.viewsCount}</span>
                    <div className={s.tags}> {data.tags.map((tag) => <span key={tag} className={s.tag}>{'#' + tag}</span>)} </div>
                    <span className={s.data}>{dataFormat(data.createdAt)}</span>
                </div>
                {data.createdAt !== data.updatedAt && <span className={s.dataUp}>Изменено: {dataFormat(data.updatedAt)}</span>}
            </div>
            {comments && comments.map(item => < Comment comment={item} key={item._id} />)}

            <CommentAdd />
        </div>

    )
}

export default FullPost