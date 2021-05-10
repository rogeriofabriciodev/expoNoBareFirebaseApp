import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Alert,
    StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { loggingOut } from '../API/firebaseMethods';

export default function Dashboard({ navigation }) {
    let currentUserUID = firebase.auth().currentUser.uid;

    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        async function getUserInfo() {
            let doc = await firebase
                .firestore()
                .collection('users')
                .doc(currentUserUID)
                .get();

            if (!doc.exists) {
                Alert.alert('Usuário não foi encontrado!')
            } else {
                let dataObj = doc.data();
                setFirstName(dataObj.name);
            }
        }

        getUserInfo();
        
    })

    const handlePress = () => {
        loggingOut();
        navigation.replace('Home');
    };

    const handleTakePhoto = () => {
        navigation.replace('TakePhoto');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Dashboard</Text>
            <Text style={styles.text}>Olá {firstName}</Text>
            <TouchableOpacity
                 style={styles.button}
                 onPress={handlePress}
            >
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 style={styles.button}
                 onPress={handleTakePhoto}
            >
                <Text style={styles.buttonText}>Take a Photo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      width: 150,
      padding: 5,
      backgroundColor: '#ff9999',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 15,
      alignSelf: 'center',
    },
    buttonText: {
      fontSize:20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: '#3FC5AB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      fontStyle: 'italic',
      marginTop: '2%',
      marginBottom: '10%',
      fontWeight: 'bold',
      color: 'black',
    },
    titleText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#2E6194',
    },
  });