import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Authentications/Login';
import Registration from './Components/Pages/Authentications/Registration';
import ResetPass from './Components/Pages/Authentications/ResetPass';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/create-a-new-account' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-your-password' element={<ResetPass />} />
      </Routes>

    </div>
  );
}

export default App;
