import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { fire } from 'firebase';
import Auth from 'components/Auth';
import SearchInput from 'components/common/SearchInput';
import { authService } from 'firebaseinfo';
import { useDispatch } from 'react-redux';
import { authStateChange } from 'reducers/user';

function App() {
  const dispatch = useDispatch();
  //onAuthStateChanged는 user 로그인 상태 변화 체크
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      dispatch(authStateChange(user));
    });
  });
  return (
    <div className="container-sm">
      <h2>Daily Auction</h2>
      <SearchInput />
      <Auth />
      <Button>Boot strap</Button>
    </div>
  );
}

export default App;
