import React, { createContext, useContext, ReactNode } from 'react';
import { EditorApi, useEditor } from '../../hooks/useEditor';

interface TextEditorContextProps {
    editorApi: EditorApi;
}

const TextEditorContext = createContext<TextEditorContextProps | undefined>(undefined);

export const useEditorApi = (): EditorApi => {
    const context = useContext(TextEditorContext);
    if (context === undefined) {
        throw new Error('useEditorApi must be used within TextEditorProvider');
    }
    return context.editorApi;
};

export const TextEditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const editorApi = useEditor();

    return (
        <TextEditorContext.Provider value={{ editorApi }}>
            {children}
        </TextEditorContext.Provider>
    );
};