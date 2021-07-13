import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

export default class DailyPicScreen extends Component {
    constructor() {
        super();
        this.state = {
            apod: []
        };
    }
    componentDidMount() {
        this.getAPOD()
    }
    getAPOD = () => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=bcJUMgx4xShPfiNJxJRAoG6b3jbCP0ORuEMKpkMv").
            then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                alert(error.message)
            })
    }

    render() {
        const url = this.state.apod.url
        if (Object.keys(this.state.apod).length === 0) {
            return (
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Loading...</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <SafeAreaView />
                    <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                        <Text style={styles.routeText}>Astronomy picture of the day</Text>
                        <Text style={styles.titleText}>{this.state.apod.title}</Text>
                        <TouchableOpacity style={styles.listContainer}
                            onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}>
                            <View style={styles.iconContainer}>
                                <Image source={require("../assets/play-video.png")} style={{ width: 50, height: 50 }}></Image>
                            </View>
                        </TouchableOpacity >
                        <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "Black",
    },
    explanationText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        marginTop: 10
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",

    }
});

