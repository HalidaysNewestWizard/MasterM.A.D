import React,{useState} from 'react';
import {Text,View ,StyleSheet} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

type CheckboxProps=
{
    title:string,
    checkedStatus : Boolean,
   updateCheckedStatus : (status:Boolean) => void,

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
          onPress={(isChecked: boolean) => {console.log(title)}}
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

        flexDirection:'row',
        borderWidth:2,
        borderRadius:10,
         backgroundColor:'#f0f8ff',
        },
    titleTxt:{
        marginVertical:10,
        marginHorizontal:100,
        fontSize:20,
        fontWeight:'600',
        color:'black'

        },
    check:{
        margin:10,

        }

    });
export default MyCheckBox;
