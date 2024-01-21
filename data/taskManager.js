import Task from "./task";
import 'react-native-get-random-values';
import {v4 as uuid4} from 'uuid';

let taskList = [];

function generateNewId(){
    let newId = uuid4();
    let checkVal = taskList.filter(task=>newId===task.Id).length;
    if (checkVal.length>0){
        return generateNewId();
    }
    return newId;
}

function calculatePercentageDone(){
    let totalTasksNumber = taskList.length;
    let totalTasksDoneNumber = taskList.filter((task)=>task.isDone==true).length;

    if(totalTasksDoneNumber>0){
    let percentageDone = (+(+totalTasksDoneNumber / +totalTasksNumber) * 100).toFixed(0 );
    return percentageDone+"%"
    } else{
        return "0%"
    }
}

function addTask(description){
    let task = new Task(generateNewId(), false, "----", description);
    taskList.push(task);
}

function toggleTask(Id){
    for(let task in taskList){
        if(taskList[task].Id===Id){
            taskList[task].isDone = !taskList[task].isDone
            taskList[task].timeCompleted = taskList[task].isDone ? new Date().toLocaleTimeString() : "----";
        }
    }
}

function timeCompleted(Id){
    for(let task in taskList){
        if(taskList[task].Id===Id){
            return taskList[task].timeCompleted
        }
    }
}

function deleteTask(Id){
    for(let task in taskList){
        if(taskList[task].Id===Id){
            taskList.splice(task,1)
        }
    }
}

const TaskManager = {
    calculatePercentageDone: () => {
        return calculatePercentageDone();
    },
    addTask: (description) => {
      addTask(description);
    },
    taskList: () => {
        return taskList.slice();
    },
    toggleTask:(Id) => {
        toggleTask(Id);
    },
    timeCompleted:(Id) => {
        return timeCompleted(Id)
    },
    deleteTask: (Id) => {
        deleteTask(Id)
    }
}

export default TaskManager;