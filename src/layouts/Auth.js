import {React, useState, useEffect, useLayoutEffect} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import Iglogin from "views/auth/Iglogin.js";
import {LoginContext, UserId} from "Global/Variables.js"


export default function Auth() {

  const [loggedIn, setLoggedIn] = useState("");
  const [id, setId] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/auth").then((response) => {
       setLoggedIn(response.data);
    })
  },[])
  useLayoutEffect(() => {
    axios.get("http://localhost:3001/user/getid").then((response) => {
       setId(response.data);
    })
  },[])

  return (
    <>
      <LoginContext.Provider value={loggedIn}>
      <UserId.Provider value={id}>

   <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/loginregister.jpeg").default + ")",
            }}
          ></div>
          <Switch>

            <Route path="/auth/iglogin" exact component={Iglogin} />
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
      </UserId.Provider >

      </LoginContext.Provider>

   
    </>
  );
}
