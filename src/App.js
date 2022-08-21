import { Route, Routes } from 'react-router-dom';
import { actions } from "./store/actions";
import { useDispatch } from 'react-redux'
import Profile from './components/Profile';
import Login from './components/authrization/Login';
import NavBar from './components/NavBar'
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
        <Route path='/' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;