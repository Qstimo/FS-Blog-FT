import React from 'react'
import axios from '../../Utils/axios'

import s from './register.module.scss'
import Button from '../../Ui/Button';
import Avatar from '../../Img/avatar';
import { useInput, useValidForm } from '../../hooks/validation';
import ValidationErorrs from '../../Components/VlidationErorrs';
import { useAppDispatch } from '../../Slice/store';
import { fetchRegister } from '../../Slice/slices/auth/authSlice';




const Registration: React.FC = () => {

    const name = useInput('', { isEmpty: true, minLength: 3, });
    const surname = useInput('', { isEmpty: true, minLength: 3, });
    const email = useInput('', { isEmpty: true, IsEmail: true, });
    const password = useInput('', { isEmpty: true, minLength: 6 })
    const valid = useValidForm([...email.errorsArray, ...password.errorsArray, ...surname.errorsArray, ...name.errorsArray]);
    const avatarRef = React.useRef<HTMLInputElement | null>(null)
    const [avatar, setAvatar] = React.useState('');

    const dispatch = useAppDispatch();

    const handleCangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const formData = new FormData();
            const file = e.target.files?.[0];
            if (file) {
                formData.append('image', file);
                const { data } = await axios.post('/uploads', formData);
                setAvatar(data.url);
            }
        } catch (error) {
            alert('Error uploading')
        }
    }

    const onSubmit1 = () => {
        const data = {
            fullName: name.value + ' ' + surname.value,
            email: email.value,
            password: password.value,
            avatarUrl: avatar
        }
        console.log(data)

    }
    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = {
            fullName: name.value + ' ' + surname.value,
            email: email.value,
            password: password.value,
            avatarUrl: avatar
        }
        const data = await dispatch(fetchRegister(value));
        if (!data.payload) {
            alert('Не удалось авторизоваться')
        }
        else if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        }

    }

    return (
        <div> <form onSubmit={onSubmit} className={s.formRegister}>
            <label htmlFor="">
                <div onClick={() => avatarRef.current?.click()} className={s.avatarLoading}>
                    {Boolean(avatar) ? (
                        <><button>delete</button><img src={`http://localhost:4444${avatar}`} alt="uploading img" /></>
                    ) : <Avatar />}

                </div>
                <input ref={avatarRef} onChange={handleCangeFile} type="file" hidden />
            </label>
            <label htmlFor="">
                <ValidationErorrs array={name.stringErorr} />
                <input value={name.value} onBlur={e => name.onBlur(e)} onChange={e => name.onChange(e)} type="text" required placeholder='Имя' />
            </label>
            <label htmlFor="">
                <ValidationErorrs array={surname.stringErorr} />
                <input value={surname.value} onBlur={e => surname.onBlur(e)} onChange={e => surname.onChange(e)} type="text" required placeholder='Фамилия' />
            </label>
            <label htmlFor="email">
                <ValidationErorrs array={email.stringErorr} />
                <input name='email' value={email.value} onBlur={e => email.onBlur(e)} onChange={e => email.onChange(e)} type="email" required placeholder='Почта' />
            </label>
            <label htmlFor="">
                <ValidationErorrs array={password.stringErorr} />
                <input value={password.value} onBlur={e => password.onBlur(e)} onChange={e => password.onChange(e)} type="password" required placeholder='******' />
            </label>
            <Button disabled={!valid} children='Регистрация' />
        </form></div>
    )
}

export default Registration