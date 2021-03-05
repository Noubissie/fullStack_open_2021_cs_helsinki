
const PersonForm = ({style,handleNameInput,newName,handleNumberInput,newNumber,addNewName})=>{

    return(
        <div>
            <form >
        
                <div>
                name: <input style={style} onChange={handleNameInput} value={newName}/>

                <div>number: <input style={style} onChange={handleNumberInput} type="number" value={newNumber}/></div>
                </div>
                <div>
                <button  type="submit" onClick={addNewName} disabled={newName && newNumber ? false :true}>add</button>
                </div>
            </form>
        </div>
    )
}
export default PersonForm