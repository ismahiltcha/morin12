import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ItemForm = ({ qrData, actionType, onSubmit }) => {
  const validationSchema = Yup.object({
    quantity: Yup.number().required('Quantity is required').positive().integer(),
    borrowerName: actionType === 'borrow' ? Yup.string().required('Borrower name is required') : Yup.string(),
  });

  return (
    <Formik
      initialValues={{ quantity: '', borrowerName: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View>
          <Text>Quantity</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('quantity')}
            onBlur={handleBlur('quantity')}
            value={values.quantity}
            keyboardType="numeric"
          />
          {errors.quantity && <Text style={styles.error}>{errors.quantity}</Text>}

          {actionType === 'borrow' && (
            <>
              <Text>Borrower Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('borrowerName')}
                onBlur={handleBlur('borrowerName')}
                value={values.borrowerName}
              />
              {errors.borrowerName && <Text style={styles.error}>{errors.borrowerName}</Text>}
            </>
          )}

          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
  },
});

export default ItemForm;
