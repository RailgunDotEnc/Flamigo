import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { styles } from './HomeScreenStyles';
import { useNavigation } from '@react-navigation/native';
import fetch from 'isomorphic-fetch'; // Import isomorphic-fetch

const CameraPage = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const flipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        // Display a flash effect
        await cameraRef.current.takePictureAsync({ onPictureSaved });

        // You can further handle the saved photo URI as needed
      } catch (error) {
        console.error('Error taking or saving picture:', error);
        // Handle error
      }
    }
  };

  const onPictureSaved = async (photo) => {
    console.log('Photo taken:', photo.uri);

    // Save the captured photo to the device's photo library
    await MediaLibrary.saveToLibraryAsync(photo.uri);
    console.log('Photo saved to library');

    // Display the captured image
    setCapturedImage(photo.uri);

    // Call the API to process the image asynchronously
    callApiWithImage(photo.uri);
  };

  const callApiWithImage = async (imageUri) => {
    try {
      // Read the image file and convert it to base64
      const imageData = await fs.promises.readFile(imageUri, { encoding: 'base64' });

      // Prepare the request body
      const requestBody = {
        contents: [
          {
            parts: [
              { text: 'What is this picture?' },
              {
                inline_data: {
                  mime_type: 'image/jpeg',
                  data: imageData,
                },
              },
            ],
          },
        ],
      };

      // API key for Google Cloud API
      const apiKey = 'YOUR_GOOGLE_CLOUD_API_KEY';

      // Make the HTTP request using fetch
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' +
          apiKey,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      // Handle the API response data as needed
      console.log(data);
    } catch (error) {
      // Handle error
      //Alert.alert('Error', 'Failed to process image. Please try again.');
    }
  };

  const HomePress = () => {
    console.log('Home pressed');
    // Navigate to the "Home" screen
    navigation.navigate('Home');
  };

  if (hasCameraPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={HomePress}>
          <Image source={require('../assets/house.png')} style={styles.navbarImage} />
        </TouchableOpacity>
        <Text style={styles.headText}>Flamigo</Text>
        <Image source={require('../assets/Settings.png')} style={styles.navbarImage} />
      </View>

      <Camera style={{ flex: 1 }} type={cameraType} ref={cameraRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={flipCamera}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'center',
              alignItems: 'center',
              bottom: '-80%',
              left: '-22%',
            }}
            onPress={takePicture}
          >
            <Image source={require('../assets/camera.png')} style={styles.camImage} />
          </TouchableOpacity>
        </View>
      </Camera>

      {capturedImage && (
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          <Image source={{ uri: capturedImage }} style={{ width: 100, height: 150 }} />
        </View>
      )}
    </View>
  );
};

export default CameraPage;





