import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Contactos from './Contactos';
import HoraTemperatura from './HoraTemperatura';
import Emergencia from './Emergencia';
import About from './About';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Contactos" component={Contactos} />
          <Stack.Screen name="HoraTemperatura" component={HoraTemperatura} />
          <Stack.Screen name="Emergencia" component={Emergencia}/>
          <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default function App() {
  return (
      <MyStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
