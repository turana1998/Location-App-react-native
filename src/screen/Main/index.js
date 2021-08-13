import React from 'react';
import { View, Text, ImageBackground, Pressable, StatusBar } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto'

const Main = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/wallpaper.jpg')}
                style={styles.image}>

                <Text style={styles.title}> Go Near</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.buttonText}> Home Page</Text>
                </Pressable>


            </ImageBackground>
        </View>
    )
}

export default Main;