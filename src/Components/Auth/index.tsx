import React from 'react'


import s from './auth.module.scss'
import Button, { ButtonTheme } from '../../Ui/Button';

import { useInput, useValidForm } from '../../hooks/validation';
import ValidationErorrs from '../VlidationErorrs';
import Avatar from '../../Img/avatar';
import { useAppDispatch } from '../../Slice/store';
import { fetchAuth } from '../../Slice/slices/auth/authSlice';




const Auth: React.FC = () => {
    const email = useInput('', { isEmpty: true, IsEmail: true, });
    const password = useInput('', { isEmpty: true, minLength: 6 })
    const valid = useValidForm([...email.errorsArray, ...password.errorsArray,]);
    const dispatch = useAppDispatch();

    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = {
            email: email.value,
            password: password.value
        }
        const data = await dispatch(fetchAuth(value));
        if (!data.payload) {
            alert('Не удалось авторизоваться')
        }
        else if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        }

    }

    return (
        <form onSubmit={onSubmit} className={s.formRegister}>
            <label htmlFor="">
                <div className={s.avatarLoading}>
                    <Avatar />
                </div>

            </label>
            <label htmlFor="email">
                <ValidationErorrs array={email.stringErorr} />
                <input name='email' value={email.value} onBlur={e => email.onBlur(e)} onChange={e => email.onChange(e)} type="email" required placeholder='Почта' />
            </label>
            <label htmlFor="password">
                <ValidationErorrs array={password.stringErorr} />
                <input value={password.value} onBlur={e => password.onBlur(e)} onChange={e => password.onChange(e)} type="password" required placeholder='******' />
            </label>
            <Button theme={ButtonTheme.OUTLINE} disabled={!valid} children='Авторизация' />
        </form>

    )
}

export default Auth