import React, { ButtonHTMLAttributes, Children } from 'react';
import s from './btn.module.scss'
import { classNames } from '../../Utils/classNames/classNames';
export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean,
    onClick?: () => void,
    theme: ButtonTheme,
    className?: string,
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        className = "",
        disabled,
        children,
        onClick,
        theme
    } = props
    const mods: Record<string, boolean> = {
        [s[theme]]: true,
    }
    return <button
        disabled={disabled}
        onClick={onClick}
        className={classNames(s.btn, mods, [className])}>
        {children}
    </button>

};

export default Button;
