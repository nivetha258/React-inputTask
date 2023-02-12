import React,{useState}from 'react'
import "./list.css"
const List = (props) => {

    const [filteredArray,setFilteredArray] = useState([])
    const [all,setAll]= useState(true);
    const [priorityHigh,setPriorityHigh]= useState(false);
    const [priorityLow,setPriorityLow]= useState(false);
    const [completeYes,setCompleteYes]= useState(false);
    const [completeNot,setCompleteNot]= useState(false);

     const filterArray =()=>setFilteredArray( (props.array.filter((a)=>{
        console.log(props.array)
        if(
        (all)||
        (a.priority == "High" && priorityHigh)||
        (a.priority == "Low" && priorityLow)||
        (a.isComplete == "Yes" && completeYes)||
        (a.isComplete == "No" && completeNot)
        ){
            console.log(a)
            return true}

         } )))


    const filterList = (event)=>{
        console.log(event)
       event.target.name == "filterall" ? setAll(!all) : setAll(all )
        event.target.name == "filterHigh" ? setPriorityHigh(!priorityHigh):setPriorityHigh(priorityHigh)
        event.target.name == "filterLow" ? setPriorityLow(!priorityLow): setPriorityLow(priorityLow)
        event.target.name == "filterYes" ? setCompleteYes(!completeYes): setCompleteYes(completeYes)
        event.target.name == "filterNo" ? setCompleteNot(!completeNot): setCompleteNot(completeNot)
    
    }
   // console.log(all,priorityHigh,priorityLow,completeNot,completeYes)
   const setPriority =(event)=>{
                const id = event.currentTarget.parentNode.getAttribute("id");
                const value = event.target.value;
                const property =event.target.name
                props.changeInput(id,value,property);
   }
   
  return (
    <div className='main'>
        <h2>Filter List</h2>
        <div>
            <label>All <input type={'checkbox'} name ="filterall" defaultChecked ={true} onClick={filterList}></input></label>
            <label>Priority High <input type={'checkbox'} name ="filterHigh" onClick={filterList} ></input></label>
            <label>Priority low <input type={'checkbox'} name ="filterLow" onClick={filterList}></input></label>
            <label>Complete yes <input type={'checkbox'} name ="filterYes" onChange={filterList}></input></label>
            <label>Complete no <input type={'checkbox'} name ="filterNo" onChange={filterList}></input></label>         
            <button onClick={filterArray}>ok</button>
        </div>
        <h2>Task List</h2>
        <div className='tasklist'>           
            {filteredArray.map((a,i)=>(   
                <div key={i} id ={i} className="task">
                    <h3>{a.name}</h3>
                    <p>{a.description}</p>
                    <p>Priority:{a.priority}</p>
                    <p>completion status:{a.isComplete}</p>
                    <p>MODIFY</p>
                    <label htmlFor={"completedYesChange"}>Yes</label>
                    <input 
                        type={"radio"} 
                        id={"completedYesChange"}  
                        onChange ={setPriority}
                        value={"Yes"} 
                        name={"isComplete"}
                    ></input>
                    <label htmlFor={"completedNotChange"}>No</label>
                    <input 
                        type={"radio"} 
                        id={"completednot"} 
                        onChange ={setPriority} 
                        value ={"No"} 
                        name={"isComplete"}
                    ></input>
                </div>
            ))}
        </div>
    </div>
  )
}

export default List