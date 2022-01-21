import {React, useState, useContext, Component, useEffect} from "react";
import axios from "axios";
import {useHistory, Link} from "react-router-dom";
import {UserId} from "Global/Variables.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// components

export default function CardTaskEditor() {
  let history = useHistory();


  
  const id = useContext(UserId);



  const [businesses, setBusinesses] = useState([]);
  const [business, setBusiness] = useState("");
  const [account,setAccount] = useState("");
  const [action, setAction] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState(null);
  const [busid, setBusId] = useState("");

  const dateSet = (date) => {
      setDate(date);
  }


  useEffect(() =>{
    axios.get(`https://deploywebautomations.herokuapp.com/business/getUserId/${id}`).then((response) => {
      setBusinesses(response.data);
   })
  },[]);

  

  const onCancel = () => {
    history.push("/user/tasks");
  };

  const onSubmit = () => {
    axios.post("https://deploywebautomations.herokuapp.com/task", {
        business: business, account: account, 
        action: action, message: message, date: date,
         UserId: id, status: "pending", BusinessId: busid
    }).then((response) => {
     console.log("business created");
    history.push("/user/tasks");

});
};

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Create a Task</h6>
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
                    Select Business
                  </label>
                  <select  onChange = {(e)=>  {
                      setBusiness(e.target.value);

                    }}>
                     <option value=""></option>
              {businesses.map((valuee, key) => {
                  return( 
                    <option value={valuee.business}
                     >{valuee.business}</option>
                  );
              })} 
              </select>
              <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Confirm Business
                  </label>
              <select  onChange = {(e)=>  {
                      setBusId(e.target.value);

                    }}>
                     <option value=""></option>
              {businesses.map((valuee, key) => {
                  return( 
                    <option value={valuee.id}
                    >{valuee.business}</option>
                  );
              })} 
              </select>
                </div>
              </div>
            </div>



            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Social Media
            </h6>
            <div className="flex flex-wrap">
          
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Please choose
                  </label>
                  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="Instagram"
        onChange = {(e)=>  {
            setAccount(e.target.value);
          }}
        className="form-check-input"
      />
      Instagram
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="Facebook"
        onChange = {(e)=>  {
            setAccount(e.target.value);
          }}
        className="form-check-input"
      />
      Facebook
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="Email"
        onChange = {(e)=>  {
            setAccount(e.target.value);
          }}     
        className="form-check-input"
      />
      Email
    </label>
  </div>

  

       
                </div>
              </div>

            </div>


<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
  Action
</h6>
<div className="flex flex-wrap">

  <div className="w-full lg:w-4/12 px-4">
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        Select
      </label>
      <select onChange = {(e)=>  {
            setAction(e.target.value);
          }}   >
            <option value=""></option>
            <option value="message">message</option>
            <option value="like">like</option>
            <option value="post">post</option>
            <option value="comment">comment</option>
          </select>
          <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        Message
      </label>
      <input
        type="text"
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        onChange = {(e)=>  {
            setMessage(e.target.value);
          }} 
      />
    
    </div>
    
  </div>
</div>


<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
  Set Duration
</h6>
<div className="flex flex-wrap">

  <div className="w-full lg:w-4/12 px-4">
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        Date and Time
      </label>
      <DatePicker
      showTimeSelect
  selected={date}
  onChange={dateSet}
  minDate={new Date()}
  showDisabledMonthNavigation
  dateFormat="MMMM d, yyyy h:mm aa"
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
