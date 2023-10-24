import React from 'react'
import { TextEditorProvider } from '../Context/TextEditorContext'
import ToolPanel from './ToolPanel/ToolPanel'
import EditorPanel from './EditorPanel/EditorPanel'

const TextEditor = () => {
    return (
        <TextEditorProvider>
            <ToolPanel />
            <EditorPanel className='' />
        </TextEditorProvider>
    )
}

export default TextEditor