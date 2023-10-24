import { EditorState, RichUtils } from "draft-js";
import * as React from "react";
import { BlockType, InlineStyle } from "../Components/TextEditor/config";

export type EditorApi = {
    state: EditorState,
    onChange: (state: EditorState) => void;
    toggleBlockType: (blockType: BlockType) => void
    currentBlockType: BlockType;
    toggleInlineStyle:(inlineStyle:InlineStyle) => void,
    hasInlineStyle:(inlineStyle: InlineStyle) => void,
}



export const useEditor = (html?: string): EditorApi => {
    const [state, setState] = React.useState(() => EditorState.createEmpty())
    const toggleBlockType = React.useCallback((blockType: BlockType) => {
        setState((currentState) => RichUtils.toggleBlockType(currentState, blockType))
    }, []);
    const currentBlockType = React.useMemo(() => {
        /* Шаг 1 */
        const selection = state.getSelection();
        /* Шаг 2 */
        const content = state.getCurrentContent();
        /* Шаг 3 */
        const block = content.getBlockForKey(selection.getStartKey());
        /* Шаг 4 */
        return block.getType() as BlockType;
    }, [state]);
    const toggleInlineStyle = React.useCallback((inlineStyle:InlineStyle) => {
        setState((currentState) => RichUtils.toggleInlineStyle(currentState, inlineStyle))
    },[]);
    const hasInlineStyle = React.useCallback((inlineStyle:InlineStyle) =>{
        const currentStyle = state.getCurrentInlineStyle();
        return currentStyle.has(inlineStyle)
    },[state])
    return React.useMemo(() => ({
        state,
        onChange: setState,
        toggleBlockType,
        currentBlockType,
        toggleInlineStyle,
        hasInlineStyle
    }), [state])
}
