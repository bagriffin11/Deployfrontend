
import {React, useState, useEffect, useContext} from 'react';
import axios from "axios";
import {UserId} from "Global/Variables.js";
import {useHistory} from "react-router-dom";

// components

export default function CardBusinessTable() {
  let history = useHistory();

    const [businesses, setBusinesses] = useState([]);
    const id = useContext(UserId);

    useEffect(() => {
        axios.get(`http://localhost:3001/business/getUserId/${id}`).then((response) => {
           setBusinesses(response.data);
        })
      },[]);

      useEffect(() => {
        axios.get(`http://localhost:3001/igaccount/getUserId/${id}`).then((response) => {
           setBusinesses(response.data);
        })
      },[]);

      const onSubmit = () => {
        history.push("/user/accountinfo")
};

      const deleteBusiness = (id) => {
        axios.delete(`http://localhost:3001/business/delete/${id}`).then(()=> {
          history.push(`/user/accounts/${id}`)
        });
        axios.delete(`http://localhost:3001/task/delete/${id}`).then(()=> {
          history.push(`/user/accounts/${id}`)
        });
        
      };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Accounts</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick = {onSubmit}
            >
              Add
            </button>
          </div>
        </div>


        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Businesses
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Instagram
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Facebook
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Email
                </th>
              </tr>
            </thead>

            <tbody>
                {businesses.map((value, key) => {
                  return(
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  {value.business}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {value.igusername}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {value.fbusername}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  
                  {value.emailusername}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <button onClick = {() => {deleteBusiness(value.id)}}>
                    Delete
                  </button>
                </td>
              </tr>
               );
                  })}
            </tbody>
          </table>
        </div>
        


                 
      </div>
    </>
  );
}
