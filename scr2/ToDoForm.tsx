import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,Clipboard,
} from 'react-native';
import { colors ,getPasswordStrength } from './utility';

type toDoFormProps= {
    inputTxt : string,
    setInputTxt : (txt:string) => void,
    }
function toDoForm( props: toDoFormProps){
    const [strength,setStrength]= useState(0);
    //const [inputTxt, setInputTxt]= useState("");
    const inputTxt = props.inputTxt;
    const setInputTxt = props.setInputTxt;


    const [barWidth, setBarWidth]= useState(0);
    // need to specify your ags type in TSX  not in JSX
    function handleTxtChange(newTxt:string){
        const s = getPasswordStrength(newTxt);
        setStrength(s);
        const width = (s * 19.75 * parentWidth ) / 100
        setBarWidth(width);
        setInputTxt(newTxt);
        }

    const onLayout = (event:any) => {
        const{width} = event.nativeEvent.layout;
        parentWidth = width;
        console.log("parentWidth : " + parentWidth)
        };

    return(
        <View>
            <View style={styles.form}>
                    <TextInput
                    placeholder="Enter a thing "
                      style={styles.input}
                     value={inputTxt}
                      onChangeText={handleTxtChange}
                    />
                    <Button title="Add" />
                    </View>
                        <View style={styles.strengthBar} onLayout={onLayout}>
                            <View style={[styles.bar,{
                                backgroundColor: colors[strength],
                                width: barWidth,
                                }]}>
                            </View>
                        </View>

                    <Button title="Copy" onPress={() => Clipboard.setString(inputTxt)}/>
        </View>

        );
        }
    const styles = StyleSheet.create({
         form: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 20,
          },
          input: {
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginRight: 10,
          },
      bar:{
          height : 7,
          width: '15%',
          borderRadius: 15,

          },
      strengthBar:{
          margin:15,
          height: 10,
          width:'80%',
          borderWidth:3,
          borderColor:'#000',
          borderRadius:20,
          justifyContent:'center',
          },

        });
    export default toDoForm;