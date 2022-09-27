import React, { useState } from "react";
import { useDispatch } from "react-redux";
import  {addTask} from "../redux/todoSlice";
import './style.css';



const Input = () =>{

    const dispatch = useDispatch()
    const [data,setData ]= useState('')



const changeHandler = (event) =>{
setData(event.target.value)
}

const onClickHandler = () =>{
dispatch(addTask(data))
}



    return(
        <div className="input" value={data} onChange={changeHandler}>
<h1 className="top">Todo List</h1>
<input type='text' className="in"/> 
<button onClick={onClickHandler} className="addBtn">Add</button>
 
        </div>
    )
}



export default Input;