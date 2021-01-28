import React from 'react';
import TextEditor from './components/TextEditor';
import { Container } from './styles/AppStyle';
import GlobalStyle from './styles/GlobalStyle';



function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <TextEditor />
      </Container>
    </>
  );
}

export default App;
