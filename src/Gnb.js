import React from 'react';
import logo from './img/logo.jpg';
import { FaSistrix } from 'react-icons/fa';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonWrap = styled.div`
  display: inline-block;
  font-size: 13px;

  a {
    display: inline-block;
    margin-right: 12px;
    text-decoration: none;
    color: black;
  }

  .search {
    position: relative;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    top: -2px;
  }

  .login-wrap {
    position: relative;
    top: 2px;
    display: inline-block;
    font-size: 9px;
    line-height: 11px;
    margin-right: 12px;
    .login-link {
      font-weight: bold;
    }
  }
`;

const Logo = styled.a`
  width: 60px;
  height: 40px;
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function Gnb({ logInDone }) {
  const bold = {
    fontWeight: 'bold',
    marginBottom: '0',
  };

  return (
    <nav class="navbar">
      <div class="container-fluid">
        <Logo />
        <ButtonWrap>
          {logInDone ? (
            <>
              <a href="#">물품등록</a>
              <a href="#">마이페이지</a>
            </>
          ) : (
            <div className="login-wrap">
              <div className="ad-msg">물건구매를 놓치지마세요!</div>
              <Link to="/login" className="login-link">
                로그인/회원가입 하기
              </Link>
            </div>
          )}
          <button className="search">
            <FaSistrix size="20" />
          </button>
        </ButtonWrap>
      </div>
    </nav>
  );
}

export default connect(
  state => ({
    logInDone: state.user.logInDone,
  }),
  _ => ({}),
)(Gnb);
