import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, Linking } from 'react-native';
import { login } from '../api/api';  // Assuming login API is correctly set up

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await login(username, password);
            const token = response.token;
            // Save token or pass it along to the next screen
            navigation.navigate('Scan', { token });  // Navigate to ScanScreen after successful login
        } catch (error) {
            setErrorMessage('Invalid credentials, please try again.');
        }
    };

    const openURI = async () => {
        const url = 'http://www.meditrack.ca/'
        const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
        if (supported) {
            await Linking.openURL(url); // It will open the URL on browser.
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Use your same login credentials as on www.meditrack.ca or create your account on <Text style={styles.link} onPress={openURI}>Meditrack</Text></Text>
            <Text style={styles.message}>Utiliser les mêmes identifiants que vous utilisez sur www.meditrack.ca,<Text style={styles.link} onPress={openURI}>Meditrack</Text></Text>

            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    link: {
        color: 'blue',
    }
});

export default LoginScreen;
