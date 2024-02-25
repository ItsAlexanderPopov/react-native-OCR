import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import TextRecognition from '@react-native-ml-kit/text-recognition';

const PhotoScreen = ({ route }) => {
    const { capturedImage } = route.params;
    const [blockTexts, setBlockTexts] = useState([]);

    useEffect(() => {
        const recognizeText = async () => {
            try {
                const result = await TextRecognition.recognize(capturedImage);
                const texts = result.blocks.map(block => block.text);
                const filteredTexts = texts.map(text => text.match(/[a-zA-Z]+/g));
                console.log(filteredTexts);
                setBlockTexts(filteredTexts);
            } catch (error) {
                console.error('Error recognizing text: ', error);
            }
        };
        recognizeText();
    }, [capturedImage]);

    return (
        <View style={styles.container}>
            <Image source={{ uri: capturedImage }} style={styles.image} />
            <ScrollView>
                <View style={styles.textContainer}>
                    {blockTexts.map((text, index) => (
                        <Text key={index}>{text} </Text>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'contain',
    },
    textContainer: {
        marginTop: 20,
    },
});

export default PhotoScreen;
