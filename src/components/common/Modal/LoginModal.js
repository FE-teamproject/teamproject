import React, { Component } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

const SytleModal = styled(Modal)`
  .ant-modal-header {
    padding: 28px;
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
    height: auto;
    background-color: #f5df4d;
    border: 0;
    padding: 10px 24px;
  }
  .ant-modal-footer .ant-btn + .ant-btn:not(.ant-dropdown-trigger) {
    margin-left: 25px;
  }
`;

const LoginModal = props => {
  return (
    <SytleModal
      title=" "
      centered
      visible={props.visible}
      onCancel={props.onCancel}
      footer={[
        <Button key="home" onClick={props.onCancel}>
          홈으로 가기
        </Button>,
        <Button key="login">로그인 하기</Button>,
      ]}
    >
      <p>로그인 후 이용해주세요</p>
    </SytleModal>
  );
};

export default LoginModal;
