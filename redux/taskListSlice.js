import { createSlice } from "@reduxjs/toolkit";
import TaskManager from "../data/taskManager";

const taskListInitState = {
    taskList : []
}

export default taskListSlice = createSlice({
    name:'taskList',
    initialState:taskListInitState,
    reducers:{
        updateTaskList:(state)=>{
            state.taskList = TaskManager.taskList();
        }
    }
})