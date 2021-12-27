import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Statement from './Statement';
import Deposite from './Deposite';
import Withdraw from './Withdraw';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/deposite" element={<Deposite />} />
          <Route path="/withdraw" element={<Withdraw />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
