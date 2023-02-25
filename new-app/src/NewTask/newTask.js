import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { stateContext } from "../Context/statecontext";

const NewTask = () => {


  const {state, dispatch} = useContext(stateContext);

const array = state.taskList;

  //const [array, setArray] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [isComplete, setIsComplete] = useState("");
  const [flag1, setflag1] = useState(false);
  const [flag2, setflag2] = useState(false);
  const [flag3, setflag3] = useState(false);
  const [flag4, setflag4] = useState(false);

  // useEffect(() => {
  //   let array1 = JSON.parse(localStorage.getItem("array"));
  //   setArray(array1);
  // }, []);

  // useEffect(()=>{
  // localStorage.setItem("array", JSON.stringify(array))
  // },[array])

  //localStorage.clear()

  function getInput(event) {
    if (event.target.name == "name") {
      setflag1(true);
      setName(event.target.value);
    }
    if (event.target.name == "description") {
      setflag2(true);
      setDescription(event.target.value);
    }
    if (event.target.name == "priority") {
      setflag3(true);
      setPriority(event.target.value);
    }
    if (event.target.name == "isComplete") {
      setflag4(true);
      setIsComplete(event.target.value);
    }
  }

  function submit(a) {
    a.preventDefault();
    let found = array.find((a) => a.name === name);
    if (name == "" || description == "" || priority == "" || isComplete == "") {
      setflag1(true);
      setflag2(true);
      setflag3(true);
      setflag4(true);
      return;
    } else if (found) return;
    else {
      dispatch({
        type: "newTask",
        payload:{
          name: name,
          description: description,
          priority: priority,
          isComplete: isComplete,
        },
      });
    }
    // else {
    //   setArray([
    //     ...array,
    //     {
    //       name: name,
    //       description: description,
    //       priority: priority,
    //       isComplete: isComplete,
    //     },
    //   ]);
    // }
  }

  return (
    <div>
      <div className="header">
        <h2>Enter NewTask</h2>
        <p>
          {" "}
          <Link to="/home">Home</Link>
        </p>
      </div>

      <form onSubmit={submit}>
        <h2>FORMS</h2>
        <div className="">
          <div className="row">
            <p className="labels">Task Name</p>
            <input
              type={"text"}
              value={name}
              name={"name"}
              onChange={getInput}
            ></input>
            {name == "" && flag1 && <p className="error">Task name is empty</p>}
          </div>
          <div className="row">
            <p className="labels">Task Description</p>
            <div>
              <textarea
                value={description}
                onChange={getInput}
                name={"description"}
                rows={2}
                cols={30}
              ></textarea>
              {description == "" && flag2 && (
                <p className="error">Task name is empty</p>
              )}
            </div>
          </div>
          <div className="row">
            <p className="labels">Priority</p>
            <label htmlFor={"highPriority"}>High</label>
            <input
              id={"highPriority"}
              type={"radio"}
              onChange={getInput}
              value={"High"}
              name={"priority"}
            ></input>
            <label htmlFor={"lowPriority"}>Low</label>
            <input
              id={"lowPriority"}
              type={"radio"}
              onChange={getInput}
              value={"Low"}
              name={"priority"}
            ></input>
            {priority == "" && flag3 && (
              <p className="error">Task priority is empty</p>
            )}
          </div>
          <div className="row">
            <p className="labels">IsCompleted</p>
            <label htmlFor={"completedyes"}>Yes</label>
            <input
              type={"radio"}
              id={"completedyes"}
              onChange={getInput}
              value={"Yes"}
              name={"isComplete"}
            ></input>
            <label htmlFor={"completednot"}>No</label>
            <input
              type={"radio"}
              id={"completednot"}
              onChange={getInput}
              value={"No"}
              name={"isComplete"}
            ></input>
            {isComplete == "" && flag4 && (
              <p className="error">Task completion is empty</p>
            )}
          </div>
          <div>
            <input type="submit"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
