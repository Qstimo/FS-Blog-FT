import React from 'react'
import { EditorState } from 'draft-js'
import { TEXT_EDITOR_INLINE_TYPES } from '../constans'
import { FormatBtn } from '../FormatBtn'

type TProps = {
    editorState: EditorState;
    onToggle: (value: string) => void;
};

export const InlineStyleControls: React.FC<TProps> = ({ editorState, onToggle }) => {
    const currentStyle = editorState.getCurrentInlineStyle();

    return (
        <>
            {TEXT_EDITOR_INLINE_TYPES.map((type) => (
                <FormatBtn
                    key={type.label}
                    isActive={currentStyle.has(type.style)}
                    onToggle={onToggle}
                    size={type.size}
                    style={type.style}
                    typeIcon={type.icon}
                />
            ))}
        </>
    );
};