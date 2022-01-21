import {React, useContext} from "react";
import {Redirect} from "react-router-dom";
// component
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import {LoginContext} from "Global/Variables.js"



export default function Profile() {
 //const name = useContext(UserName); 
 const loggedIn = useContext(LoginContext);


/*
 if (!LoginContext){
    return <Redirect to="/" />
  }
*/
  

  return (
    <>
      <div className="flex flex-wrap">
        
          <CardProfile />
       
      </div>
    </>
  );
}