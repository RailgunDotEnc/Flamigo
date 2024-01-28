import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './HomeScreenStyles1';

const HomeScreen1 = () => {
  const navigation = useNavigation();
  const [characterImageSource, setCharacterImageSource] = useState(
    require('../assets/Character_2/Normal2.png')
  );
  const [dynamicText, setDynamicText] = useState('');
  const [password, onChangeText] = useState('');
  const [placeholderText, setPlaceholderText] = useState('Answer');
  const [pageOpenCount, setPageOpenCount] = useState(0); // Initialize count to 0
  const inputRef = useRef(null);
  const [itemsData, setItemsData] = useState({
    Task1: { checked: false, description: 'Take a picture of a liquid state matter' },
    Task2: { checked: false, description: "Answer of Flamigo's questions" },
    Task3: { checked: false, description: 'Battle one numeric monster' },
    // Add more items as needed
  });
  const itemsdata2 = {
    Question1: { "What is the powerhouse of the cell?": 'mitochondria' },
    Question2: {
      'How does energy from the sun travel to the earth?': 'radiation',
    },
    Question3: {
      'Which of these is the most efficient form of heat transfer? Conduction, Convection, Radiation, Heat doesn\'t transfer':
        'radiation',
    },
  };

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

  const handleTalkPress = () => {
    const question = Object.keys(itemsdata2.Question1)[0];
    const correctAnswer = itemsdata2.Question1[question];

    if (password.toLowerCase() === correctAnswer.toLowerCase()) {
      // Correct answer
      onChangeText('Correct');
      console.log('Correct');
      setCharacterImageSource(require('../assets/Character_2/Happy2.png'));
      // Update the state or itemsData to mark the task as checked
      // For example, if Task2 corresponds to the question, you can do:
      setItemsData({
        ...itemsData,
        Task2: { ...itemsData.Task2, checked: true },
      });
      // Change placeholder for the next question
      setPlaceholderText('Next question...');
    } else {
      // Wrong answer
      setCharacterImageSource(require('../assets/Character_2/Angry2.png'));
      onChangeText('Wrong');
    }
  };

  const HomePress = () => {
    console.log('Home pressed');
    // Navigate to the "Home" screen
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.container}>
        {/* Navbar */}
        <View style={styles.navbar}>
          <TouchableOpacity onPress={HomePress}>
            <Image source={require('../assets/house.png')} style={styles.navbarImage} />
          </TouchableOpacity>
          <Text style={styles.headText}>Flamigo</Text>
          <Image source={require('../assets/Settings.png')} style={styles.navbarImage} />
        </View>

        <ImageBackground
          source={require('../assets/Background0.png')}
          style={styles.body}
          imageStyle={styles.backgroundImageStyle}
        >
          <View style={styles.bodySection1}>
            <View style={styles.status}>
              <Text style={styles.lvText}>Flamigo LV: 1</Text>
              <Image source={require('../assets/health_100.png')} style={styles.healthImage} />
            </View>
            <View style={styles.env}>
              <Image source={characterImageSource} style={styles.characterImage} />
              <View style={styles.env2}>
                <Text style={styles.dytext}>{Object.keys(itemsdata2.Question1)[0]}</Text>
              </View>
            </View>
          </View>
          <TextInput
            ref={inputRef}
            style={styles.InputBox}
            onChangeText={onChangeText}
            placeholder={placeholderText}
            value={password}
          />
          <TouchableOpacity onPress={handleTalkPress}>
            <Image source={require('../assets/submit.png')} style={styles.subImage} />
          </TouchableOpacity>
          <View style={styles.bodySection2}>
            <FlatList
              data={Object.keys(itemsData)}
              renderItem={renderItem}
              keyExtractor={(item) => item}
            />
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen1;

