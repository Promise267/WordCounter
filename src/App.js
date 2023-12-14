import './App.css';
import ReactDOM from "react-dom/client";
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast, Slide} from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import Contact from './components/Contact'

//how is this working??
function App() {
  let [mode, setMode] = useState('light');

  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      toast.success('Dark Mode Enabled 🗿', {
        position: 'bottom-right',
        transition: Slide,
        theme: 'dark'
      });
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      toast.success('Light Mode Enabled 🌻', {
        position: 'bottom-right',
        transition: Slide,
        theme: 'light'
      });
    }
  }

  return (
    <>
    <BrowserRouter>
        <Navbar title = "Text Analyzer" mode = {mode} togglemode = {togglemode}/>
        <ToastContainer/>
          <div className="container">
          <Routes>
            <Route path ="/" element = {<TextForm heading = "WordCounter" mode = {mode}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
