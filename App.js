import { createContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { Provider } from 'react-redux';
import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';
import percentageDoneSlice from './redux/percentageDoneSlice';
import taskListSlice from './redux/taskListSlice';
import AddTask from './components/addTask';
import TaskList from './components/taksList';
import Task from './components/task';


export default function App() {
  
  const [fontsLoaded] = useFonts({
    'VinaSans':require('./assets/fonts/VinaSans-Regular.ttf')
  })

  useEffect(()=>{
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare()
  },[])

  if(!fontsLoaded){
    return undefined
  }else{
    SplashScreen.hideAsync();
  }

  const Store = configureStore({
    reducer: combineReducers({
      percentageDoneReducer: percentageDoneSlice.reducer,
      taskListReducer: taskListSlice.reducer
    }),
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
  })


  return (
    <Provider store={Store}>
        <SafeAreaView style={styles.container}>
            <Header/>
            <AddTask/>
            <TaskList/>
        </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
