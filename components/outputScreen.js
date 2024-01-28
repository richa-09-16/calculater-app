import React from "react"
import OutputScreenRow from "./outputScreenRow"

// functional component 
// use to hold two screen rows

const OutputScreen = ()  => {
    return (
    <div className="screen">
        <OutputScreenRow />
        <OutputScreenRow />

    </div>

    )
}

export default OutputScreen