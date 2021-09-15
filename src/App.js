import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/home-page.component";
import JoinPage from "./components/join-page.component";
import SessionPage from "./components/session-page.component";

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
 
function App() {
 return (
  <Router>
    <br/>
    <Route path="/" exact component={HomePage} />
    <Route path="/join/:id" component={JoinPage} />
    <Route path="/session/:id" component={SessionPage} />
</Router>
 );
}
 
export default App;