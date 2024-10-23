import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Success!</Text>
      <Text>Action Completed Successfully!</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Scan')}  // Ensure this navigates to 'Scan'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  successText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#28a745',
  },
  messageText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
export default SuccessScreen;
