import React, { Component } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import Auctions from './Auctions';

const SytleModal = styled(Modal)`
  .ant-modal-title {
    text-align: center;
  }
  .ant-modal-body {
    padding: 60px 24px;
  }
  .ant-modal-body p {
    text-align: center;
    margin: 0;
    font-size: 1.24rem;
  }
  .ant-modal-footer {
    border: 0;
    text-align: center;
    padding: 0 24px 24px;
  }
  .ant-modal-footer .ant-btn {
    width: 100%;
    height: auto;
    background-color: #f5df4d;
    border: 0;
    padding: 10px 24px;
  }
`;

const AuctionModal = props => {
  return (
    <SytleModal
      title="입찰하기"
      centered
      visible={props.visible}
      onCancel={props.onCancel}
      footer={[<Button key="auction">입찰하기</Button>]}
    >
      <Auctions />
    </SytleModal>
  );
};

export default AuctionModal;
