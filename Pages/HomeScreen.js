import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './HomeScreenStyles';


// ... (import statements)

const HomeScreen = ({ navigation }) => {
  const [dynamicText, setDynamicText] = useState('');
  const [LV, setLV] = useState('Flamigo LV: 1');
  const [password, onChangeText] = useState('');
  const [characterImageSource, setCharacterImageSource] = useState(
    require('../assets/Character_2/Normal2.png')
  );
  const [healthImageSource, setHealthImageSource] = useState(
    require('../assets/health_100.png')
  );
  const inputRef = useRef(null);

  const [itemsData, setItemsData] = useState({
    Task1: { checked: false, description: 'Take a picture of a liquid state matter' },
    Task2: { checked: false, description: "Answer 1 of Flamigo's questions" },
    Task3: { checked: false, description: 'Battle one numeric monster' },
    // Add more items as needed
  });

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.itemContent}>
        <Image
          source={itemsData[item].checked ? require('../assets/check.png') : require('../assets/uncheck.png')}
          style={styles.checkmark}
        />
        <View style={styles.textContainer}>
          <Text style={styles.bodyText}>{item}</Text>
          <Text style={styles.description}>{itemsData[item].description}</Text>
        </View>
      </View>
    </View>
  );

  const changeCharacterImage = () => {
    // Logic to change the character image based on your requirements
    // For example, you can use a state variable to manage different images
    setCharacterImageSource(require('../assets/Character_2/Hurt2.png'));
  };

  const changeHealthImage = () => {
    // Logic to change the health image based on your requirements
    setHealthImageSource(require('../assets/health_75.png'));
  };

  const handleTalkPress = async () => {
    console.log('Ask');
    setTimeout(() => {
    setItemsData({
      ...itemsData,
      Task2: { ...itemsData.Task2, checked: true },
    });
    setCharacterImageSource(require('../assets/Character_2/Happy2.png'));
   }, 2000);
    navigation.navigate('Home1');
  };

  const handleThirdPress = () => {
    console.log('Ask');
    // Call the function to change the character image
    setTimeout(() => {
      changeHealthImage();
      setItemsData({
        ...itemsData,
        Task3: { ...itemsData.Task3, checked: true },
      });
  }, 2000);
  navigation.navigate('Home2');
    
  };

  const handleScanPress = () => {
    // Implement logic for Scan button press
    console.log('Scan button pressed');
    setItemsData({
      ...itemsData,
      Task1: { ...itemsData.Task2, checked: true },
    });

    navigation.navigate('Camera');
    setTimeout(() => {
      setLV('Flamigo LV: 2');
    }, 2000); 
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
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
              <Image source={require('../assets/battle.png')} style={styles.battle} />
            </TouchableOpacity>

            {/* Scan Button */}
            <TouchableOpacity onPress={handleScanPress} style={styles.button}>
              <Image source={require('../assets/scan.png')} style={styles.scan} />
            </TouchableOpacity>
          </View>

          <View style={styles.bodySection1}>
            <View style={styles.status}>
              <Text style={styles.lvText}>{LV}</Text>
              <Image source={healthImageSource} style={styles.healthImage} />
            </View>
            <View style={styles.env}>
              <Image source={characterImageSource} style={styles.characterImage} />
            </View>
          </View>

          <View style={styles.bodySection2}>
            <FlatList data={Object.keys(itemsData)} renderItem={renderItem} keyExtractor={(item) => item} />
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
