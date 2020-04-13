import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default function Todos({item,pressHandler})
{
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    item:{
        padding:40,
        marginTop:16,
        borderColor:"#bbb",
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10
    }
})