import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const ActionSelectionScreen = ({ navigation, route }) => {
    const qrData = route.params?.qrData;

    const handleAddQuantity = () => {
        navigation.navigate('Action', { actionType: 'add', qrData });
    };

    const handleTake = () => {
        navigation.navigate('Action', { actionType: 'take', qrData });
    };

    const handleBorrow = () => {
        navigation.navigate('Action', { actionType: 'borrow', qrData });
    };

    return (
        <View style={styles.container}>
            <Text>Choisir une action pour l'élément: {qrData}</Text>
            <Text>Choose an Action for Item: {qrData}</Text>
            <Button title="Prendre | Take Item" onPress={handleTake} />
            <Button title="prêter | Borrow Item" onPress={handleBorrow} />
            <Button title="Ajouter | Add Quantity" onPress={handleAddQuantity} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    button: {
        marginBottom: 10,
    },
});

export default ActionSelectionScreen;
