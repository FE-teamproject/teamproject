import React from 'react';
import { fire } from 'firebase';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import Buttons from 'components/common/Buttons';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

function App() {
  return (
    <Container>
      <h2>Daily Auction</h2>
      <Buttons />
    </Container>
  );
}

export default App;
