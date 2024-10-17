import React from "react";
import {
    View,
    Text,
    StyleSheet
     } from 'react-native';


type outputProps ={
    userInputString : string,
    CheckboxStatus : Boolean
    };


 function Output(props : outputProps):React.JSX.Element{

             const userInputString = props.userInputString;
              const CheckboxStatus = props.checkboxStatus;

     return (


         <View style={styles.output} >
         <Text style = {styles.outputTxt}>{userInputString} </Text>

         </View>
         );

     }
 const styles = StyleSheet.create({
  output:
  {
      margin : 15,
      borderWidth : 2,
      borderRadius : 10,
      padding : 10,
      width: 200,


  },
  outputTxt :
  {
      fontWeight:'600',
      fontSize : 25,
      marginVertical : 10,
       color : 'red',

  }

});
export default Output;

