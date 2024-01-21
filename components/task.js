import { View, StyleSheet, Text, Pressable, TouchableWithoutFeedback } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TaskManager from "../data/taskManager";
import taskListSlice from "../redux/taskListSlice";

export default function Task({data}){

    const dispatch = useDispatch();

    const [isChecked,toggleChecked] = useState(data.isDone);
    const [timeCompleted,setTimeCompleted] = useState(data.timeCompleted)

    const setChecked = () => {
        toggleChecked((previous)=>!previous)
        TaskManager.toggleTask(data.Id)
        setTimeCompleted(TaskManager.timeCompleted(data.Id))
        dispatch(percentageDoneSlice.actions.updatePercentage())
    }

    const deleteTask = () => {
        TaskManager.deleteTask(data.Id)
        dispatch(taskListSlice.actions.updateTaskList())
        dispatch(percentageDoneSlice.actions.updatePercentage())
    }


    return(
        <View style={styles.container_undone}>
            <View>
                <Checkbox
                    value={isChecked}
                    color='#003a1a'
                    onValueChange={()=>setChecked()}
                    style={styles.checkbox}
                />
            </View>
            <View>
                <Text style={styles.description}>
                    {data.description}
                </Text>
                <View style={styles.text_container}>
                    <Text style={styles.time_completed}>
                        {timeCompleted}
                    </Text>
                    <Pressable style={styles.delete} onPress={()=>deleteTask()}>
                        <Text style={styles.delete_text}>
                            Delete
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_undone:{
        width:'90%',
        backgroundColor:'green',
        alignSelf:'center',
        backgroundColor:'#ecfff4',
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection:'row',
        gap:10,
        borderRadius:10,
        marginBottom:5
    },
    description:{
        fontSize:15,
        fontWeight:'bold',
        marginEnd:30
    },
    checkbox:{
        marginTop:5
    },
    time_completed:{
        fontSize:13,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:3,
        color:'#003a1a',
        backgroundColor:'#ace3c3',
        paddingHorizontal:15,
        paddingTop:5,
        borderRadius:5
    },
    text_container:{
        flexWrap:'wrap',
        flexDirection:'row'
    },
    delete:{
        fontSize:13,
        fontWeight:'bold',
        borderStyle:'solid',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius:5,
        backgroundColor:'transparent',
        marginTop:10,
        marginBottom:3,
        marginStart:8,
        paddingHorizontal:15,
        paddingVertical:3,
    },
    delete_text:{
        textAlign:'center',
        color:'red'
    }

})