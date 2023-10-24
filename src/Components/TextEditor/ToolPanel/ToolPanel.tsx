import React from "react";
import cn from 'classnames'
import { EditorPanelProps } from "../EditorPanel/EditorPanel";
import s from './tool.module.scss'
import { InlineStyle } from "../config";
import { useEditor } from "../../../hooks/useEditor";
import { useEditorApi } from "../../Context/TextEditorContext";

const INLINE_STYLES_CODES = Object.values(InlineStyle);

const ToolPanel: React.FC = () => {

    const { toggleInlineStyle, hasInlineStyle } = useEditorApi();

    return (
        <div className=''>

            {INLINE_STYLES_CODES.map((code) => {
                const onMouseDown = (e: { preventDefault: () => void; }) => {
                    e.preventDefault();
                    toggleInlineStyle(code);
                };

                return (
                    <button
                        key={code}
                        className={cn(
                            s.root,

                        )}
                        onMouseDown={onMouseDown}
                    >
                        {code}
                    </button>
                );
            })}
        </div>
    );
};


export default ToolPanel;