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
import { signIn } from '../API/firebaseMethods';

export default function SignIn({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        if (!email) {
            Alert.alert('O campo Email é obrigatório!');
        } 
        
        if (!password) {
            Alert.alert('O campo Senha é obrigatório!');
        }

        signIn(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Acesse Sua Conta:
                </Text>

                <ScrollView onBlur={Keyboard.dismiss}>
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

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handlePress}
                    >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <Text style={styles.inlineText}>Não tem uma conta?</Text>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={styles.buttonText}>
                            SignUp
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
} 

const styles = StyleSheet.create({
    button: {
      width: 200,
      padding: 5,
      backgroundColor: '#ff9999',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 15,
      alignSelf: 'center',
      margin: "2%",
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
    textInput: {
      width: 300,
      fontSize:18,
      borderWidth: 1,
      borderColor:'#a4eddf',
      padding: 10,
      margin: 5,
      borderRadius: 10,
    },
    inlineText: {
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
      fontWeight: 'bold',
      color: '#2E6194',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
        color: '#2E6194',
      }
  });