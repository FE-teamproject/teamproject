import React, { useState } from 'react';
import LoginModal from './Modal/LoginModal';
import AuctionModal from './Modal/AuctionModal';
import { Button } from 'antd';

const Buttons = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div className="container-md">
      <p>isLogIn == false</p>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        입찰하기
      </Button>
      <LoginModal visible={modalShow} onCancel={() => setModalShow(false)} />

      <p>isLogIn == true</p>
      <Button variant="primary" onClick={() => setModalShow2(true)}>
        입찰하기
      </Button>
      <AuctionModal
        visible={modalShow2}
        onCancel={() => setModalShow2(false)}
      />
    </div>
  );
};

export default Buttons;
