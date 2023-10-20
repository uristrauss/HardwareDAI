import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
  Button
  }
   from 'react-native';
import axios from 'axios';

const Home = ({navigation}) =>
{
const [bebe, setBebe] = useState('');

    return(
    <View style={{display: "flex", alignItems: "center"}}>
    <h1>HARDWARE</h1>
    <Image style={styles.image} source = {require("./assets/logo.png")}/>

    <Button
            title="CONTACTOS"
            onPress={() =>
            navigation.navigate('Contactos')
            }
          
    />
    <br></br>

    <Button
            title="HORA Y TEMPERATURA"
            onPress={() =>
            navigation.navigate('HoraTemperatura')
            }
          
    />
    <br></br>

    <Button
            title="EMERGENCIAS"
            onPress={() =>
            navigation.navigate('Emergencia')
            }
          
    />

    </View>

    )
};

const styles = StyleSheet.create({
    container: {
        
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     },
     image :{
      marginBottom: 40,
      height: 200,
      width: 200
    },
    inputView: {
        backgroundColor: "#FFF44A",
        borderRadius: 30,
        width: "40%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
      loginBtn:
      {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#B3A701",
      }
      
  });

export default Home;