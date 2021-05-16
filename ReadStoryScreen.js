import { styleSheets } from 'min-document';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style={styleSheets.container}>
                <Text>Read Story</Text>
            </View>
        );
    }
}