import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";



const  Display = () =>{

    const tasks =useSelector ((state) => state.todo.task)

    return(
        <div className="display">
           {
            tasks.map((task,index)=>{
                return <Todo task={task} index={index}/>
            })
           }

        </div>
    )
}

export default  Display;