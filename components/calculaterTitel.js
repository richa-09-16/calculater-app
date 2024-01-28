import React from "react";

//create functional component.
// takes title as props.value.

const CalculaterTitle = (props) => {

    return (
        <div className="calculater-title">
            {props.value}
        </div>
    )
}

export default CalculaterTitle  
