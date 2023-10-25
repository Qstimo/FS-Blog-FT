import React from 'react'
import { EditorState } from 'draft-js'
import s from './formatBtn.module.scss'
import { IconType } from '../../../uikit/icons/iconType';
import Icon from '../../../uikit/icons';

type TProps = {
    isActive?: boolean,
    onToggle: (style: string) => void,
    size?: string,
    style: string,
    typeIcon: string | IconType;

}

export const FormatBtn: React.FC<TProps> = ({
    isActive,
    onToggle,
    size,
    style,
    typeIcon,
}) => {
    return (
        <div className={s.FormatButton}
            onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
                event.preventDefault();
                onToggle?.(style)
            }}
        >
            <button className={s.btn}
                data-testid="test-icon-button"
            >
                <Icon type={typeIcon} />
            </button>
        </div>
    )
}

