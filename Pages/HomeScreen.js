// HomeScreen.js

import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { styles } from './HomeScreenStyles';

const HomeScreen = () => {
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
        {/* Body Section 1 (2 times bigger) */}
        <View style={styles.bodySection1}>
          <Image source={require('../assets/character/Character.png')} style={styles.characterImage}/>
        </View>

        {/* Body Section 2 (light dark transparent background) */}
        <View style={styles.bodySection2}>
          <Text style={styles.bodyText}>Body Section 2</Text>
        </View>

      </ImageBackground>


    </View>
  );
};

export default HomeScreen;

