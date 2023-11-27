import React from 'react';
import s from './register.module.scss'
import Registration from '../../Components/Register';
import Auth from '../../Components/Auth';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../Slice/slices/auth/authSlice';
import { Link, Navigate } from 'react-router-dom';
import { ParticlesContainer } from '../../Ui/ParticlesContainer/ParticlesContainer';
import Button from '../../Ui/Button';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import  ParticlesContainer } from '../../Ui/ParticlesContainer/ParticlesContainer';






const Register: React.FC = () => {
    const [auth, setAuth] = React.useState(false);
    const isAuth = useSelector(selectIsAuth);
    if (isAuth) {
        return <Navigate to='/' />
    }
    return (<>
        <div className={s.root}>
            <div className={s.btnContainer}>
                <button className={auth ? s.btnActive : ''} onClick={() => setAuth(true)}></button>
                <button className={auth ? '' : s.btnActive} onClick={() => setAuth(false)}></button>
            </div>
            <div className={s.formContainer}>
                {auth
                    ? <Registration />
                    : <Auth />}
            </div>
            <Link className={s.btnHome} to='/' >
                <Button>Продолжить без регистрации</Button>
            </Link>
        </div>
        <div className={s.bk}>
            <ParticlesContainer />
        </div>
    </>)


};

export default Register;
