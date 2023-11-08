import * as Contacts from 'expo-contacts';
import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Image,
    Button, 
    Text
    }
     from 'react-native';

const Contactos = () =>
{
    const [contactos, setContactos] = useState([]);
    
    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
            });
    
            if (data.length > 0) {
              const contact = data[0];
              console.log(contact);
              setContactos(data);
            }
          }
        })();
      }, []);
    
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Tus Contactos</Text>
        <View>
          <FlatList
            data={contactos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.contactItem}>
                <Text style={styles.name}>Nombre: {item.firstName}</Text>
                <Text style={styles.name}>Apellido: {item.lastName}</Text>
                <Text style={styles.phoneNumberTitle}>Numeros de telefono:</Text>
                {item.phoneNumbers.map((phoneNumber, index) => (
                    <Text key={index} style={styles.phoneNumber}>{phoneNumber.number}</Text>
                ))}
            </View>
        )}
      />
        </View>

        </SafeAreaView>
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phoneNumberTitle: {
    color: 'gray',
    marginTop: 5,
    marginBottom: 3,
  },
  phoneNumber: {
    marginLeft: 10,
    fontSize: 14,
    marginBottom: 3,
  },
});

export default Contactos;