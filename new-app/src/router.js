import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { stateContext } from "./Context/statecontext";
import Login from "./Login/login";
import Home from "./Home/home";
import NewTask from "./NewTask/newTask";
import { initialState, stateReducer } from "./Context/reducer";

const Router = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  //let student = { name: "nivi", age: 28 };

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        {state?.isAuthenticated ? (
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/newTask" element={<NewTask />}></Route>
            <Route path="*" element={<h2>Page not found</h2>}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />}></Route>
            { <Route path = "*" element = {<Navigate to ="/"></Navigate>}></Route>}
            {/*<Route path="*" element={<h2>Page not found</h2>}></Route>*/}
          </Routes>
        )}
      </BrowserRouter>
    </stateContext.Provider>
  );
};

export default Router;
