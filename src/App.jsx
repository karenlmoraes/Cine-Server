import React from 'react'
import MainRoute from './routes/MainRoute';
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'


function App() {
 
  return (
    <div className="App">
      <Header/>
      <MainRoute/> 
      <Footer/>
    </div>
  )
}

export default App
