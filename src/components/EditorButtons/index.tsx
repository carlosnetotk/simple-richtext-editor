import React from 'react';
import { Container, EditorButton } from './style';
import { EditorState, RichUtils } from 'draft-js';

interface IEditorButtonsProps {
    editState: EditorState,
    callBack(editState: EditorState): void
}


const EditorButtons: React.FC<IEditorButtonsProps> = ({ editState, callBack }) => {

    const onItalicClick = () => {
        callBack(RichUtils.toggleInlineStyle(editState, 'ITALIC'))
    }
    const onBoldClick = () => {
        callBack(RichUtils.toggleInlineStyle(editState, 'BOLD'))
    }
    const onUnderLineClick = () => {
        callBack(RichUtils.toggleInlineStyle(editState, 'UNDERLINE'))
    }
    const onStrikeThroughClick = () => {
        callBack(RichUtils.toggleInlineStyle(editState, 'STRIKETHROUGH'))
    }


    return (
        <Container>
            <EditorButton onClick={onItalicClick}>
                <em>I</em>
            </EditorButton>
            <EditorButton onClick={onBoldClick}>
                <strong>B</strong>
            </EditorButton>
            <EditorButton onClick={onUnderLineClick}>
                <u>U</u>
            </EditorButton>
            <EditorButton onClick={onStrikeThroughClick}>
                <del>abc</del>
            </EditorButton>
        </Container>
    );
}

export default EditorButtons;