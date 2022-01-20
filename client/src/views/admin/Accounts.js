
import {React, useState} from 'react';
import {useHistory} from "react-router-dom";
import CardBusinessTable from "components/Cards/CardBusinessTable.js";


export default function Accounts() {

let history = useHistory();




    return (
      <>
<div>         
          <CardBusinessTable />
           
                 </div>
              <div>
   
        </div>   
        </>
    );
}