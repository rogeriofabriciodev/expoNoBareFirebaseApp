import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Alert,
    ScrollView,
    Keyboard,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { registration } from '../API/firebaseMethods';

export default function SignUp({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const emptyState = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const handlePress = () => {
        
        if (!firstName) {
            Alert.alert('O campo Primeiro nome é obrigatório!');
        } else if (!email) {
            Alert.alert('O campo Email é obrigatório!');
        } else if (!password) {
            Alert.alert('O campo Senha é obrigatório!');
        } else if (password !== confirmPassword) {
            Alert.alert('Precisa repetir a senha!');
        } else {
            registration(
                email,
                password,
                lastName,
                firstName
            );
            navigation.navigate('Loading');
            emptyState();
        }
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Crie uma conta!
                </Text>

                <ScrollView onBlur={Keyboard.dismiss}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Primeiro nome"
                        value={firstName}
                        onChangeText={(name) => setFirstName(name)}
                    />

                    <TextInput 
                        style={styles.textInput}
                        placeholder="Último nome"
                        value={lastName}
                        onChangeText={(name) => setLastName(name)}
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Digite seu E-mail"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInput 
                        style={styles.textInput}
                        placeholder="Digite uma senha"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={true}
                    />

                    <TextInput 
                        style={styles.textInput}
                        placeholder="Confirme a senha"
                        value={confirmPassword}
                        onChangeText={(password2) => setConfirmPassword(password2)}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handlePress}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                    <Text style={styles.inlineText}>Tem uma conta?</Text>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.buttonText}>
                            SignIn
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
} 

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: '#3FC5AB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: 200,
      padding: 5,
      backgroundColor: '#ff9999',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 15,
      alignSelf: 'center',
      margin: '5%',
    },
    buttonText: {
      fontSize:20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    inlineText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'navy',
      textAlign: 'center',
      marginTop: '5%',
    },
    text: {
      textAlign: 'center',
      fontSize: 25,
      margin: '5%',
      marginTop:'15%',
      fontWeight: 'bold',
      color: '#2E6194',
    },
    textInput: {
      width: 300,
      fontSize:18,
      borderWidth: 1,
      borderColor:'#a4eddf',
      padding: 10,
      margin: 5,
    },
  });