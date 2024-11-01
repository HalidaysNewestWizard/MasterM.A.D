import React, {useState} from 'react';
import * as utils from './Consts';
import {View, Text, TextInput, StyleSheet, Clipboard} from 'react-native';

import MyCBox from './components/MyCheckBox';

import Btn from './components/Btn';

import OutPut from './components/Output';

import MyTxtBox from './components/MyInputBox';

import * as password from './utility/passwordGenerator';

function Main(): React.JSX.Element {
  //input box state
  const [userInput, setUserInput] = useState('');

  //checkbox states
  const [UpperCase, setUpperCase] = useState(false);

  const [LowerCase, setLowerCase] = useState(false);

  const [Specials, setSpecials] = useState(false);

  const [Numerals, setNumerals] = useState(false);

  const [generatedPassword, setGeneratedPassword] = useState('');

  function Reset() {
    setUserInput('');
    setNumerals(false);
    setSpecials(false);
    setLowerCase(false);
    setUpperCase(false);
    setGeneratedPassword('');
    console.log('reset');
  }

  return (
    <View style={styles.Main}>
      <View style={styles.container}>
        <View style={styles.checkB}>
          <Text style={styles.headerTxt}>Password Generator</Text>
          <MyTxtBox userInput={userInput} setUserInput={setUserInput} />
        </View>

        <View style={styles.checkB}>
          <MyCBox
            title="Upper Case Letters"
            checkedStatus={UpperCase}
            updateCheckedStatus={setUpperCase}
          />

          <MyCBox
            title="Lower Case Letters"
            checkedStatus={LowerCase}
            updateCheckedStatus={setLowerCase}
          />

          <MyCBox
            title="Special Characters"
            checkedStatus={Specials}
            updateCheckedStatus={setSpecials}
          />

          <MyCBox
            title="Numbers"
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
        <View style={styles.buttonBox}>
          <Btn
            type={1}
            title="Generate Password"
            onPress={() => {
              const generatedPassword = password.generatePasswordString({
                length: parseInt(userInput),

                includeUpper: UpperCase,

                includeLower: LowerCase,

                includeNumber: Numerals,

                includeSymbol: Specials,
              });

              console.log('Generate Password button pressed');

              console.log('Generated Password:', generatedPassword);

              setGeneratedPassword(generatedPassword);
            }}
          />

          <Btn
            type={2}
            title="RESET"
            onPress={() => {
              Reset();
            }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#2f4f4f',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  textBox: {
    borderWidth: 2,
  },
  headerTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
  container: {
    margin: 10,
    borderWidth: 4,
    borderRadius: 10,
    borderColor: 'brown',
    backgroundColor: '#f5fffa',
  },
  buttonBox: {
    marginVertical: 10,
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 300,
  },
  checkB: {
    marginHorizontal: 35,
  },
});

export default Main;
