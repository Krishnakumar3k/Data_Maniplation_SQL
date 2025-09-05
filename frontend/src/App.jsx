import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RegisterForm from './components/RegisterForm';
import Update from './components/Update';
import DetailView from './components/DetailView';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/view/:id" element={<DetailView />} />
      </Routes>
    </>
  );
}

export default App;

