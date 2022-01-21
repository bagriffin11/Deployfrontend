import React from "react";
import {Redirect} from "react-router-dom";

// components

import MapExample from "components/Maps/MapExample.js";

export default function Maps({authorized}) {
  if (!authorized){
    return <Redirect to="/" />
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MapExample />
          </div>
        </div>
      </div>
    </>
  );
}
