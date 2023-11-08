import React from 'react'
import s from './comments.module.scss'
import Avatar from '../../Img/avatar'
import { TFetchComments } from '../../Slice/slices/post/types'
import AvatarUrl from '../AvatarUrl'
import CommentSkeleton from './skelton'
import { dataFormat } from '../../Utils'

type TCommentProps = {
    comment: TFetchComments,
    isLoading?: boolean

}

const Comment: React.FC<TCommentProps> = ({ comment, isLoading }) => {
    if (isLoading) return <CommentSkeleton />
    return (

        <div className={s.comments}>
            <div className={s.comment}>
                <AvatarUrl avatarUrl={comment.user.avatarUrl} />
                <div className={s.commentBody}> <span>{comment.user.fullName}</span> <p className={s.text}>{comment.text}</p></div>
                <span></span>
                <span className={s.data}>{dataFormat(comment.createdAt)}</span>
            </div>
        </div>


    )
}

export default Comment