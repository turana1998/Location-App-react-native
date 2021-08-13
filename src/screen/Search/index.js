import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Container, Header, Content, Form, Row, Item, Input, Icon, List, ListItem } from 'native-base';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import _ from "lodash";
const Search = () => {


    let alpha = [];
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [filerData, setfilerData] = useState([]);
    const [inputText, setInputText] = useState('');
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    setfilerData(result);
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

    const searchFilter = (text) => {
        if (text) {
            const newdata = items.filter((item) => {
                const itemData = item.name ?
                    item.name.toUpperCase() :
                    ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;

            });
            setfilerData(newdata);
            setInputText(text);
        }
        else {
            setfilerData(items);
            setInputText(text);
        }
    };
    const navigation = useNavigation();
    return (
        <Container style={styles.container}>

            <Form>
                <Item>
                    <Input
                        placeholder="Where are you going ?"
                        value={inputText}
                        onChangeText={(text) => searchFilter(text)} />
                </Item>

            </Form>
            <ScrollView>

                {filerData.map((item) => {
                        const isalpha = _.includes(alpha, item.name.charAt(0))
                        const list = <List>
                            {
                                !isalpha ?
                                    <ListItem itemDivider>
                                        <Text>{item.name.charAt(0)}</Text>
                                    </ListItem> :
                                    null
                            }

                            <ListItem>
                                <View style={styles.icon}>
                                    <Icon style={{ fontSize: 25 }} type="Entypo" name="location-pin" ></Icon>
                                </View>

                                <Text>{item.name}</Text>

                            </ListItem>

                        </List>
                        if (!isalpha) {
                            alpha.push(item.name.charAt(0))
                        }
                        return list;
                    })
                    }


            </ScrollView>
        </ Container>
    )
}

export default Search;