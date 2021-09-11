import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { fire } from 'firebase';
import Auth from 'components/Auth';
import SearchInput from 'components/common/SearchInput';
import MainList from 'MainList';
import Gnb from 'Gnb';
import { authService } from 'firebaseinfo';
import { useDispatch } from 'react-redux';
import { authStateChange } from 'reducers/user';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  //onAuthStateChanged는 user 로그인 상태 변화 체크
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      dispatch(authStateChange(user));
    });
  });

  return (
    <div>
      <BrowserRouter>
        <Route path="/login" component={Auth} />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Gnb />
              <MainList />
            </>
          )}
        />
      </BrowserRouter>
      {/* <SearchInput /> */}
      {/* <Auth /> */}
      {/* <Button>Boot strap</Button> */}
    </div>
  );
}

export default App;
