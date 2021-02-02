import React from "react"
import Buttons from "./Buttons"

let Button = ({handleState})=>{

    return (
        <React.Fragment>
            <Buttons  value="good">Good</Buttons>
            <Buttons value="neutral">Neutral</Buttons>
            <Buttons value="bad">Bad</Buttons>
        </React.Fragment>
    )
}
export default Button