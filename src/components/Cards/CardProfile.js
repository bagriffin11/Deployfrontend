import {React, useEffect, useState, useContext} from "react";
import axios from "axios";
import { UserId} from "Global/Variables.js"
import {useHistory} from "react-router-dom";



// components

export default function CardProfile() {
  let history = useHistory();
  axios.defaults.withCredentials = true;


  const id = useContext(UserId);
  const [user, setUser] = useState({});
  const [info, setInfo] = useState({});
  
  const onSubmit = () => {
    history.push("/user/settings");
  }

  const onInfo = (info) => {
    if(info == null) {
      return(
        <div>
          <button
          className="bg-blue text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
          onClick={()=>{
            history.push("/user/info")
          }}
          >
            Add information
          </button>
        </div>
      );
    }
    else {
      return(
        <div>
             
            <button 
            className="bg-blue text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            onClick = {onSubmit}>
              Edit Info
            </button>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {info.city}, {info.state} {info.country}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              {info.degree}
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              University of {info.college}
            </div>
        </div>
      );
    }
  }

  const logOut = () => {
    axios.post("https://deploywebautomations.herokuapp.com/user/logout").then((response) => {
    history.push("/");
    console.log("Logged out")
  });
}

  


  useEffect(() => {
    axios.get(`https://deploywebautomations.herokuapp.com/user/byId/${id}`).then((response) => {
       setUser(response.data);
       console.log(response.data);
    });
    
    axios.get(`https://deploywebautomations.herokuapp.com/info/byUserId/${id}`).then((response) => {
       setInfo(response.data[0]);
       console.log(response.data);
    });

    
  },[]);


  

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
   
          <div className="flex flex-wrap justify-center">  
           
            <div className="w-full px-4 flex justify-center"> 
           
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/userr.jpeg").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                /> 
              </div>
            </div>
            <br>
            </br>
            <div className="w-full px-4 text-center mt-20"> 
             <button
               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick = {logOut}
            >
              Logout
            </button>
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    5
                  </span>
                  <span className="text-sm text-blueGray-400">Accounts</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    100
                  </span>
                  <span className="text-sm text-blueGray-400">Tasks</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    12
                  </span>
                  <span className="text-sm text-blueGray-400">Months</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
          <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              
              {user.fullname} 
            </h3>
            {onInfo(info)} 
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  Billing Info 
                </p>
                <a
                  href="#pablo"
                  className="font-normal text-lightBlue-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
