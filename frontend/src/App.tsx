import React from 'react';
import { Home } from './screens/Home/Home';
import styled from 'styled-components';

function App() {
  return (
    <Background>
      <Home />
    </Background>
  );
}

const Background = styled.div `
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #232323;
`

export default App;
