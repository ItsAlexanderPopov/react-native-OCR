/* import React, { useRef, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import TesseractOcr, { LANG_ENGLISH } from 'react-native-tesseract-ocr';

const PhotoScreen = ({ route }) => {
    const { capturedImage } = route.params;
    const sketchRef = useRef(null);
    const [recognizedText, setRecognizedText] = useState('');

    const handleRecognizeText = async () => {
        const { uri } = await sketchRef.current.save();
        const recognized = await TesseractOcr.recognize(uri, LANG_ENGLISH, {
            whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            blacklist: '!"#$%&/()={}[]+*-_:;<>'
        });
        setRecognizedText(recognized);
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: capturedImage }} style={styles.image} />
            <SketchCanvas
                ref={sketchRef}
                style={styles.canvas}
                strokeColor="#FF0000"
                strokeWidth={10}
            />
            <TouchableOpacity style={styles.button} onPress={handleRecognizeText}>
                <Text>Recognize Text</Text>
            </TouchableOpacity>
            <Text style={styles.recognizedText}>{recognizedText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'contain',
    },
    canvas: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    button: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#DDDDDD',
        borderRadius: 5,
    },
    recognizedText: {
        marginTop: 10,
        fontSize: 16,
    },
});

export default PhotoScreen;
 */