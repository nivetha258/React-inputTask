import React,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { stateContext } from "../Context/statecontext";
import "./login.scss";

const Login = () => {

const navigate = useNavigate();
const {state,dispatch} = useContext(stateContext);

const [loginUserName,setUserName] = useState("")
const [loginpassword,setPassword] = useState("")
const [flag1, setflag1] = useState(false);
const [flag2, setflag2] = useState(false);

const usersList =[
    {name:"nivetha",password:123},
    {name:"nithya",password:147},
    {name:"saran",password:147},
    {name:"nithya",password:145},
]

function getInput(e){
    if(e.target.name == "username"){
        setflag1(true)
        setUserName(e.target.value)
    }
    if(e.target.name == "password"){
        setflag1(true)
        setPassword(e.target.value)
    }
}

function checkUser (){

    if(loginUserName == "") setflag1(true)
    if(loginpassword == "") setflag2(true)

   let found =  usersList.find((user)=> user.name === loginUserName && user.password == loginpassword)
   if(found){ 
    
    dispatch({
      type:"login",
      payload:true
    })
    navigate("/home")
  }
   else return
    
}


  return (
    <div className="login-page">
        <div className="login-section">
        <h2>User Login</h2>
        <div className="input">
        <label >UserName:</label>
        <input type ="text" value = {loginUserName} name ="username" onChange ={getInput}></input>
        {loginUserName == "" && flag1 && <p className="error">UserName is empty</p>}
        </div>
        <div className="input">
        <label>Password:</label>
        <input type ="password" value = {loginpassword} name = "password" onChange ={getInput}></input>
        {loginpassword == "" && flag2 && <p className="error">Password is empty</p>}
        </div>
        <button onClick={checkUser}>login</button>
      </div>
    </div>
  );
};

export default Login;
