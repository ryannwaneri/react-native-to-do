import { useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Task from "./task";

let list = []

export default function TaskList(){

    const taskList = useSelector((state)=>state.taskListReducer.taskList); 
    const dispatch = useDispatch();

    list = taskList

    return(
        <View style={styles.container}>
            <Text style={styles.header}>
                Tasks
            </Text>
            <FlatList
                data={taskList}
                renderItem={(task)=><Task data={task.item}/>}
                keyExtractor={(task)=>task.Id}
                ListEmptyComponent={(task)=><EmptyList/>}
                style={styles.flatList}
            />
        </View>
    )
}

function EmptyList(){
    return(
        <Text style={styles.emptyListText}>
            {`You have no tasks. try adding one :)`}
        </Text>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginTop:20,
        flex:1
    },
    header:{
        fontFamily:'VinaSans',
        fontSize:26,
        color:'#515151',
        marginStart:20,
        marginBottom:10,
    },
    emptyListText:{
        fontFamily:'VinaSans',
        fontSize:15,
        color:'lightgrey',
        textAlign:'center',
        marginTop:150
    },
    flatList:{
        marginBottom:20
    }
})