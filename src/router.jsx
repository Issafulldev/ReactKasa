import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Propos from './pages/Propos/Propos';
import Logement from './pages/Logement/Logement'
import Error from './pages/Error/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/propos' element={<Propos />} />
        <Route path='/logement/:id' element={<Logement />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;