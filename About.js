import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button,Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const About = () =>
{
    const [tienePermiso, setTienePermiso] = useState(null);
  const [escaneado, setEscaneado] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setTienePermiso(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setEscaneado(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (tienePermiso === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (tienePermiso === false) {
    return <Text>No access to camera</Text>;
  }

    return(
<View>
        <Image style={styles.image} source = {require("./assets/QR.png")}/>   
        
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={escaneado ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {escaneado && <Button title={'Tap to Scan Again'} onPress={() => setEscaneado(false)} />}
      </View>
     
   
</View>
     )
}

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

export default About;