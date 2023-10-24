import React from 'react'
import s from './commentAdd.module.scss'
import Button from '../../Ui/Button'
import Avatar from '../../Img/avatar'

const CommentAdd: React.FC = () => {
    return (

        <div className={s.comments}>
            <div className={s.comment}>
                <div className={s.avatar}> <Avatar /><img src='' alt="" /></div>
                <div className={s.commentBody}>
                    <span>Vasiliy Pupkin</span>
                    <form >
                        <textarea maxLength={180} rows={3} name="text" placeholder='Текст комментария ' />
                        <Button children='Отправить' />
                    </form>
                </div>

            </div>
        </div>


    )
}

export default CommentAdd