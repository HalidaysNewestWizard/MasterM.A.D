import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native";
import MyCBox from './components/MyCheckBox';
import Btn from './components/Btn';
import OutPut from './components/Output';
import MyTxtBox from './components/MyInputBox';

function Reset(){
    setNumerals(false);
    setSpecials(false);
    setLowerCase(false);
    setUpperCase(false);
    };



function Main() : React.JSX.Element {

//input box state
    const [userInput, setUserInput]= useState('');


//checkbox states
    const [UpperCase,setUpperCase]=useState(false);

    const [LowerCase,setLowerCase]=useState(false);

    const [Specials,setSpecials]=useState(false);

    const[Numerals,setNumerals]=useState(false);


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
                checked={UpperCase}
                setChecked={setUpperCase}/>


                <MyCBox
                title='Lower Case Letters'
                checked={LowerCase}
                setChecked={setLowerCase}
                />

                <MyCBox
                title='Special Characters'
                checked={Specials}
                setChecked={setSpecials}
                />

                <MyCBox
                title='Numbers'
                checked={Numerals}
                setChecked={setNumerals}
                />
            </View>


                <OutPut
                placeholder ="make a selection"
                />
              <View>
    <Btn
    type='1'
    title='Generate Password'
    />
    <Btn
    type='2'
    title= "RESET"
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