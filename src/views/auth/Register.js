import React from "react";
import axios from "axios";
import {useState} from 'react';
import {useHistory} from "react-router-dom";
import { Link} from "react-router-dom";
import Popupregister from "components/Popup/Popupig.js";
import Enterpage from './Enterpage.js'
import {UserEmail} from 'Global/Variables.js'
import GoogleLogin from 'react-google-login';



export default function Register() {

  let history = useHistory();
  axios.defaults.withCredentials = true;
  
  const [buttonPopup, setButtonPopup] = useState(false);
  const [fullname, fullName] = useState("");
  const [email, Email] = useState("");
  const [password, Password] = useState("");

  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked(value => !value);


    const onSubmit = (data) => {
    if (checked == true) {
        axios.post("https://deploywebautomations.herokuapp.com/user", {
        fullname: fullname,
        email:email, password: password
    }).then((response) => {
      if (response.data.error) {
                alert(response.data.error);
      }
      else {
       //  sessionStorage.setItem("accessToken", response.data);
      setButtonPopup(true);
      }
    }); 
    }
    else {
      alert("Accept the terms and conditions to continue.")
    } 
  };

  const handleFailure = (result) => {
    alert("Google login is currently unavailable.");
   }
   
   const handleLogin = (googleData) => {
     console.log(googleData);
    }



  return (
    <>
    <UserEmail.Provider value={email}>
 <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                  />
            
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name" onChange = {(e)=>  {
                        fullName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email" onChange = {(e)=>  {
                        Email(e.target.value);
                      }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password" onChange = {(e)=>  {
                        Password(e.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        checked={checked}
                        onChange={toggleChecked}
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button" onClick = {onSubmit}
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
              
            </div>
            <div className="flex flex-wrap mt-6 relative">
       
              <div className="w-1/2 text-left">
                <Link to="/auth/login" className="text-blueGray-200">
                  <small>Login</small>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        <Popupregister trigger = {buttonPopup} setTrigger={setButtonPopup}>
        <h3>Choose Account:</h3>
          < Enterpage />
      </Popupregister>
      </div>
    </UserEmail.Provider>
     
    </>
  );
}
