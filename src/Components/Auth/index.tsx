import React from 'react'


import s from './auth.module.scss'
import Button from '../../Ui/Button';

import { useInput, useValidForm } from '../../hooks/validation';
import ValidationErorrs from '../VlidationErorrs';
import Avatar from '../../Img/avatar';




const Auth: React.FC = () => {

    const email = useInput('', { isEmpty: true, IsEmail: true, });
    const password = useInput('', { isEmpty: true, minLength: 6 })


    const valid = useValidForm([...email.errorsArray, ...password.errorsArray,]);




    const onSubmit = () => {
        const data = {
            email: email.value,
            password: password.value
        }
        console.log(data)

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
            <label htmlFor="">
                <ValidationErorrs array={password.stringErorr} />
                <input value={password.value} onBlur={e => password.onBlur(e)} onChange={e => password.onChange(e)} type="password" required placeholder='******' />
            </label>
            <Button disabled={!valid} children='Авторизация' />
        </form>

    )
}

export default Auth