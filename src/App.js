import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import TrainingPage from "./Pages/TrainingPage/TrainingPage";

const App = () => {
  return (
      <>
          <BrowserRouter>
              <div className="container-app">
                  <Header/>
                  <div className="container-content">
                      <Navbar/>
                      <Routes>
                          <Route path="/" element={<TrainingPage/>}/>
                          <Route path="/home" element={<Home/>}/>
                      </Routes>
                  </div>
              </div>
          </BrowserRouter>
      </>
  );
};

export default App;

