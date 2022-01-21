import React from "react";
import {Redirect} from "react-router-dom";

// components

import CardTableTaskId from "components/Cards/CardTableTaskId.js";
import CardLineChartId from "components/Cards/CardLineChartId.js";

export default function Business({authorized}) {
 /* if (!authorized){
    return <Redirect to="/" />

  } */
  return (
    <>
        <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChartId />
        </div>
             <CardTableTaskId />
        </div>
    </>
  );
}
