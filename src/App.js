import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { actions } from "./store/actions";
import { useDispatch } from 'react-redux'
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import NavBar from './NavBar'
function App() {
  const dispatch = useDispatch();
  const localStore = JSON.parse(localStorage.getItem('credential'));
  if (localStore) {
    dispatch(actions.authentication(localStore))
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;