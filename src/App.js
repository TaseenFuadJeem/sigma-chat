import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Authentications/Login';
import Registration from './Components/Pages/Authentications/Registration';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/create-a-new-account' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
