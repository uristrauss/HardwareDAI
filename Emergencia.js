import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-web';


  const Emergencia = () =>{
    const [numero, setNumero] = useState(549);

   
    const numeroEmergencia = () => {
      if(validar(numero)){
        console.log(numero);
        AsyncStorage.setItem('numeroEmergencia', Number(numero))
      }
      else{
      console.log("NO SE GUARDO");
      };
    };

    const validar = () => {
      const validacion = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
      return validacion.test(numero);
    }
    
    return (
    <View>
    <TextInput
    placeholder="Manda tu numero de EMERGENCIA"
    onChangeText={text => setNumero(text)}
    value={numero}
    />
    <Button title="Mandar NUMERO" onPress={numeroEmergencia} />
    </View>

    );


  };

 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff', 
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    button: {
      backgroundColor: '#DDDDDD',
      padding: 10,
      margin: 5,
      borderRadius: 5,
    },
    middleButton: {
      backgroundColor: '#AAAAAA', 
    },
  });

  export default Emergencia;