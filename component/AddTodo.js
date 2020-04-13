import React,{useState} from'react'
import {View,StyleSheet,TextInput,Button} from 'react-native'

export default function AddToDo({submitHandler})
{
    const [text,setText]=useState('')
    
    const changeHandler =(val)=>
    {
        setText(val)
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todp"
                onChangeText={changeHandler}
            />
            <Button onPress={()=>submitHandler(text)} title='add TODO' color='red'/>
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"
    }
})