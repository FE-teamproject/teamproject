import React, { useState, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
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
      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          name="email"
          type="email"
          placeholder="EMAIL"
          required
          value={email}
          onChange={onChange}
        />
        <input
          className="form-control"
          name="password"
          type="password"
          placeholder="PASSWORD"
          required
          value={password}
          onChange={onChange}
        />
        <div>{message}</div>
        <Button type="submit">{signup ? '회원가입' : '로그인'}</Button>
      </form>
      <div>
        <span onClick={toggleLogin}>{signup ? '로그인' : '회원가입'}</span>
      </div>
      <Button onClick={onSocialBtn}>구글 로그인</Button>
    </>
  );
};

export default Auth;
