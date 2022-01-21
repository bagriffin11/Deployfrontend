import {React, useState, useContext} from "react";
import axios from "axios";
import {useHistory, Link} from "react-router-dom";
import {UserId} from "Global/Variables.js"


// components

export default function CardBusinessInfo() {
  let history = useHistory();


  const [business, setBusiness] = useState("");
  const [igusername, setIgU] = useState("");
  const [igpassword, setIgP] = useState("");
  const [fbusername, setFbU] = useState("");
  const [fbpassword, setFbP] = useState("");
  const [emailusername, setEmailU] = useState("");
  const [emailpassword, setEmailP] = useState("");

  const id = useContext(UserId);

  const onCancel = () => {
    history.push(`/user/accounts/${id}`);
  };

  const onSubmit = () => {
    axios.post("http://localhost:3001/business", {
        business: business, igusername: igusername,
        igpassword: igpassword, fbusername: fbusername,
        fbpassword: fbpassword, emailusername: emailusername,
        emailpassword: emailpassword, UserId: id
    }).then((response) => {
     console.log("business created");
    history.push(`/user/accounts/${id}`);

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
              onClick = {onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Business
            </h6>
            <div className="flex flex-wrap">
           
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Business name
                  </label>
                  <input
                    type="business"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange = {(e)=>  {
                        setBusiness(e.target.value);
                      }} />
                </div>
              </div>
            </div>



            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Instagram
            </h6>
            <div className="flex flex-wrap">
          
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange = {(e)=>  {
                      setIgU(e.target.value);
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
                    Password
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="United States"
                    onChange = {(e)=>  {
                      setIgP(e.target.value);
                    }}
                  />
                </div>
              </div>

            </div>


<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
  Facebook
</h6>
<div className="flex flex-wrap">

  <div className="w-full lg:w-4/12 px-4">
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        Username
      </label>
      <input
        type="username"
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        onChange = {(e)=>  {
          setFbU(e.target.value);
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
        Password
      </label>
      <input
        type="text"
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        defaultValue="United States"
        onChange = {(e)=>  {
          setFbP(e.target.value);
        }}
      />
    </div>
  </div>

</div>


<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
  Email
</h6>
<div className="flex flex-wrap">

  <div className="w-full lg:w-4/12 px-4">
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        Username
      </label>
      <input
        type="username"
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        onChange = {(e)=>  {
          setEmailU(e.target.value);
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
        Password
      </label>
      <input
        type="text"
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        defaultValue="United States"
        onChange = {(e)=>  {
          setEmailP(e.target.value);
        }}
      />
    </div>
  </div>

</div>

          
            <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button" 
                      onClick = {onSubmit}
                    >
                      Save
                    </button>
                  </div>
           
          </form>
        </div>
      </div>
    </>
  );
}
