import React ,{useState,useEffect} from 'react';
import FooterTabs from '../Footer';
import styles from './style';
import { Image, ScrollView } from 'react-native';
import { Container, Content, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

export default  Slider =(props)=> {
  const post=props.post
  console.log(props)
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
    return (

      <Container style={styles.card}>
       
       
       <View>
         <Text style={styles.title}>{post.bed} bed  and {post.bedroom} room</Text>
         <Text style={styles.about}>{post.title}</Text>
         <View style={styles.price}><Text style={styles.price_bf}>${post.oldPrice}</Text><Text style={styles.price_af}>${post.newPrice}/night</Text></View>
         <Text style={styles.total}>Total {post.totalPrice}</Text>
        </View>
       <View>
          <DeckSwiper
            dataSource={post.images}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
              
                <CardItem cardBody>
                  <Image style={{ height: 250, flex: 1 ,resizeMode:'cover'}} source={item.image} />
                </CardItem>
               
              </Card>
            }
          />
            
        </View>
      </Container>
    );
  
}