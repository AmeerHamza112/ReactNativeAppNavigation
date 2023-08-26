import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  Button } from 'react-native';


const MyComponent = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <Button title="Goto Second Screen" onPress={() => navigation.navigate('Second')} />
      </View>
    </View>
  );
};

export default MyComponent;