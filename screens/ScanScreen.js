import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export default function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  // Vérifier les permissions caméra sur iOS
  useEffect(() => {
    (async () => {
      const status = await check(PERMISSIONS.IOS.CAMERA);
      if (status === RESULTS.GRANTED) {
        setHasPermission(true);
      } else {
        const newStatus = await request(PERMISSIONS.IOS.CAMERA);
        setHasPermission(newStatus === RESULTS.GRANTED);
      }
    })();
  }, []);

  const onSuccess = (e) => {
    console.log(`QR code with data ${e.data} has been scanned!`);
    // Navigation vers l'écran de sélection des actions avec les données du QR Code
    navigation.navigate('ActionSelection', { qrData: e.data });
  };

  if (hasPermission === null) {
    return <Text>Demande de permission pour la caméra...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Accès à la caméra refusé</Text>;
  }

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={<Text style={styles.centerText}>Scan the QR code to continue</Text>}
        bottomContent={<Text style={styles.centerText}>Position the QR code in the center of the camera</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center',
  },
});
