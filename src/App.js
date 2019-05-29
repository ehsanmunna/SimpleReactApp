import React from 'react';
import { NavBar } from "./Components/Navbar";
import logo from './logo.svg';
import { Home } from "./Pages/Home";
import { DepartmentHome } from "./Pages/Department/Home";
import { FacultyHome } from "./Pages/Faculty/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <div class="container">
      <Router>
        <NavBar/>
        <Route exact path="/" component={Home} />
        <Route path="/faculty" component={FacultyHome} />
        <Route path="/department" component={DepartmentHome} />
      </Router>
    </div>
    
      
  );
}

export default App;
