import React, { Children } from 'react';

import s from './btn.module.scss'

type ButtoProps = {
    children: string,
    disabled?: boolean
    onClick?: () => void
}
const Button: React.FC<ButtoProps> = ({ children, onClick, disabled }) => {
    return <button disabled={disabled} onClick={onClick} className={s.btn}>{children}</button>

};

export default Button;
