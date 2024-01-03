import React from 'react'
import axios, { API_URL } from '../../Utils/axios'

import s from './register.module.scss'
import Button, { ButtonTheme } from '../../Ui/Button';
import Avatar from '../../Img/avatar';
import { useInput, useValidForm } from '../../hooks/validation';
import ValidationErorrs from '../../Components/VlidationErorrs';
import { useAppDispatch } from '../../Slice/store';
import { fetchRegister, fetchUpdateUser } from '../../Slice/slices/auth/authSlice';
import { TUserData } from '../../Slice/slices/auth/types';




const Registration: React.FC<{ edit?: boolean, data?: TUserData | null, setSwitchUser?: (switchUser: boolean) => void, switchUser?: boolean }> =
    ({ edit, data, setSwitchUser, switchUser = false }) => {

        const name = useInput('', { isEmpty: true, minLength: 3, });
        const surname = useInput('', { isEmpty: true, minLength: 3, });
        const email = useInput('', { isEmpty: true, IsEmail: true, });
        const password = useInput('', { isEmpty: true, minLength: 6 })
        const valid = useValidForm([...email.errorsArray, ...password.errorsArray, ...surname.errorsArray, ...name.errorsArray]);
        const validUp = useValidForm([...surname.errorsArray, ...name.errorsArray]);
        const avatarRef = React.useRef<HTMLInputElement | null>(null)
        const [avatar, setAvatar] = React.useState('');

        const dispatch = useAppDispatch();

        React.useEffect(() => {
            if (edit && data) {
                name.setValue(data?.fullName.split(' ').shift()?.toString() || '');
                surname.setValue(data?.fullName.split(' ').at(-1)?.toString() || '');
                setAvatar(data?.avatarUrl || '')
            }
        }, [edit, data])

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


        const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            const value = {
                fullName: name.value + ' ' + surname.value,
                email: email.value,
                password: password.value,
                avatarUrl: avatar
            }
            const valueUpdate = {
                fullName: name.value + ' ' + surname.value,
                avatarUrl: avatar
            }


            const data = edit
                ? await dispatch(fetchUpdateUser(valueUpdate))
                : await dispatch(fetchRegister(value));

            if (!data.payload) {
                alert('Данные не загрузились')
            }
            else if ('token' in data.payload) {
                window.localStorage.setItem('token', data.payload.token);
            }
            if (edit && setSwitchUser) {
                setSwitchUser(!switchUser);
            }

        }


        return (
            <div> <form onSubmit={onSubmit} className={s.formRegister}>
                <label htmlFor="">
                    <div onClick={() => avatarRef.current?.click()} className={s.avatarLoading}>
                        {Boolean(avatar) ? (
                            <><button className={s.deleteImg}></button><img src={`${API_URL}${avatar}`} alt="uploading img" /></>
                        ) : <Avatar />}

                    </div>
                    <input ref={avatarRef} onChange={handleCangeFile} type="file" hidden />
                </label>
                <label htmlFor="">
                    {<ValidationErorrs array={name.stringErorr} />}
                    <input value={name.value} onBlur={e => name.onBlur(e)} onChange={e => name.onChange(e)} type="text" required={!edit} placeholder='Имя' />
                </label>
                <label htmlFor="">
                    <ValidationErorrs array={surname.stringErorr} />
                    <input value={surname.value} onBlur={e => surname.onBlur(e)} onChange={e => surname.onChange(e)} type="text" required={!edit} placeholder='Фамилия' />
                </label>
                {!edit &&
                    <label htmlFor="email">
                        <ValidationErorrs array={email.stringErorr} />
                        <input name='email' value={email.value} onBlur={e => email.onBlur(e)} onChange={e => email.onChange(e)} type="email" required={!edit} placeholder='Почта' />
                    </label>}
                {!edit &&
                    <label htmlFor="">
                        <ValidationErorrs array={password.stringErorr} />
                        <input value={password.value} onBlur={e => password.onBlur(e)} onChange={e => password.onChange(e)} type="password" required={!edit} placeholder='******' />
                    </label>}
                {
                    edit
                        ? <Button theme={ButtonTheme.OUTLINE} disabled={!validUp} children='Изменить данные' />
                        : <Button theme={ButtonTheme.OUTLINE} disabled={!valid} children='Регистрация' />
                }
            </form></div>
        )
    }

export default Registration