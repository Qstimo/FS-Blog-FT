import React from 'react'
import s from './comments.module.scss'
import Avatar from '../../Img/avatar'
import { TFetchComments } from '../../Slice/slices/post/types'
import AvatarUrl from '../AvatarUrl'
import CommentSkeleton from './skelton'
import { dataFormat } from '../../Utils'
import { RemoveSvg } from '../../Img/svg'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Slice/slices/auth/authSlice'

type TCommentProps = {
    comment: TFetchComments,
    isLoading?: boolean,
    onClick: (id: string) => void

}

const Comment: React.FC<TCommentProps> = ({ comment, isLoading, onClick }) => {
    const userData = useSelector(selectUser)
    const isUser = (userData && userData._id === comment.user._id)
    if (isLoading) return <CommentSkeleton />
    return (

        <div className={s.comments}>
            <div className={s.comment}>
                {/* <div className=""><RemoveSvg id={comment._id} isPost={false} /></div> */}
                {isUser && <div className={s.deleteBtn}><button onClick={() => onClick(comment._id)}></button></div>}
                <AvatarUrl avatarUrl={comment.user.avatarUrl} />
                <div className={s.commentBody}> <span>{comment.user.fullName}</span> <p className={s.text}>{comment.text}</p></div>
                <span></span>
                <span className={s.data}>{dataFormat(comment.createdAt)}</span>
            </div>
        </div>


    )
}

export default Comment