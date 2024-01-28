// HomeScreen.js

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './HomeScreenStyles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleTalkPress = () => {
    // Implement logic for Talk button press
    console.log('Talk button pressed');
  };

  const handleThirdPress = () => {
    // Implement logic for Third button press
    console.log('Third button pressed');
  };

  const handleScanPress = () => {
    // Implement logic for Scan button press
    console.log('Scan button pressed');

    // Navigate to the "Camera" screen
    navigation.navigate('Camera');
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Image source={require('../assets/house.png')} style={styles.navbarImage} />
        <Text style={styles.headText}>Flamigo</Text>
        <Image source={require('../assets/Settings.png')} style={styles.navbarImage} />
      </View>

      <ImageBackground
        source={require('../assets/Background0.png')} 
        style={styles.body}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.actions}>
          {/* Talk Button */}
          <TouchableOpacity onPress={handleTalkPress} style={styles.button}>
            <Image source={require('../assets/talk.png')} style={styles.talk} />
          </TouchableOpacity>

          {/* Third Button */}
          <TouchableOpacity onPress={handleThirdPress} style={styles.button}>
            <Image source={require('../assets/scan.png')} style={styles.third} />
          </TouchableOpacity>

          {/* Scan Button */}
          <TouchableOpacity onPress={handleScanPress} style={styles.button}>
            <Image source={require('../assets/scan.png')} style={styles.scan} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodySection1}>
          <View style={styles.status}>
              <Text style={styles.lvText}>LV: 0</Text>
              <Image source={require('../assets/health.png')} style={styles.healthImage}/>
          </View>
          <View style={styles.chara}>
            <Image source={require('../assets/character/Character.png')} style={styles.characterImage}/>
          </View>
        </View>

        <View style={styles.bodySection2}>
          <Text style={styles.bodyText}>Body Section 2</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

