import React from 'react';
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



function toDoList({tasks}){

    return(


                  <View style={styles.task}>
                 {tasks.map((task, index)=> (<View key={index} style={[styles.task,styles.toFin]}><Text style={[styles.taskText,styles.toFinTxt]}>{task}</Text></View>))}

                  </View>

        );
        }

    const styles = StyleSheet.create({
      task: {
          margin:5,
        padding: 10,
        borderWidth: 1,
        borderRadius:15,
        borderColor: '#008000',
      },
      completed: {
        backgroundColor: '#00ffff',
      },
      taskText: {
        fontSize: 16,
        color: 'red',

      },
    toFinTxt:{
        color:'#7fff00',
        fontWeight: 'bold',
        fontSize:16,
        },
    toFin:{
        backgroundColor:'#9932cc',

        },
  container:{
     backgroundColor:'#e0ffff',
      },

  });
    export default toDoList;