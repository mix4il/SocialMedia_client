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
import Profile from "./Pages/Profile/Profile";
import Messenger from "./Pages/Messenger/Messenger";

const App = () => {

    const {user} = useContext(AuthContext);
    console.log(user);

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
                                  <Route path="/training/:trainingId" element={<TrainingPage/>}/>
                                  <Route path="/users/:userId" element={<Profile/>}/>
                                  <Route path="/messenger" element={<Messenger/>}/>
                                  <Route path="*" element={<Home/>}/>
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

