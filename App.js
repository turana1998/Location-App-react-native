
import React from 'react';
import Home from './src/components/Home';
import About from './src/components/About';
import Main from './src/screen/Main';
import Search from './src/screen/Search'
import { Container, Header, Left, Body, Right, Button, Icon,Text,Title } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './src/screen/Main/style';
import DrawerContent from './src/screen/Drawer/';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator  initialRouteName="Search" drawerContent={props => <DrawerContent {...props}/>} 
      >
        
        <Drawer.Screen 
        name="Main Page" 
        component={Main}
        options={
          {
            headerShown:false
          }
        }
       />
        <Drawer.Screen name="Home" component={Home} 
        options={
          {
            title:"Home Page",
            headerTintColor: 'rgba(31, 77, 77, 0.473)',
           
            
            headerRight: () => (
                <Icon 
                style={{color: 'rgba(31, 77, 77, 0.473)',marginRight:15}}
                type="Entypo" name="users"></Icon>
            ),
          }
        }/>
        <Drawer.Screen name="About" component={About} />
         
        <Drawer.Screen 
        name="Search" 
        component={Search}
       
       />
      </Drawer.Navigator>
    </NavigationContainer>

  );
};
export default App;
