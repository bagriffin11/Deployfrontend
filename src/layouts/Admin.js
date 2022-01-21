import {React, useState, useEffect} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import CardTaskEditor from "components/Cards/CardTaskEditor.js";
import CardUserInfo from "components/Cards/CardUserInfo.js";
import CardBusinessInfo from "components/Cards/CardBusinessInfo.js";
import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Accounts from "views/admin/Accounts.js";
import Tasks from "views/admin/Tasks.js";
import Profile from "views/admin/Profile.js";
import {LoginContext, UserId, UserName} from "Global/Variables.js"
import CardProfile from "components/Cards/CardProfile.js";
import Business from "views/admin/Business.js"

export default function Admin() {
const [loggedIn, setLoggedIn] = useState("");
const [id, setId] = useState();
const [name, setName] = useState("");


  useEffect(() => {
    axios.get("http://localhost:3001/auth").then((response) => {
       setLoggedIn(response.data);
    })
  },[])

  useEffect(() => {
    axios.get("http://localhost:3001/user/getid").then((response) => {
       setId(response.data);
    })
  },[])

  useEffect(() => {
    axios.get("http://localhost:3001/user/getname").then((response) => {
       setName(response.data);
    })
  },[])

  return (
    <>          
  <LoginContext.Provider value={loggedIn}>
  <UserId.Provider value={id}>
 <UserName.Provider value={name} >
 <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>  
            <Route path="/user/dashboard/:id" exact component={() => <Dashboard authorized = {loggedIn} /> } />
            <Route path="/user/maps/:id" exact component={() => <Maps authorized = {loggedIn} /> } />
            <Route path="/user/settings" exact component={() => <Settings authorized = {loggedIn} /> } />
            <Route path="/user/tables" exact component={() => <Tables authorized = {loggedIn} /> } />
            <Route path="/user/accounts/:id" exact component={() => <Accounts authorized = {loggedIn} /> } />
            <Route path="/user/tasks" exact component={() => <Tasks authorized = {loggedIn} /> } />
            <Route path="/user/profile/:id" exact component={Profile} />
            <Route path="/user/info" exact component={CardUserInfo} />
            <Route path="/user/accountinfo" exact component={CardBusinessInfo} />
            <Route path="/user/prof" exact component={CardProfile} />
            <Route path="/user/task/editor" exact component={CardTaskEditor} />
            <Route path="/user/business/:id" exact component={() => <Business authorized = {loggedIn} /> } />


            <Redirect from="/admin/dashboard" to="/" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>

 </UserName.Provider>
  </UserId.Provider>
  </LoginContext.Provider>

    
    </>
  );
}
