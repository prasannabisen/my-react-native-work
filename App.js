import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name,setName]=useState('shaun')
  const [person,setPerson]=useState({name:"Montu",age:"20"})
  const clickHandler=()=>{
    setName('montu');
    setPerson({name:"prasanna",age:"22"});
  }
  return (
    <View style={styles.container}>
      <Text>My Name is:-{name}</Text> 
      <Text>My real name is:- {person.name} and age is {person.age}</Text>
      <View style={styles.buttonk}>
        <Button title='update state' onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({  
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
