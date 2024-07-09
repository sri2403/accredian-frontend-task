import React from 'react';
import Home from '../components/Home';
import { Route, Routes } from 'react-router-dom';
import Form from '../components/Form';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='container-fluid'>
      <div>
        <ToastContainer/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
  );
};

export default App;