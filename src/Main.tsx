import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Clipboard,
} from "react-native";

import MyCBox from './components/MyCheckBox';

import Btn from './components/Btn';

import OutPut from './components/Output';

import MyTxtBox from './components/MyInputBox';

import * as password from './utility/passwordGenerator';





function Main() : React.JSX.Element {

//input box state
    const [userInput, setUserInput]= useState('');


//checkbox states
    const [UpperCase,setUpperCase]=useState(false);

    const [LowerCase,setLowerCase]=useState(false);

    const [Specials,setSpecials]=useState(false);

    const[Numerals,setNumerals]=useState(false);

    const [generatedPassword, setGeneratedPassword] = useState('');
    
    function Reset(){
        setUserInput('');
        setNumerals(false);
        setSpecials(false);
        setLowerCase(false);
        setUpperCase(false);
        console.log('reset');
    };




    return (
        <View style={styles.Main}>
            <View>
                <Text >Password Generator</Text>
                <MyTxtBox
                userInput={userInput}
                setUserInput={setUserInput}/>
            </View>

            <View>
               <MyCBox
                title='Upper Case Letters'
                checkedStatus={UpperCase}
                updateCheckedStatus={setUpperCase}/>


                <MyCBox
                title='Lower Case Letters'
                checkedStatus={LowerCase}
                updateCheckedStatus={setLowerCase}
                />

                <MyCBox
                title='Special Characters'
                checkedStatus={Specials}
                updateCheckedStatus={setSpecials}
                />

                <MyCBox
                title='Numbers'
                checkedStatus={Numerals}
                updateCheckedStatus={setNumerals}
                />
            </View>


                <OutPut
                placeholder="make a selection"
                generatedPassword={generatedPassword}
                handleCopy={() => {
                    Clipboard.setString(generatedPassword);
                    console.log('Copy button pressed');
                }}
                />
              <View>
    <Btn
    type= {1}
    title='Generate Password'
    onPress={() => {
        
       const generatedPassword = password.generatePasswordString({
            length: parseInt(userInput), 
            includeUpper: UpperCase,
            includeLower: LowerCase,
            includeNumber: Numerals,
            includeSymbol: Specials,
         
        });
        console.log('Generate Password button pressed');
       
      setGeneratedPassword(generatedPassword); 
      console.log('Generated Password:', generatedPassword);
    }}    
    />
    <Btn
    type={2}
    title= "RESET"
    onPress={()=>{Reset()}}
    />


              </View>


        </View>
    );
}
const styles =StyleSheet.create({
    Main:{

        backgroundColor:'#fff8dc',
        height:'100%',
        },
    textBox:{
        borderWidth: 2,

        }


    });
    

export default Main;