import React from 'react';
import s from './register.module.scss'
import Registration from '../../Components/Register';
import Auth from '../../Components/Auth';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../Slice/slices/auth/authSlice';
import { Navigate } from 'react-router-dom';






const Register: React.FC = () => {
    const [auth, setAuth] = React.useState(false);
    const isAuth = useSelector(selectIsAuth);
    if (isAuth) {
        return <Navigate to='/' />
    }
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
