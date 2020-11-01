import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {

  const [col,SetCol] = useState("#ffffff")

  return (
    <View style={[styles.container,{backgroundColor: col}]}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Button title="Change Color" onPress={()=>{
        fetch("https://remote-color-change.herokuapp.com/hit").then(response=>response.json()).then(response=>SetCol("#"+response["msg"]["colors"][0]["hex"]))
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
