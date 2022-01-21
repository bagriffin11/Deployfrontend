import {React, useState, useContext, useEffect} from "react";
import axios from "axios";
import {useHistory, Link} from "react-router-dom";
import {UserId} from "Global/Variables.js"


// components

export default function CardSettings() {
  let history = useHistory();
const id = useContext(UserId);

  const [status, setStatus] = useState("");
  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");

  const [user, setUser] = useState({});
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get(`https://deploywebautomations.herokuapp.com/user/byId/${id}`).then((response) => {
       setUser(response.data);
       
    });
    
    axios.get(`https://deploywebautomations.herokuapp.com/info/byUserId/${id}`).then((response) => {
       setInfo(response.data[0]);
    });
  },[]);



  const updateUser = (data) => {
    axios.put(`https://deploywebautomations.herokuapp.com/user/update/${id}`, {
      fullname: fullname,
        email:email

    }).then((response) => {
      history.push(`/user/profile/${id}`);
    });
};

const updateEducation = (data) => {
  axios.put(`https://deploywebautomations.herokuapp.com/info/updateeducation/${id}`, {
    
      status: status, degree: degree, 
      college: college

  }).then((response) => {
    history.push(`/user/profile/${id}`);
  });
};

const updateLocation = (data) => {
  axios.put(`https://deploywebautomations.herokuapp.com/info/updatelocation/${id}`, {
    
      city: city, 
      state: state, country: country

  }).then((response) => {
    history.push(`/user/profile/${id}`);
  });
};


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick= {()=> {history.push(`/user/profile/${id}`)}}
            >
              return
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
           
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value= {user.email}
                    onChange = {(e)=>  {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value= {user.fullname}
                    onChange = {(e)=>  {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
            
           
              <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button" 
                      onClick = {updateUser}
                    >
                      Update
                    </button>
                  </div>
          

            </div>


            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Education
            </h6>
            <div className="flex flex-wrap">
          
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Status
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value= {info.status}
                    onChange = {(e)=>  {
                      setStatus(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Degree
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={info.degree}
                    onChange = {(e)=>  {
                      setDegree(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    College
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={info.college}
                    onChange = {(e)=>  {
                      setCollege(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button" 
                      onClick = {updateEducation}
                    >
                      Update
                    </button>
                  </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Location
            </h6>
            <div className="flex flex-wrap">
          
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={info.city}
                    onChange = {(e)=>  {
                      setCity(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={info.state}
                    onChange = {(e)=>  {
                      setState(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={info.country}
                    onChange = {(e)=>  {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
              </div>
          <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button" 
                      onClick = {updateLocation}
                    >
                      Update
                    </button>
                  </div>

            </div>

  
           
          </form>
        </div>
      </div>
    </>
  );
}
