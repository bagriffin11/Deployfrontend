import React from "react";
import 'assets/styles/Popupbus.css'

function Popupbusiness(props) {
    return (props.trigger) ? (
        <div styles={{ height: '500px', overflowY: 'scroll' }} >

        <div className= "popup">
            <div className="popup-inner">
                <button className = "close-btn" onClick = {() => props.setTrigger(false)}>
                    close
                </button>
                {props.children}
            </div>
        </div>
        </div>
    ) : "";
}

export default Popupbusiness