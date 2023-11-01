import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const About = () => {
  const [tienePermiso, setTienePermiso] = useState(null);
  const [escaneado, setEscaneado] = useState(false);
  const [abrirScanner, setAbrirScanner] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setTienePermiso(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setEscaneado(true);
    alert(data);
  };

  const escanear = () => {
    setEscaneado(false);
    setAbrirScanner(true);
  };

  const escanearAGAIN = () => {
    setEscaneado(false);
    setAbrirScanner(false);
  };

  if (tienePermiso === null) {
    return <Text>Pidiendo permiso para la cámara</Text>;
  }
  if (tienePermiso === false) {
    return <Text>No tienes acceso a la cámara</Text>;
  }

  if (!abrirScanner) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/QR.png')} />
        <Button title={'Escanear'} onPress={escanear} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={escaneado ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {escaneado && (
        <Button title={'Volver'} onPress={escanearAGAIN} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
    height: 200,
    width: 200,
  },
});

export default About;
