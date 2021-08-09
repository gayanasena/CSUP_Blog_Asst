import "./css/styleAsst.css";
import HeaderBar from "./Componenets/HeaderBar";
import CardPs from "./Componenets/CardPs";
import Home from "./Componenets/Home";
import React, { useEffect, useState } from "react";
import AddPost from "./Componenets/AddPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Artical from "./Componenets/Artical";

const currentUser = 'Gayana Senarathne';

export const User = React.createContext(currentUser);
function App() {


  return (
    <Router>
      <User.Provider value = {currentUser}>
      <HeaderBar />
      <switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/create">
          <AddPost />
        </Route>
        <Route path='/posts/:id'>
          <Artical/>
        </Route>
      </switch>
      </User.Provider>
    </Router>

  );
}

export default App;
