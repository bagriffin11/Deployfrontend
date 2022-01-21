import {React, useEffect, useContext, useState}  from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import {UserEmail} from 'Global/Variables.js'


function Enterpage() {

    let history = useHistory();


    const email = useContext(UserEmail);

    axios.defaults.withCredentials = true;

    function wait(ms) {
      return new Promise( (resolve) => {setTimeout(resolve, ms)});
  }

    const onSubmit = (data) => {
        axios.post("https://deploywebautomations.herokuapp.com/user/register", {
          
            email: email
        }).then((response) => {
          if (response.data.error) {
                    alert(response.data.error);
          }
          else {
            wait(5000);
          history.push("/user/info");
          }
        });
  };

    return (
        <div>
            <h1>hello {email}</h1>

<div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button" onClick = {onSubmit}
                    >
                      Get Started
                    </button>
                  </div>
        </div>
    )
}

export default Enterpage
