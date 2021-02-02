import React from "react"

let Statistics =  ({keyHold,value}) =>{

    

      return (
          <React.Fragment>
              <tr>
                  <td>{keyHold}</td>
                  <td>{value}</td>
                </tr>
          </React.Fragment>
      )
}
export default Statistics

