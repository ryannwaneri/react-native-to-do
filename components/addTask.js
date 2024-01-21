import { useState } from "react"
import { Button, TextInput, View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native"
import Task from "../data/task";
import TaskManager from "../data/taskManager";
import { useDispatch, useSelector } from "react-redux";
import percentageDoneSlice from "../redux/percentageDoneSlice";
import TaskList from "./taksList";
import taskListSlice from "../redux/taskListSlice";

export default function AddTask() {

    const dispatch = useDispatch();

    const [description,setDescription] = useState("");

    function buttonPress(e){
        TaskManager.addTask(description)
        setDescription("")
        dispatch(percentageDoneSlice.actions.updatePercentage())
        dispatch(taskListSlice.actions.updateTaskList())
    }

    return(
    <View style={styles.container}>
        <Text style={styles.header}>
            ADD NEW TASK
        </Text>
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            placeholder={"Enter the new task description"}
            value={description}
            onChangeText={(e)=>setDescription(e)}
            />
            <Pressable style={styles.button} onPress={buttonPress}>
                <Text style={styles.buttonText}>
                    ADD
                </Text>
            </Pressable>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    header:{
        fontSize:30,
        fontFamily:'VinaSans',
        color:'#515151',
        marginTop: 40
    },
    input:{
        backgroundColor:'white',
        width:'90%',
        height:40,
        borderRadius:10,
        marginBottom: 10,
        paddingStart:10
    },
    inputContainer:{
        backgroundColor:'#86BFA0',
        width:'90%',
        paddingVertical:10,
        alignItems:'center',
        borderRadius:10
    },
    button:{
        width:'30%',
        height:45,
        backgroundColor:'#469E5C',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    },
    buttonText:{
        color:'white',
        fontFamily:'VinaSans',
        fontSize: 25,
        marginBottom: 5
    }
})