import React from 'react'
import Home from './Home'
import BlogDetails from './BlogDetails';
import { Routes, Route, } from 'react-router-dom';
import Update from './Update';
import Create from './Create';
import About from './About';
import NotFound from './NotFound';

import './App.css'


function App() {
 
  return (
    <div className="App">
       <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route path="/blog/:id" element={<BlogDetails/>} />
       <Route path="/create" element={<Create/>} />
       <Route path="/update/:id" element={<Update/>} />
       <Route path="/about" element={<About/>} />
       <Route path="*" element={<NotFound />} />
       </Routes>   
    </div>
  )
}

export default App
