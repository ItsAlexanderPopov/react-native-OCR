import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const CameraScreen = ({ navigation }) => {

    const openCamera = () => {
        console.log("Launching camera...");
        const options = {
            title: 'Take a picture',
            mediaType: 'photo',
            quality: 0.7,
            maxWidth: 1000,
            maxHeight: 1000,
        };
    
        launchCamera(options, (response) => {
            console.log("ImagePicker response:", response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const capturedImageUri = response.assets[0].uri;
                console.log("Navigating to PhotoScreen with image uri:", capturedImageUri);
                navigation.navigate('Results', { capturedImage: capturedImageUri });
            }
        });
    };

    return (
        <View style={styles.container}>
            <Button title="OPEN CAMERA" onPress={openCamera} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CameraScreen;
