import { Home } from './screens/Home/Home';
import styled from 'styled-components';
import { Colors } from './assets/colors';

function App() {
  return (
    <Background>
      <Home />
    </Background>
  );
}

const Background = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${Colors.background};
`

export default App;
