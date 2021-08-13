import React from 'react';
import {FlatList} from 'react-native'
import FooterTabs from '../Footer';
import Slider from '../Slider';
import { Container, Content, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import feed from '../../assets/data/feed';
const post1=feed[0]
export default  Home =()=> {
 

    return (
      <Container>
     
       <Content style={{padding:20}}>
         <FlatList data={feed}
         renderItem={({item})=>
         <Slider post={item}></Slider>
         }/>
         
       </Content>
 
        <FooterTabs></FooterTabs>
      </Container>
    );
  
}