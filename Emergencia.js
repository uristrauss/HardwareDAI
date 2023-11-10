import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


  const Emergencia = () =>{
    const [numero, setNumero] = useState(54911);
    const [numeroValido, setNumeroValido] = useState();
    const [numeroGuardado, setNumeroGuardado] = useState();

    const cargarNumero = async () => {
      const numeroGuardado = await AsyncStorage.getItem('numeroEmergencia');
      if(numeroGuardado) {
        setNumeroValido(numeroGuardado);
      }
    }

    useEffect(() =>{
      cargarNumero();
     },[])
    
    const numeroEmergencia = () => {
      if(validar(numero)){
        AsyncStorage.setItem('numeroEmergencia', numero.toString())
        console.log("El numero es " + numero);
        Alert.alert("El numero es " + numero);
        setNumeroValido(numero);
      }
      else{
      Alert.alert("Numero ingresado no valido");
      console.log("NO SE GUARDO");
      };
    };

    const validar = () => {
      const validacion = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
      return validacion.test(numero);
    }
    
    return (
    <View>
      <Text>Número de Emergencia</Text>
    <TextInput
    placeholder="54911********"
    onChangeText={text => setNumero(text)}
    value={numero}
    />
    <Text>Formato de número: 54911********</Text>
    <Button title="Mandar NUMERO" onPress={numeroEmergencia} />
    <Text>El numero de emergencia guardado es: {numeroValido}</Text>
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