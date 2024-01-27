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
        <View style={styles.actions}>
          <Image source={require('../assets/talk.png')} style={styles.talk}/>
          <Image source={require('../assets/scan.png')} style={styles.third}/>
          <Image source={require('../assets/scan.png')} style={styles.scan}/>
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

