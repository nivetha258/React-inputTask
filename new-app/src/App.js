import React,{useState,useEffect} from 'react'
import Form from './Form/form'
import List from './List/list'
import Filter from './Filter/filter'


const App = () => {

    const [array,setArray] = useState([])

  function getFormValues(values){
    console.log([...array,values])
      setArray([...array,values])
  }
   const changeInput = (index,value,property)=>{
     console.log(index,value,property)
     console.log(array)
      let newArray =  array.map((obj,i)=>{
        console.log(i,index,i==index)
          if(i == index){
            obj[property]=value;            
          }
           return obj
        })
        setArray(newArray)
   }

  return (
    <div>
      <Form formValues = {getFormValues}/>
      <div>
        <List array={array} changeInput = {changeInput}/>
        <Filter/>
      </div>     
    </div>
  )
}

export default App