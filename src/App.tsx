import styled from 'styled-components';

import Router from './Router';

const Container = styled.div`
  * {
    box-sizing: border-box;
  }

  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;

  // global style
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;

  h1 {
    font-size: 28px;
    font-weight: 700;
    line-height: 1.5;
  }
`;

const Frame = styled.div`
  background: #eee;
  width: 440px;
  padding: 1.25em;
`;

export default function App() {
  return (
    <Container>
      <Frame>
        <Router />
      </Frame>
    </Container>
  );
}
