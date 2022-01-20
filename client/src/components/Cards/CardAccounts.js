import {React, useState}  from "react";
import PropTypes from "prop-types";
import Popupig from "components/Popup/Popupig.js";
//import Accountselect from "views/auth/Accountselect.js"
import 'assets/styles/hover.css'
import Account from "layouts/Account.js"

export default function CardAccounts(
  {
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
  
}) {
  const [buttonPopup, setButtonPopup] = useState(false);
 /* const [timedPopup, setTimedPopup] = useState(false);

 

  useEffect(() =>{
 setTimeout(() => {
    setTimedPopup(true);
  }, 3000);
  },[]); */

  

  return (
    <>
    <div>

    
      <div hoverable onClick={() => setButtonPopup(true)} className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg e">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
      <Popupig trigger = {buttonPopup} setTrigger={setButtonPopup}>
        <h3>Choose Account:</h3>
          <Account />
      </Popupig>


      </div>
    </>
     

  );
}

CardAccounts.defaultProps = {
  statSubtitle: "Instagram",
  statTitle: "5stepcarpetcare",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since yesterday",
  statIconName: "far fa-instagram",
  statIconColor: "bg-red-500",
};

CardAccounts.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
