import type { FC, DOMAttributes } from "react";
import cn from "classnames";
import { memo, useEffect, useRef } from "react";
import { ETextColor, EColorType } from "./types";
import type { IconType } from "./iconType";
import { iconTypes } from "./iconType";
import type { TColor } from "./types";
import "./icon.scss";



const getIcon = (type: string) => iconTypes.get(type);
export const formatToStringWithPx = (value: string | number): string => {
    if (typeof value === "string") return value;
    return value.toString() + "px";
};

interface IProps extends DOMAttributes<HTMLSpanElement> {
    className?: string;
    color?: TColor;
    dataTestId?: string;
    height?: number;
    size?: number;
    type: IconType | string;
    width?: number;
}

const Component: FC<IProps> = ({
    className,
    color = ETextColor.Dark,
    dataTestId = "uikit__icon",
    height,
    width,
    size,
    type,
    ...rest
}) => {
    const iconRef = useRef<HTMLDivElement>(null);
    const mainStyles = cn(`${EColorType.Icon}-${color}`);

    useEffect(() => {
        if (iconRef.current) {
            if (size && !height && !width) {
                iconRef.current.style.setProperty("--icon-height", formatToStringWithPx(size));
                iconRef.current.style.setProperty("--icon-width", formatToStringWithPx(size));
            } else if (!size && height && width) {
                iconRef.current.style.setProperty("--icon-height", formatToStringWithPx(height));
                iconRef.current.style.setProperty("--icon-width", formatToStringWithPx(width));
            }
        }
    }, [height, size, width]);

    return (
        <div
            className={cn("Icon", className, mainStyles)}
            data-testid={dataTestId}
            ref={iconRef}
            {...rest}
        >
            {getIcon(type)}
        </div>
    );
};

export const Icon = memo(Component);