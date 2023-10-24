import React from 'react'
import { EditorState } from 'draft-js'
import { TEXT_EDITOR_BLOCK_TYPES } from '../constans'
import { FormatBtn } from '../FormatBtn'

type TProps = {
    editorState: EditorState,
    onToggle: (style: string) => void,

}

export const BlockStyleControllers: React.FC<TProps> = ({
    editorState, onToggle
}) => {
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType()

    return (
        <>
            {TEXT_EDITOR_BLOCK_TYPES.map((type) =>
                <FormatBtn
                    key={type.label}
                    isActive={type.style === blockType}
                    onToggle={onToggle}
                    size={type.size}
                    style={type.style}
                    typeIcon={type.icon}
                />
            )}
        </>
    )
}

