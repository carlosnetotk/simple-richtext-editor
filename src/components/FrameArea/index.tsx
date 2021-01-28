import React, { useState } from 'react';
import { Container } from './styles';
import { DraftHandleValue, Editor, EditorState, RichUtils } from 'draft-js';

export interface ICallBack {
    (editorState: EditorState): void
}

const FrameArea: React.FC = () => {


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
            <Editor handleKeyCommand={handleKeyCommand} editorState={editState} onChange={onChange} />
        </Container>
    );
}

export default FrameArea;