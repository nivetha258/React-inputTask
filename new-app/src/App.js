import React, { useState, useEffect } from "react";
import Form from "./Form/form";
import List from "./List/list";

const App = () => {
  const [array, setArray] = useState([]);

  function getFormValues(values) {
     setArray(values);
  }

  const changeInput = (index,property,value) => {
    let newArray = array.map((obj, i) => {
      if (i == index) {
        obj[property] = value;
      }
      return obj;
    });
    setArray(newArray);
  };

  const removeTask = (index)=>{
    let newArray = array.filter((obj, i) => i != index)
    setArray(newArray);
  }

  return (
    <div>
      <Form formValues={getFormValues} />
      <div>
        {array.length > 0 && <List array={array} changeInput={changeInput} removeTask ={removeTask}/>}
      </div>
    </div>
  );
};

export default App;
