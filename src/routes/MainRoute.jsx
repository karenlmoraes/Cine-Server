import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import Home from '../pages/Home'
import BlogDetails from '../pages/BlogDetails';
import Update from '../pages/Update';
import Create from '../pages/Create';
import About from '../pages/About';
import NotFound from '../pages/NotFound';



function MainRoute() {
 
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

export default MainRoute
