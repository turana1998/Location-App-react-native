import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View } from 'react-native';

export default DrawerContent = (props) => {
    const navigation = useNavigation(); 
    return (
        <View style={{ flex: 1 }}>



            <Image source={require('../../assets/wallpaper.jpg')} style={{ height: 200, width: null, }} />
            <DrawerItem 
            icon={() => (
                <Icon
                    style={{ color: 'rgba(31, 77, 77, 0.473)' }}
                    name="home-outline"
                    type="MaterialCommunityIcons"></Icon>
            )}
                labelStyle={
                    { color: '#676c6e' }
                }
                label="Home page"
                onPress={()=>props.navigation.navigate("Home")}
            ></DrawerItem>
             <DrawerItem 
            icon={() => (
                <Icon
                    style={{ color: 'rgba(31, 77, 77, 0.473)' }}
                    name="exclamation-circle"
                    type="FontAwesome"></Icon>
            )}
                labelStyle={
                    { color: '#676c6e' }
                }
                label="About page"
                onPress={()=>props.navigation.navigate("About")}
            ></DrawerItem>
             <DrawerItem 
            icon={() => (
                <Icon
                    style={{ color: 'rgba(31, 77, 77, 0.473)' }}
                    name="enviroment"
                    type="AntDesign"></Icon>
            )}
                labelStyle={
                    { color: '#676c6e' }
                }
                label="Search location"
                onPress={()=>props.navigation.navigate("Search")}
            ></DrawerItem>
            <DrawerItem
                style={{ backgroundColor: 'rgba(31, 77, 77, 0.473)' ,position: 'absolute', left: 0, right: 0, bottom: 0}}
                icon={() => (
                    <Icon
                        style={{ color: '#fff' }}
                        name="exit-to-app"
                        type="MaterialCommunityIcons"></Icon>
                )}
                labelStyle={
                    { color: '#fff' }
                }
                label="Sign out"></DrawerItem>

        </View>
    );

}