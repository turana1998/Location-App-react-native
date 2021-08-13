import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text ,Icon,Badge} from 'native-base';
export default  FooterTabs =()=>{
  const navigation = useNavigation(); 
    return (
      <Footer style={{backgroundColor:'rgba(31, 77, 77, 0.473)'}}>
      <FooterTab  style={{backgroundColor:'transparent'}} 
      >
             <Button badge vertical>
              <Badge><Text >2</Text></Badge>
              <Icon name="apps" style={{color:'#fff'}}/>
              <Text style={{color:'#fff'}}>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" style={{color:'#fff'}}/>
              <Text style={{color:'#fff'}}>Camera</Text>
            </Button>
            <Button badge vertical >
              <Badge ><Text>5</Text></Badge>
              <Icon active name="navigate"  style={{color:'#fff'}}/>
              <Text style={{color:'#fff'}}> Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person"  style={{color:'#fff'}}/>
              <Text style={{color:'#fff'}}>Contact</Text>
            </Button>
      </FooterTab>
    </Footer>
    );
  
}

export const styles = StyleSheet.create(
     
)