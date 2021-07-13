import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
    constructor() {
        super()
        this.state = {
            longitude: '',
            latitude: '',
        }
    }

    render() {
        const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
            <View style={styles.container}>
                <Text style={styles.text}>STAR MAP SCREEN</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your longitude"
                    placeholderTextColor="black"
                    onChangeText={(text) => {
                        this.setState({
                            longitude: text
                        })
                    }}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your latitude"
                    placeholderTextColor="black"
                    onChangeText={(text) => {
                        this.setState({
                            latitude: text
                        })
                    }}
                />
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 20, marginBottom: 20 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        marginTop: 20,
        alignSelf: 'center',
        marginBottom: 10,
    },
    TextInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    }
});

