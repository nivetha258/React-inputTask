import React, { useState } from "react";
import "./list.css";
const List = (props) => {
  const [all, setAll] = useState(true);
  const [priorityHigh, setPriorityHigh] = useState(false);
  const [priorityLow, setPriorityLow] = useState(false);
  const [completeYes, setCompleteYes] = useState(false);
  const [completeNot, setCompleteNot] = useState(false);

  function filterList(event) {
    if (event.target.name == "filterall") setAll(!all);
    if (event.target.name == "filterHigh") setPriorityHigh(!priorityHigh);
    if (event.target.name == "filterLow") setPriorityLow(!priorityLow);
    if (event.target.name == "filterYes") setCompleteYes(!completeYes);
    if (event.target.name == "filterNo") setCompleteNot(!completeNot);
  }

  const filteredArray = props.array.filter((a) => {
    if (
      all ||
      (a.priority == "High" && priorityHigh) ||
      (a.priority == "Low" && priorityLow) ||
      (a.isComplete == "Yes" && completeYes) ||
      (a.isComplete == "No" && completeNot)
    ) {
      return true;
    }
  });
console.log("list render")
  const changeCompletion = (event,id,name,value) => {
    props.changeInput(id, name,value);
  };

  const removeTask = (event) => {
    const id = event.currentTarget.parentNode.getAttribute("id");
    props.removeTask(id);
  };

  return (
    <div className="main">
      <h2>Filter List </h2>
      <div>
        <label>
          <input
            type={"checkbox"}
            name="filterall"
            defaultChecked={true}
            onChange={filterList}
          ></input>
          All
        </label>
        <label>
          <input
            type={"checkbox"}
            name="filterHigh"
            onChange={filterList}
          ></input>
          Priority High
        </label>
        <label>
          <input
            type={"checkbox"}
            name="filterLow"
            onChange={filterList}
          ></input>
          Priority low
        </label>
        <label>
          <input
            type={"checkbox"}
            name="filterYes"
            onChange={filterList}
          ></input>
          Completed yes
        </label>
        <label>
          <input
            type={"checkbox"}
            name="filterNo"
            onChange={filterList}
          ></input>
          Completed no
        </label>
      </div>
      <h2>Task List</h2>
      <div className="tasklist">
        {filteredArray.map((a, i) => (
          <div key={i} id={i} className="task">
            <h3>{a.name}</h3>
            <p>{a.description}</p>
            <p>Priority:{a.priority}</p>
            <p>completion status:{a.isComplete}</p>
            <p>MODIFY</p>
            <label htmlFor={"completedYesChange"}>Yes</label>
            <input
              type={"radio"}
              id={"completedYesChange"}
              onChange ={(e)=>changeCompletion(e,i,"isComplete","Yes")}
              value={"Yes"}
              checked={a.isComplete == "Yes" ? true : false}
              name={"isComplete" + "*" + i}
            ></input>
            <label htmlFor={"completedNotChange"}>No</label>
            <input
              type={"radio"}
              id={"completednot"}
              onChange = {(e)=>changeCompletion(e,i,"isComplete","No")}
              value={"No"}
              checked={a.isComplete == "No" ? true : false}
              name={"isComplete" + "*" + i}
            ></input>
            <button onClick={removeTask}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
