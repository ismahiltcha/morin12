import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import ItemForm from '../components/ItemForm';
import { takeItem, borrowItem, addItem } from '../api/api';  // Import addItemQuantity API function

const ActionScreen = ({ route, navigation }) => {
  const { actionType, qrData } = route.params;

  const handleSubmit = async (values) => {
    try {
      console.log("Action type:", actionType, "QR Data:", qrData, "Values:", values);

      if (actionType === 'take') {
        console.log("Calling takeItem API...");
        await takeItem(qrData, values.quantity);  // Handle take item
      } else if (actionType === 'borrow') {
        console.log("Calling borrowItem API...");
        await borrowItem(qrData, values.quantity, values.borrowerName);  // Handle borrow item
      } else if (actionType === 'add') {
        console.log("Calling addItemQuantity API...");
        await addItem(qrData, values.quantity);  // Handle add item quantity
      }

      console.log("Action completed successfully");
      navigation.navigate('Success');
    } catch (error) {
      console.error("Error in action handling:", error);
      Alert.alert('Error', error.response?.data?.message || error.message || 'An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <ItemForm qrData={qrData} actionType={actionType} onSubmit={handleSubmit} />
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

export default ActionScreen;