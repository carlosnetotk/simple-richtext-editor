import React, { useState } from 'react';
import { Container } from './styles/AppStyle';
import GlobalStyle from './styles/GlobalStyle';
import { DraftHandleValue, Editor, EditorState, RichUtils } from 'draft-js';


function App() {


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
    <>
      <GlobalStyle />
      <Container>
        <Editor handleKeyCommand={handleKeyCommand} editorState={editState} onChange={onChange} />
      </Container>
    </>
  );
}

export default App;
