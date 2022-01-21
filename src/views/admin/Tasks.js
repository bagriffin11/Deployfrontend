import React from "react";
import {Redirect} from "react-router-dom";
import {useHistory} from "react-router-dom";

// components

import CardTableTask from "components/Cards/CardTableTask.js";
import CardTableHistory from "components/Cards/CardTableHistory.js";


export default function Tasks({authorized}) {
  let history = useHistory();


  if (!authorized){
    return <Redirect to="/" />
  }

 

  return (
    <> 
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
         
          <CardTableTask />
        </div>  
        <div className="w-full mb-12 px-4">
          <CardTableHistory color="dark" />
        </div>
      </div>
    </>
  );
}
