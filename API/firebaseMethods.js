import * as firebase from 'firebase';
import 'firebase/firestore';
import { Alert } from 'react-native';

export async function registration(email, password, lastName, firstName) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;
        

        const db = firebase.firestore();
        db.collection("users")
            .doc(currentUser.uid)
            .set({
                email: currentUser.email,
                lastName: lastName,
                firstName: firstName,
            });
    } catch (error) {
        Alert.alert("Algo deu Errado!!!", error.message);
    }
}

export async function signIn(email, password) {
    try {
        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
    } catch (error) {
        Alert.alert("Algo deu Errado!!!", error.message);
    }
}

export async function loggingOut() {
    try {
        await firebase.auth().signOut();
    } catch (error) {
        Alert.alert("Algo deu Errado!!!", error.message);
    }
}
