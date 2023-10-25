import react from "react";
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from "react";
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
        <View>
          <Text>Contacts Module Example</Text>

          <FlatList
        data={contactos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.contactItem}>
                <Text>Nombre: {item.firstName}</Text>
                <Text>Apellido: {item.lastName}</Text>
                <Text>Phone Numbers:</Text>
                {item.phoneNumbers.map((phoneNumber, index) => (
                    <Text key={index}>{phoneNumber.number}</Text>
                ))}
            </View>
        )}
      />
        </View>
      );

}

  {/*
            {item.PhoneNumbers && item.PhoneNumbers.length > 0 && (
              <Text>Phone: {item.PhoneNumbers[0].number}</Text>
            )}
            */}

const styles = StyleSheet.create({
    contactItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  });
  
export default Contactos;