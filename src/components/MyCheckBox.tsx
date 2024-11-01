import React,{useState} from 'react';
import {Text,View ,StyleSheet} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

type CheckboxProps=
{
    title:string,
    checkedStatus : boolean,
   updateCheckedStatus : (checkedStatus:boolean) => void,

}
function MyCheckBox(props : CheckboxProps){
    //Local state lifted to parent Main() component
    //const [checked,setChecked]=useState(false);

    //Teacher way^^ ????ask why my way  works too ????
    const checked =  props.checkedStatus;
    const isChecked = props.updateCheckedStatus;
    const title = props.title;


    return(
        <View style={styles.containerView}>
        <BouncyCheckbox
          style={styles.check}
         
          isChecked={checked}
          size={25}
          fillColor="red"
          unFillColor="#FFFFFF"
          iconStyle={{ borderColor: "red" }}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ fontFamily: "JosefinSans-Regular" }}
          onPress={(isChecked: boolean) => {console.log(title + ' is ' + isChecked);}}
        >

        </BouncyCheckbox>
        <Text style={styles.titleTxt}>{title}</Text>
        </View>
        );
    }
const styles =StyleSheet.create({
    containerView:{
        marginHorizontal:10,
        marginVertical:5,
        width:300,

        flexDirection:'row',
        borderWidth:4,
        borderRadius:10,
         backgroundColor:'#f0f8ff',
        },
    titleTxt:{
        textAlign:'center',
        marginVertical:5,
        marginHorizontal:50,
        fontSize:15,
        fontWeight:'600',
        color:'black'

        },
    check:{
        margin:10,
        width:30,

        }

    });
export default MyCheckBox;
