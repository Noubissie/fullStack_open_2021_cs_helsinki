
const Filter = ({handlesearch,search})=>{

    return(
        <div>
            add a new: <input  onChange={handlesearch} value={search}/>
        </div>
    )
}

export default Filter