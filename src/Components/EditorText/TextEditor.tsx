import React, { memo } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import { convertToHTML, convertFromHTML } from 'draft-convert'
import cn from 'classnames'
import { TEXT_EDITOR_CUSTOM_STYLES, TEXT_EDITOR_STYLE_TO_HTML } from './constans'
import { TTextEditorTextStyle } from './types'
import { BlockStyleControllers } from './BlockStyleControles'
import { InlineStyleControls } from './InlineStyleControles'

import "draft-js/dist/Draft.css";
import "./editorPanel.scss";



type TProps = {
    classes?: string;
    htmlText?: string;
    isInvalid?: boolean;
    onChangeHTMLText?: (value: string) => void;
    placeholder?: string;
    title?: string;
};

const TextEditorComponent: React.FC<TProps> = ({
    classes,
    htmlText,
    isInvalid = false,
    onChangeHTMLText,
    placeholder,
    title,

}) => {
    const [isFocused, setFocused] = React.useState(false);
    const [editorState, setEditorState] = React.useState<EditorState>(EditorState.createEmpty());

    let wrapperClassName = "TextEditor-Wrapper";
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== "unstyled") {
            wrapperClassName += " TextEditor-Wrapper__hidePlaceholder";
        }
    }

    const options = {
        styleToHTML: (style: string) => TEXT_EDITOR_STYLE_TO_HTML(style as TTextEditorTextStyle),
    };
    const convertMessageToHtml = convertToHTML(options);

    const convertHtmlToRaw = (html: string): EditorState => {
        const contentState = convertFromHTML({
            htmlToStyle: (nodeName, node, currentStyle) => {
                if (nodeName === "span" && node.className === "highlight") {
                    return currentStyle.add("HIGHLIGHT");
                } else {
                    return currentStyle;
                }
            },
        })(html);
        return EditorState.createWithContent(contentState);
    };

    React.useEffect(() => {
        htmlText && setEditorState(convertHtmlToRaw(htmlText));
    }, [htmlText]);

    const handleChangeBlur = () => {
        setFocused((prevState: boolean) => (prevState ? false : prevState));
    };

    const handleChangeFocus = () => {
        setFocused((prevState: boolean) => (prevState ? true : !prevState));
    };

    const handleChangeText = React.useCallback((value: EditorState) => {
        const currentSelection = value.getSelection();
        onChangeHTMLText?.(convertMessageToHtml(value.getCurrentContent()));
        const stateWithContentAndSelection = EditorState.forceSelection(value, currentSelection);
        setEditorState(stateWithContentAndSelection);
    }, []);

    const handleKeyCommand = React.useCallback(
        (command: string, editorState: EditorState) => {
            const newState = RichUtils.handleKeyCommand(editorState, command);
            if (newState) {
                setEditorState(newState);
                return "handled";
            }
            return "not-handled";
        },
        [editorState, setEditorState],
    );


    const getBlockStyle = (block: { getType: (arg0: string) => any }) => {
        switch (block.getType("")) {
            case "blockquote":
                return "RichEditor-blockquote";
            default:
                return null;
        }
    };

    return (
        <div className={cn("TextEditor", classes)}>
            <div className="TextEditor-Title">{title}</div>
            <div
                className={cn("TextEditor-Area", {
                    "TextEditor-Area__isFocused": isFocused || contentState.hasText(),
                    "TextEditor-Area__isInvalid": isInvalid,
                })}
                onClick={handleChangeFocus}
            >
                <div className={wrapperClassName}>
                    <Editor
                        customStyleMap={TEXT_EDITOR_CUSTOM_STYLES}
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onBlur={handleChangeBlur}
                        onChange={handleChangeText}
                        placeholder={placeholder}
                    />
                </div>
                <div className="TextEditor-Sub">
                    <BlockStyleControllers
                        editorState={editorState}
                        onToggle={(blockType) => {
                            const newState = RichUtils.toggleBlockType(editorState, blockType);
                            setEditorState(newState);
                        }}
                    />
                    <InlineStyleControls
                        editorState={editorState}
                        onToggle={(inlineStyle) => {
                            const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
                            setEditorState(newState);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export const EditorText = memo(TextEditorComponent)
