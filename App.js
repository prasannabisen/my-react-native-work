import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>hello world</Text>
        <Text style={styles.text}>hello world 2</Text>
        <Text style={styles.text}>hello world 3</Text>
        <Text style={styles.text}>hello world 4</Text>
      </View>
      <View style={styles.body}></View>
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'red',
    padding:20,
  },
  text:{
    fontWeight:'bold',
    fontSize:30,
  },
  body:{
    backgroundColor:'pink',
    padding:20,
  }
});
