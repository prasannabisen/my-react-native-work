import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name,setName]=useState('shaun')
  const [age,setAge]=useState("22")
  //const [person,setPerson]=useState({name:"Montu",age:"20"})
  return (
    <View style={styles.container}>
      <Text>Enter Name:-{name} Age:-{age}</Text>
      <TextInput 
        style={styles.input}
        placeholder='eg:- prasanna'
        onChangeText={(val)=>setName(val)}/>
      <TextInput 
      keyboardType="numeric"
      style={styles.input}
      placeholder="age"
      onChangeText={(val)=>setAge(val)}/>
      <Button title="click Here"/>
    </View>
  );
}

const styles = StyleSheet.create({  
  input:{
    borderWidth:1,
    borderColor:"#eee",
    width:200,
    margin:10,
    padding:8,
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    backgroundColor:'#eee',
    margin:5,
    fontSize:40,
    borderRadius:10,
    overflow:'hidden',
    width:400
  },
  buttonk:{
    marginTop:20,
  }
});
