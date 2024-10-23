import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const qrData = route.params?.qrData;
  const token = route.params?.token;

  const handleAddQuantity = () => {
    navigation.navigate('Action', { actionType: 'add', qrData, token });
  };

  const handleTake = () => {
    navigation.navigate('Action', { actionType: 'take', qrData, token });
  };

  const handleBorrow = () => {
    navigation.navigate('Action', { actionType: 'borrow', qrData, token });
  };

  const handleScan = () => {
    navigation.navigate('Scan');
  };

  return (
    <View style={styles.container}>
      <Button title="Scan QR Code" onPress={handleScan} />
      {qrData && (
        <>
          {/* Wrap the QR Data in a Text component */}
          <Button title="Take Item" onPress={handleTake} />
          <Button title="Borrow Item" onPress={handleBorrow} />
          <Button title="Add Quantity" onPress={handleAddQuantity} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default HomeScreen;
