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
import MyCheckBox from './components2/MyCheckBox'
//import Output from './components2/Output'
import Output from './components/Output'
import Btn from './components/Btn'
function Main(){
    const [userInput, setUserInput]= useState('');
    const [outputState , setOutputState ] =useState({
    userInputString: '',
    checkboxStatus: false,
    });
  const [checked,setChecked]=useState(false);


  return (
    <View style = {styles.container}>
        <View style={styles.centerView}>
            <TextInput
            placeholder = "enter you password length"
            style={styles.textInput}/>
            <View style={styles.centerView}>
                <MyCheckBox
                text="Capitals"/>
                <MyCheckBox/>
                <MyCheckBox/>
                 <MyCheckBox/>
            </View>

            <View style={styles.centerView}>
            <Output/>
            <Btn/>
            </View>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',

        backgroundColor: '#e0ffff',

        alignItems: 'center',
        },
    textInput:{
        padding: 5,
        borderWidth:2,
        backgroundColor:'#fff8dc',
        borderRadius: 15,
        width:220,
        marginVertical:10,

        },
    centerView:{
        flex:1,
        height:300,
        borderWidth:2,
        justifyContent:'space-between',
        alignItems: 'center',
        borderRadius:15,
        margin:5,


        },
    });


export default Main;