import React from "react";
import {Redirect} from "react-router-dom";

// components

import CardTable from "components/Cards/CardTable.js";

export default function Tables({authorized}) {
  if (!authorized){
    return <Redirect to="/" />
  }
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}
