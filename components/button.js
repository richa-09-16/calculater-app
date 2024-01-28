import React from "react"

//creat our button component as a functional component

const Button = (props) => {
    return (
        <input type="button" value={props.label} />
        

        )
}

export default Button