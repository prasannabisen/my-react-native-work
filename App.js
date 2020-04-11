import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [people,setPeople]=useState([
    {name:'montu',key:1},
    {name:'prasanna',key:2},
    {name:'himanshu',key:3},
    {name:'navneet',key:4},
    {name:'prashant',key:5},
  ]);
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({  
  container:{
    flex:1,
    padding:40,
    //alignItems:'center',
    //justifyContent:'center',
  }
});
