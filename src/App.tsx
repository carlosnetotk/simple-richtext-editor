import React, { useState } from 'react';
import { Container } from './styles/AppStyle';
import GlobalStyle from './styles/GlobalStyle';
import { Editor, EditorState } from 'draft-js';


function App() {


  const [editState, setEditState] = useState<EditorState>(EditorState.createEmpty())
  const onChange = (editorState: EditorState) => {
    setEditState(editorState);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Editor editorState={editState} onChange={onChange} />
      </Container>
    </>
  );
}

export default App;
