import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function App() {
  const [people,setPeople]=useState([
    {name:'montu',key:1},
    {name:'prasanna',key:2},
    {name:'himanshu',key:3},
    {name:'navneet',key:4},
    {name:'prashant',key:5},
    {name:'harsh',key:6},
    {name:'utkarsh',key:7},
    {name:'vageta',key:8},

  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map(item=>{
        return(
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({  
  container:{
    flex:1,
    padding:40,
    //alignItems:'center',
    //justifyContent:'center',
  },
  item:{
    backgroundColor:'pink',
    margin:30,
    marginTop:24,
    fontSize:44,
  }
});
