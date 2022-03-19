import React from 'react';
import {View,Text,TouchableOpacity,Image,TextInput} from 'react-native'
import styles from './styles';

const modal=(props)=> {
    
    return (
        <View style={styles.modalView}>
      
       <Text>name:    {props.score.name}</Text>
       <Text>email:    {props.score.email}</Text>
       <Text>Image:    {props.score.uri}</Text>
     



        </View>
    );
}

export default modal;