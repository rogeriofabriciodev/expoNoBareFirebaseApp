import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WelcomeScreen({navigation}) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Bem-vindo ao exemplo de Firebase/Firestore
                </Text>
            </View>
            <TouchableOpacity
                 style={styles.button}
                 onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.buttonText}>
                    SignUp
                </Text>
            </TouchableOpacity>
            <Text style={styles.inlineText}>
                Você tem uma conta?
            </Text>
            <TouchableOpacity s
                style={styles.button}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.buttonText}>
                    SignIn
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4ecdc4',
    },
    button: {
      width: 200,
      borderRadius: 15,
      borderWidth: 3,
      borderColor: 'white',
      backgroundColor: '#ffffff',
      padding: 5,
      margin: '2%'
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'navy',
      textAlign: 'center'
    },
    inlineText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'navy',
      textAlign: 'center',
      marginTop: '5%',
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center'
    },
    titleContainer: {
      position: 'absolute',
      top: 170,
    },
  });