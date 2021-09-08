import React, { useState, useEffect, useCallback } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Authdiv } from './style';
import { useDispatch, useSelector } from 'react-redux';
import {
  signupwithEmail,
  loginwithEmail,
  loginWithGoogle,
} from 'reducers/user';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState(false);
  const toggleLogin = () => setSignup(prev => !prev);
  const dispatch = useDispatch();
  //에러메세지
  const { message } = useSelector(state => state.user);

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const onSocialBtn = () => {
    dispatch(loginWithGoogle());
  };

  const onSubmit = event => {
    event.preventDefault();
    if (signup) {
      dispatch(signupwithEmail({ email, password }));
    } else dispatch(loginwithEmail({ email, password }));
  };
  return (
    <>
      <Authdiv>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder="EMAIL"
            required
            value={email}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="PASSWORD"
            required
            value={password}
            onChange={onChange}
          />
          <div>{message}</div>
          <button type="submit" className="btn">
            {signup ? 'JOIN' : 'LOGIN'}
          </button>
        </form>
        <div className="toggle">
          <span onClick={toggleLogin}>{signup ? '로그인' : '회원가입'}</span>
        </div>
        <button onClick={onSocialBtn} className="googlebtn">
          <FcGoogle size="20" className="icon" />
          <span>구글로 로그인하기</span>
        </button>
      </Authdiv>
    </>
  );
};

export default Auth;
