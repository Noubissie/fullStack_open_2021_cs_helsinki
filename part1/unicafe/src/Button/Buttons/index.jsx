import React,{useContext} from "react"
import {ButtonContext} from "../../index"

let Buttons = ({Onclick,value,children})=>{
    let handleState = useContext(ButtonContext)

    return (
        <button onClick={handleState} value={value}>{children}</button>
    )
}
export default Buttons