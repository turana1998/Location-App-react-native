import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    nav:{
        display:'flex',
       backgroundColor:'red'
    },
    container: {
        flex: 1,
      },
    search: {

        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 100,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40
       
    },
    searchText:{
        fontSize:16,
        fontWeight:'bold'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode:'cover',
        justifyContent:'center',
        flex: 1,

        
    },
    
    title: {
        fontSize: 70,
        fontWeight: 'bold',
        color: 'white',
   
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',

    }

});

export default styles;