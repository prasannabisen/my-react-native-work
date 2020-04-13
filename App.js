import React,{useState} from 'react';
import { StyleSheet, View,Text,FlatList} from 'react-native';

export default function App(){
  const [todos,setTodos]=useState([
    {text:"buy coffee",key:'1'},
    {text:"create app",key:'2'},
    {text:"play with phone",key:'3'}
  ]);

  return(
    <View style={styles.container}>
      {/* Header*/}
      <View>
        {/*TO do form*/}
        <View style={styles.list}>
          {/*to do list*/}
          <FlatList 
            data={todos}
            renderItem={({item})=>(
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({  
  container:{
    flex:1,
    padding:40,
    //alignItems:'center',
    //justifyContent:'center',
  },
});
