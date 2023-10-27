import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, styles } from 'react-native';
import * as Location from 'expo-location';
import  axios  from 'axios';

const HoraTemperatura = () =>
{
    const [location, setLocation] = useState(null);
    const [city, setCity] = useState(null);
    const [temperatura, setTemperatura] = useState(null);
    const [dia, setDia] = useState(null);
    const [mes, setMes] = useState(null);
    const [hora, setHora] = useState(null);

    useEffect(() => {
      (async () => {
        
        const fechaActual = new Date();
        setDia(fechaActual.getDate());
        setMes(fechaActual.getMonth()+1);
        
        const options = { hour: '2-digit', minute: '2-digit' };
      const formattedTime = fechaActual.toLocaleString('default', options);
      setHora(formattedTime);


        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&APPID=0cd4c845628a93ee3dd46acea3646046&units=metric`, {
        })
        .then(function (response) {
        setTemperatura(response.data);
        console.log(response.data);
        console.log(location);
        })

          })();
        }, []);

   
    return (
      <View>
         <Text>Temperature: {temperatura && temperatura.main.temp}°C</Text>
        <Text>Humidity: {temperatura && temperatura.main.humidity}%</Text>
        <Text>Description: {temperatura && temperatura.weather[0].description}</Text>
        <Text>Ubicación: {temperatura && temperatura.name}</Text>
        <Text>Fecha: {dia}/{mes}</Text>
        <Text>Hora: {hora}</Text>
      </View>
    );
}

export default HoraTemperatura;