import React, { useState } from 'react';
import { Container } from './styles';
import { DraftHandleValue, Editor, EditorState, RichUtils } from 'draft-js';
import EditorButtons from '../EditorButtons';


const TextEditor: React.FC = () => {


    const [editState, setEditState] = useState<EditorState>(EditorState.createEmpty())
    const onChange = (editorState: EditorState) => {
        setEditState(editorState);
    }
    const handleKeyCommand = (command: DraftHandleValue): DraftHandleValue => {
        const newState = RichUtils.handleKeyCommand(editState, command);

        if (newState) {
            onChange(newState);
            return 'handled'
        }

        return 'not-handled';

    }

    return (
        <Container>
            <EditorButtons editState={editState} callBack={onChange} />
            <Editor handleKeyCommand={handleKeyCommand} editorState={editState} onChange={onChange} />
        </Container>
    );
}

export default TextEditor;