import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Lists from './pages/Lists';
import Edit from './pages/Edit';
import Item from './pages/Item';
import CreateModel from './pages/CreateModel';
import CreateMake from './pages/CreateMake';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Lists />} />
      <Route path="/create-model" element={<CreateModel />} />
      <Route path="/create-make" element={<CreateMake />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/item/:id" element={<Item />} />
    </Routes>
  );
}

export default App;
