import React,{useState} from 'react';
import {} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

type CheckboxProps=
{
    checkedStatus : Boolean,
   updateCheckedStatus : (status:Boolean) => void,

}
function MyCheckBox(props : CheckboxProps){
    //Local state lifted to parent Main() component
    //const [checked,setChecked]=useState(false);

    //Teacher way^^ ????ask why my way  works too ????
    const checked =  props.checkedStatus;
    const isChecked = props.updateCheckedStatus;


    return(
        <BouncyCheckbox
            isChecked={checked}
          size={25}
          fillColor="red"
          unFillColor="#FFFFFF"
          text="Custom Checkbox"
          iconStyle={{ borderColor: "red" }}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ fontFamily: "JosefinSans-Regular" }}
          onPress={(isChecked: boolean) => {console.log(isChecked)}}
        />
        );
    }
export default MyCheckBox;
