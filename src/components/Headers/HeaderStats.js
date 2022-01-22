import {React, useState, useEffect, useContext } from "react";
import axios from "axios";
import {UserId} from "Global/Variables.js";
import {useHistory} from "react-router-dom";
import 'assets/styles/hover.css'

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
//import user's info
let history = useHistory();

const [businesses, setBusinesses] = useState([]);
const [tasks, setTasks] = useState([]);
const id = useContext(UserId);

useEffect(() =>{
  axios.get(`https://deploywebautomations.herokuapp.com/business/getUserId/${id}`).then((response) => {
    setBusinesses(response.data);
 });
},[]);




const onSubmit = (id) => {
  history.push(`/user/business/${id}`);
}






//import user's accounts


  return (
    <>
    
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            
            <div className="flex flex-wrap">
            {businesses.map((value, key) => {
             
                  return(
              <div hoverable onClick={() => {onSubmit(value.id)}} className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statTitle={value.business}
                  statDescripiron={value.createdAt}
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
                </div>
           );
          })}
            
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
