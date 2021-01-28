import React from 'react';
import { Container, EditorButton } from './style';

const EditorButtons: React.FC = () => {
    return (
        <Container>
            <EditorButton>
                <em>I</em>
            </EditorButton>
        </Container>
    );
}

export default EditorButtons;