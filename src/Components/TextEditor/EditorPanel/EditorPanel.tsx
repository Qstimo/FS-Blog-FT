import React from "react";
import { useEditor } from "../../../hooks/useEditor";
import { useEditorApi } from "../../Context/TextEditorContext";
import s from './editorPanel.module.scss'
import cn from 'classnames'
import { Editor } from "draft-js";
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from "../config";

export type EditorPanelProps = {
    className: string;
}
const EditorPanel: React.FC<EditorPanelProps> = ({ className }) => {
    const { state, onChange } = useEditorApi();

    return (
        <div className={cn(s.editorPanel, className)}>
            <Editor
                placeholder="Введите ваш текст"
                editorState={state}
                onChange={onChange}
                blockRenderMap={BLOCK_RENDER_MAP}
                customStyleMap={CUSTOM_STYLE_MAP}
            ></Editor>
        </div>
    )
}

export default EditorPanel