import React from "react";
import { useDispatch } from "react-redux";
import { delTask } from "../redux/todoSlice";
import './style.css';




const  Todo = ({task,index}) =>{

    const dispatch = useDispatch()

    const onDel= () =>{
        dispatch(delTask(index))
    }

    

     

    return(
      
        <div className="todo">
            <h1 className="task">{task}</h1>
            <input type="date" /><br/>
            <textarea type="text" className="cell">Description</textarea><br/>
            <button onClick={onDel} className="delBtn">Delete</button>
           

        </div>
    )
}

export default Todo;