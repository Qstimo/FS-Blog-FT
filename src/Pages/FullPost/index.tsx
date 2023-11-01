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
import { RemoveSvg, UpdateSvg, ViewsSvg } from '../../Img/svg'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Slice/slices/auth/authSlice'
import Tags from '../../Components/Tags'
import FullPostSkeleton from './skelton'

const FullPost: React.FC = () => {
    const { id } = useParams();
    const [data, setData] = React.useState<TFetchPosts>();
    const [comments, setComments] = React.useState<TFetchComments[]>();
    const [isLoading, setIsLoading] = React.useState(true);
    const [send, setSend] = React.useState(true);
    const userData = useSelector(selectUser)
    React.useEffect(() => {
        axios.get(`/posts/${id}`).then((response) => {
            setData(response.data);
            setIsLoading(false)
        }).catch((error) => alert(error));
    }, [])

    React.useEffect(() => {
        axios.get(`/posts/${id}/comments`).then((response) => {
            setComments(response.data);
        }).catch((error) => alert(error));

    }, [send])

    if (isLoading || !data) { return <FullPostSkeleton /> }

    return (
        <div className={s.root}>
            <div className={s.post}>
                <div className={s.img}><ImgPost imageUrl={data.imageUrl} /></div>
                {(userData && userData._id === data.user._id) && <div className={s.patch}>
                    <UpdateSvg id={data._id} />
                    <RemoveSvg id={data._id} />
                </div>}
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
                    <span className={s.viewsCount}><ViewsSvg />{data.viewsCount}</span>
                    <Tags tags={data.tags} />
                    {/* <div className={s.tags}> {data.tags.map((tag) => <span key={tag} className={s.tag}>{'#' + tag}</span>)} </div> */}
                    <span className={s.data}>{dataFormat(data.createdAt)}</span>
                </div>
                {dataFormat(data.createdAt) !== dataFormat(data.updatedAt) && <span className={s.dataUp}>Изменено: {dataFormat(data.updatedAt)}</span>}
            </div>
            <CommentAdd setSend={setSend} send={send} comments={comments} setComments={setComments} id={id} />
            {comments && comments.map(item => <Comment comment={item} key={item._id} />)}


        </div>

    )
}

export default FullPost