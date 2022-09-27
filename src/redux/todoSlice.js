import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice (
    {
        name:"todo",
        initialState:{
            task:[]
        },
        reducers:{
        addTask : (state,action)=>{
           
            state.task.push(action.payload)
        },
        delTask:(state,action)=>{
           state.task.splice(action.payload,1)
        }
        }
    }
)

export const {addTask,delTask}= todoSlice.actions

export default  todoSlice.reducer