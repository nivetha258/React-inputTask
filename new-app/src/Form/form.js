import React , {useState}from 'react'
import "./form.css"
const Form = (props) => {

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [priority,setPriority] = useState("")
    const [isComplete,setIsComplete] = useState("")
    const [flag,setflag] = useState(false)

    function getInput(event){ 
        setflag(true)
       if(event.target.name == "name") {setName(event.target.value)}
       if(event.target.name == "description") {setDescription(event.target.value)}
       if(event.target.name == "priority") {setPriority(event.target.value)}
       if(event.target.name == "isComplete") {setIsComplete(event.target.value)}     
    }

    function submit(a){
        a.preventDefault()
        if(name == "" || description == ""|| priority == ""|| isComplete == ""){ 
            return
        }
        else {props.formValues({name:name,
                                description:description,
                                priority:priority,
                                isComplete:isComplete
                                })
            }
    }
    
  return (
    <div>       
        <form onSubmit={submit}>
        <h2>FORMS</h2>
            <div className=''>
                <div className='row'>
                    <p className='labels'>Task Name</p>
                    <input 
                        type = {"text"} 
                        value ={name} 
                        name = {"name"}
                        onChange = {getInput}
                    ></input>
                   {name =="" && flag && <p className='error'>Task name is empty</p>}
                </div>
                <div className='row'>
                    <p className='labels'>Task Description</p>
                    <div>
                        <textarea 
                            value = {description}
                            onChange = {getInput} 
                            name={"description"} rows={2} cols={30}
                        ></textarea>
                        {description =="" && flag && <p className='error'>Task name is empty</p>}
                    </div>                  
                </div>
                <div className='row'>
                    <p className='labels'>Priority</p>
                    <label htmlFor={"highPriority"}>High</label>
                    <input 
                        id={"highPriority"} 
                        //checked
                        type={"radio"} 
                        onChange ={getInput} 
                        value = {"High"}
                        name={"priority"}
                    ></input>
                    <label htmlFor={"lowPriority"}>Low</label>
                    <input 
                        id={"lowPriority"} 
                        type={"radio"} 
                        onChange ={getInput} 
                        value = {"Low"} 
                        name={"priority"}
                    ></input>
                    {priority =="" && flag && <p className='error'>Task priority is empty</p>}
                </div>
                <div className='row'>
                    <p className='labels'>Iscomplete</p>
                    <label htmlFor={"completedyes"}>Yes</label>
                    <input 
                        type={"radio"} 
                      //  checked
                        id={"completedyes"}  
                        onChange ={getInput}
                        value={"Yes"} 
                        name={"isComplete"}
                    ></input>
                    <label htmlFor={"completednot"}>No</label>
                    <input 
                        type={"radio"} 
                        id={"completednot"} 
                        onChange ={getInput} 
                        value ={"No"} 
                        name={"isComplete"}
                    ></input>
                    {isComplete =="" && flag && <p className='error'>Task completion is empty</p>}
                </div>
                <div>
                    <input 
                        type="submit" 
                    ></input>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form