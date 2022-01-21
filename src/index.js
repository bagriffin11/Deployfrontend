import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";


// views without layouts

import Landing from "views/Landing.js";
import Aboutus from "views/Aboutus.js";
import Contactus from "views/Contactus.js";

// Global variables 


ReactDOM.render(
  
  <BrowserRouter>
    <Switch>    
      <Route path="/" exact component={Landing} />
      <Route path="/about" exact component={Aboutus} />
      <Route path="/contact" exact component={Contactus} />
      {/* add routes with layouts */}
      <Route path="/user" component= {Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
