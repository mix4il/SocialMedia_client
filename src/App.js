import React, {useContext, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import TrainingPage from "./Pages/TrainingPage/TrainingPage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {AuthContext} from "./context/AuthContext";

const App = () => {

    const {user} = useContext(AuthContext);

  return (
      <>
          <BrowserRouter>
              {
                  user ?
                      <div className="container-app">
                          <Header/>
                          <div className="container-content">
                              <Navbar/>
                              <Routes>
                                  <Route path="/" element={<Home/>}/>
                                  <Route path="/home" element={<Home/>}/>
                                  <Route path="/training/:id" element={<TrainingPage/>}/>
                              </Routes>
                          </div>
                      </div>
                      :
                      <Routes>
                          <Route path="/register" element={<Register/>}/>
                          <Route path="/login" element={<Login/>}/>
                          <Route path="*" element={<Login/>}/>
                      </Routes>
              }
          </BrowserRouter>
      </>
  );
};

export default App;

