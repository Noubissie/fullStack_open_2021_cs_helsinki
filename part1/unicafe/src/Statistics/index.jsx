import React from "react"
import Statistic from "./Statistic"

let Statistics = ({state})=>{

    return(
        <React.Fragment>
            <Statistic keyHold="good" value={state["good"]}/>
            <Statistic keyHold="neutral" value={state.neutral}/>
            <Statistic keyHold="bad" value={state.bad}/>
            <Statistic keyHold="average" value={state.average()}/>
            <Statistic keyHold="positive" value={state.positive()}/>
        </React.Fragment>
    )
}
export default Statistics