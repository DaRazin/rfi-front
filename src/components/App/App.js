import React from 'react'
import logo from '../../logo.svg';
import './App.css';
import Main from '../Main/Main.js'
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
