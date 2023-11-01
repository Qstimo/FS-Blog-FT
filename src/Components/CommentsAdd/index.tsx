import React, { Dispatch, SetStateAction } from 'react'
import s from './commentAdd.module.scss'
import Button from '../../Ui/Button'
import Avatar from '../../Img/avatar'
import axios from '../../Utils/axios'
import { useInput } from '../../hooks/validation'
import { useNavigate } from 'react-router-dom'
import AvatarUrl from '../AvatarUrl'
import { useSelector } from 'react-redux'
import { selectIsAuth, selectUser } from '../../Slice/slices/auth/authSlice'
import { TFetchComments } from '../../Slice/slices/post/types'
type TComment = {
    id: string | undefined,
    setComments: (data: any) => void,
    comments?: TFetchComments[] | undefined
    send: boolean;
    setSend: Dispatch<SetStateAction<boolean>>;
}
const CommentAdd: React.FC<TComment> = ({ id, setComments, comments, setSend, send }) => {
    const isAuth = useSelector(selectIsAuth)
    const data = useSelector(selectUser)
    const text = useInput('', { isEmpty: true, minLength: 3, })
    const isEdit = false;
    const navigate = useNavigate();

    const handleSubmitComment = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const files = {
                text: text.value,
            };
            const { data } = isEdit
                ? await axios.patch(`/posts/${id}`, files)
                : await axios.post(`/posts/${id}/comments`, files)
            setSend(!send)
            text.setValue('')
        } catch (error) {
            console.warn(error);
            alert('Ошибка загрузки');
        }

    }
    if (!isAuth) {
        return <div className="">Чтобы оставить комментарий необходимо авторизоваться</div>
    }
    return (

        <div className={s.comments}>
            <div className={s.comment}>
                <AvatarUrl avatarUrl={data?.avatarUrl} />
                <div className={s.commentBody}>
                    <span>{data?.fullName}</span>
                    <form onSubmit={handleSubmitComment}>
                        <textarea className={s.textarea} value={text.value} onChange={e => text.onChange(e)} onBlur={e => text.onBlur(e)} maxLength={180} rows={3} name="text" placeholder='Текст комментария ' />
                        <Button children='Отправить' />
                    </form>
                </div>

            </div>
        </div>


    )
}

export default CommentAdd