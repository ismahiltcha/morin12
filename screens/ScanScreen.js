import React, { useCallback, useRef, useState } from 'react';
import { Button, Linking, Platform, StyleSheet, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function ScanScreen({ navigation }) {
    const [permission, requestPermission] = useCameraPermissions(); // Manage camera permissions
    const qrLock = useRef(false);

    //navigate action screen
    const navigateToActionSelectionScreen = useCallback(({ type, data }) => {
        if (data && !qrLock.current) {
            qrLock.current = true;
            setTimeout(async () => {
                qrLock.current = false;
                navigation.navigate('ActionSelection', { qrData: data });
            }, 500);
        }
    }, []);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Please Grant camera permission | Demande de permission pour la caméra...</Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView
                style={StyleSheet.absoluteFillObject}
                facing="back"
                onBarcodeScanned={navigateToActionSelectionScreen}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
