import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title:{
       color:'rgb(68, 68, 68)',
       fontSize:12,
       marginBottom:10
    },
    about:{
       
        fontSize:14,
        marginBottom:10
    },
    price_bf:{
        color:'rgb(68, 68, 68)',
        fontSize:14,
        textDecorationLine:'line-through',
        marginRight:10
    },
    price_af:{
        fontWeight:'bold',
        fontSize:14,
        
    },
    total:{
        color:'rgb(68, 68, 68)',
        fontSize:14,
    },
    price:{
       
        flexDirection:'row'
    },
    card:{
        padding:10,
        borderColor:'rgb(145, 144, 144)',
        borderWidth:1,
        height:370,
        borderRadius:10,
        marginBottom:20
    }

 
});

export default styles;