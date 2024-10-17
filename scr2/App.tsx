/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


//const [task , setTask ] = useState('');




function App() {
    const [inputTxt, setInputTxt]= useState("");
    const [list, setList] = useState(tasks = [
            "Do the laundry",
            'Walk the dog',
            'Go to the gym',
                        ]
        );
  return (
    <SafeAreaView style = {styles.container}>
     <ToDoList tasks={tasks} />
     <ToDoForm inputTxt ={inputTxt} setInputTxt = {setInputTxt}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#e0ffff',
        },
    });

export default App;
