import React from 'react';


function SideBackground({first, second, noClick}) {
    if (noClick) {
        if (first) {
            return (
                <div className="SideBackground1 noClick " ></div>
              )
        } else {
            return (
                <div className="SideBackground2 noClick " ></div>
              )
        }
    } else {
        if (first) {
            return (
                <div className="SideBackground1" ></div>
              )
        } else {
            return (
                <div className="SideBackground2" ></div>
              )
        }
    }
}

export default SideBackground