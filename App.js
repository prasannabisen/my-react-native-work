import React,{useState} from 'react';
import { StyleSheet, View,Text,FlatList} from 'react-native';
import Header from './component/Header.js';

export default function App(){
  const [todos,setTodos]=useState([
    {text:"buy coffee",key:'1'},
    {text:"create app",key:'2'},
    {text:"play with phone",key:'3'}
  ]);

  return(
    <View style={styles.container}>
      {/* Header*/}
      <Header />
      <View>
        {/*TO do form*/}
        <View style={styles.content}>
          {/*to do list*/}
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item})=>(
                <Text>{item.text}</Text>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({  
  container:{
    flex:1,
    paddingTop:40,
    //alignItems:'center',
    //justifyContent:'center',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:40,
  }
});
