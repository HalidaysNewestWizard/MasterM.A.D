import React,{useState} from 'react';
import {StyleSheet,
    View,
    TextInput} from 'react-native';
// props to replace useState Hook
type myInputPropType = {
    userInput : string,
    setUserInput : (txt : string) => void ,
       }



function MyInputBox(props : myInputPropType):React.JSX.Element{
    // local state to keep track of the user
   // const [userInput, setUserInput]= useState('');
   // Replace ^^^^^^^^^^^^^^^ with  props
   const userInput = props.userInput;
   const setUserInput = props.setUserInput;

    return(
        <View style= {styles.container}>
        <TextInput
        style={styles.inputBox}
        placeholder="Password Length (8-16) "
        value = {userInput}
        onChangeText = {setUserInput}/>

        </View>
        );


    }

const styles = StyleSheet.create({
    inputBox: {
        height: 50,
        width: 300,
        textAlign: 'center',
        marginVertical: 30,
        fontSize: 25,
        fontWeight: '500',

    },
container:{
    width: 300,
    height: 50,
    justifyContent:'center',
    margin:10,
    backgroundColor:'#f0f8ff',
    borderColor:'#000000',
    borderWidth:4,
    borderRadius:10,

    }
});
export default MyInputBox;