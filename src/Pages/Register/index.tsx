import React from 'react';
import s from './register.module.scss'
import Registration from '../../Components/Register';
import Auth from '../../Components/Auth';


type valueType = {
    name: string,
    surname: string
    email: string,
    password: string,
    avatarUrl?: string
}



const Register: React.FC = () => {
    const [auth, setAuth] = React.useState(false);

    return <div className={s.root}>
        <div className={s.btnContainer}>
            <button className={auth ? s.btnActive : ''} onClick={() => setAuth(true)}></button>
            <button className={auth ? '' : s.btnActive} onClick={() => setAuth(false)}></button>
        </div>
        {auth
            ? <Registration />
            : <Auth />}
    </div>;


};

export default Register;
