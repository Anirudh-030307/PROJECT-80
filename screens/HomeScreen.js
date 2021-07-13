import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.ImageBackground} source={require('../assets/stars.gif')}>
                    <Image style={{ width: 200, height: 200, right: -550, }} source={require('../assets/main-icon.png')} />
                    <Text style={styles.text1}>STELLAR</Text>
                    <Text style={styles.text1}>APP</Text>
                    <TouchableOpacity style={styles.Button} onPress={() => { this.props.navigation.navigate('SpaceCrafts') }}>
                        <Text style={styles.text}>Space Crafts</Text>
                        <Image style={styles.imageStyle} source={require('../assets/space_crafts.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => { this.props.navigation.navigate('DailyPic') }}>
                        <Text style={styles.text}>Daily Pics</Text>
                        <Image style={styles.imageStyle} source={require('../assets/daily_pictures.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => { this.props.navigation.navigate('StarMap') }}>
                        <Text style={styles.text}>Star Map</Text>
                        <Image style={styles.imageStyle} source={require('../assets/star_map.png')} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageStyle: {
        width: 100,
        height: 100,
        top: -80,
        right: -150,
    },
    ImageBackground: {
        flex: 1,
        resizeMode: 'cover',
    },
    Button: {
        marginTop: 50,
        borderRadius: 20,
        backgroundColor: 'white',
        width: 150,
        height: 100,
        alignSelf: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        marginTop: 20,
        paddingLeft: 50,
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
    },
});


