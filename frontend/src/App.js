import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Add from './components/pages/Add';
import Update from './components/pages/Update';
function App() {
   
  return(

<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/add" element={<Add />} />
<Route path="/update/:id" element={<Update />} />
</Routes>
</BrowserRouter>
  )





}
export default App;
