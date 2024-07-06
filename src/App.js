import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";

function App() {
  const [alert , setalert] = useState(null);
  const showAlert = (message , type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
     setalert(null); 
    },1500);
  }
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert = {alert}/>
        <div className="container">
        <Routes>
          <Route element={<Home  showAlert = {showAlert}/>} exact path="/"></Route>  
          <Route element={<About />} exact path="/about"></Route>   
          <Route element={<Login showAlert = {showAlert}/>} exact path="/login"></Route> 
          <Route element={<SignUp showAlert = {showAlert}/>} exact path="/signup"></Route> 
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
