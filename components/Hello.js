import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

function Hello(props){
    return(
        <View>
            <Text>Ini component Hello</Text>
        </View>
    );
}

function Greet(props){
    return(
        <View>
            <Text>Ini component Greet</Text>
        </View>
    )
}

class Address extends React.Component{
    render(){
        <View>
            <Text>Ini component Address</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export { Hello, Greet, Address };