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
        placeholder="type me "
        value = {userInput}
        onChangeText = {setUserInput}/>

        </View>
        );


    }

const styles = StyleSheet.create({
    inputBox: {
        padding: 10,
        marginVertical: 20,
        fontSize: 25,
        fontWeight: '600',

    },
container:{
    justifyContent:'center',
    margin:10,
    backgroundColor:'#f0f8ff',
    border:'#000000',
    borderWidth:4,
    borderRadius:10,

    }
});
export default MyInputBox;