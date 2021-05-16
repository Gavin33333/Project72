import React from 'react';
import {Header, TextInput, View} from 'react-native'

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
            <Header>Write A Story</Header>

            <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}

        />
</View>
            )
    }
}
