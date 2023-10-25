import React from 'react'
import s from './comments.module.scss'
import Avatar from '../../Img/avatar'
import { TFetchComments } from '../../Slice/slices/post/types'
import AvatarUrl from '../AvatarUrl'

type TCommentProps = {
    comment: TFetchComments
}

const Comment: React.FC<TCommentProps> = ({ comment }) => {
    return (

        <div className={s.comments}>
            <div className={s.comment}>
                <AvatarUrl avatarUrl={comment.user.avatarUrl} />
                <div className={s.commentBody}> <span>{comment.user.fullName}</span> <p>{comment.text}</p></div>
            </div>
        </div>


    )
}

export default Comment