import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="This is amazing react course"/>
        <div className="container">
        <Routes>
          <Route element={<Home/>} exact path="/"></Route>  
          <Route element={<About/>} exact path="/about"></Route>   
          <Route element={<Login/>} exact path="/login"></Route> 
          <Route element={<SignUp/>} exact path="/signup"></Route> 
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
