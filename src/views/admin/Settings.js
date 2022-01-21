import React from "react";
import {Redirect} from "react-router-dom";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function Settings({authorized}) {
 /* if (!authorized){
    return <Redirect to="/" />

  } */
  return (
    <>
      <div className="flex flex-wrap">
     
          <CardSettings />
        </div>
      
    
    </>
  );
}
