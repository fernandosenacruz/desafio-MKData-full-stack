import './App.css';

import { Route, Routes } from 'react-router-dom';

import ClientDetails from './pages/ClientDetails';
import ClientRegister from './pages/ClientRegister';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clients" element={<Home />} />
        <Route path="/client/:id" element={<ClientDetails />} />
        <Route path="/client/register" element={<ClientRegister />} />

      </Routes>
    </>
  );
}

export default App;
