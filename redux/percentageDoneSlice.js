import TaskManager from '../data/taskManager.js';
import { createSlice } from '@reduxjs/toolkit';

const percentageDoneInitialState = {
    percentageDone:"----"
  }

export default percentageDoneSlice = createSlice({
    name:'percentageDone',
    initialState:percentageDoneInitialState,
    reducers:{
        updatePercentage:(state)=>{
            state.percentageDone = TaskManager.calculatePercentageDone();
        }
    }
})
