import React, { useState, useRef } from 'react';
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
import { styles } from './HomeScreenStyles2';

const HomeScreen2 = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  
  const [characterImageSource, setCharacterImageSource] = useState(
    require('../assets/Character_2/Normal2.png')
  );
  const [characterImageSource2, setCharacterImageSource2] = useState(
    require('../assets/Character_1/Normal1.png')
  );
  const [healthImageSource, setHealthImageSource] = useState(
    require('../assets/health_100.png')
  );
  const [healthImageSource2, setHealthImageSource2] = useState(
    require('../assets/health_100.png')
  );
  const [dynamicText, setDynamicText] = useState('');
  const [password, onChangeText] = useState('');
  const [placeholderText, setPlaceholderText] = useState('Answer');
  const inputRef = useRef(null);
  const [itemsData, setItemsData] = useState({
    Task1: { checked: true, description: 'Take a picture of a liquid state matter' },
    Task2: { checked: false, description: "Answer 1 of Flamigo's questions" },
    Task3: { checked: false, description: 'Battle one numeric monster' },
    // Add more items as needed
  });
  const itemsdata2 = {
    Question1: { "What is 12*13": '156' },
    Question2: {
      "What is 10*10": '100',
    },
    Question3: {
      'Which of these is the most efficient form of heat transfer? Conduction, Convection, Radiation, Heat doesn\'t transfer':
        'radiation',
    },
  };
  const [question, setQuestion] = useState(Object.keys(itemsdata2.Question1)[0]);
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
    setCharacterImageSource(require('../assets/Character_2/Hurt2.png'));
  };

  const handleTalkPress = () => {
    console.log("Attack");
    if (count === 0) {
      console.log("if")
      const currentQuestion = Object.keys(itemsdata2.Question1)[0];
      const correctAnswer = itemsdata2.Question1[currentQuestion];

      if (password.toLowerCase() === correctAnswer.toLowerCase()) {
        incrementCounter();
        // Correct answer
        onChangeText('Correct');
        setHealthImageSource2(require('../assets/health_50.png')); // Change health image dynamically
        setCharacterImageSource2(require('../assets/Character_1/Sad1.png'));
        // Update the state or itemsData to mark the task as checked
        // Change placeholder for the next question
        setQuestion(Object.keys(itemsdata2.Question2)[0]);
      } else {
        // Wrong answer
        setHealthImageSource(require('../assets/health_75.png')); // Change health image dynamically
        onChangeText('Wrong');
      }
    } else {
      console.log("else")
      const currentQuestion = Object.keys(itemsdata2.Question2)[0];
      const correctAnswer = itemsdata2.Question2[currentQuestion];
      console.log(correctAnswer);
      if (password.toLowerCase() === correctAnswer.toLowerCase()) {
        incrementCounter();
        // Correct answer
        onChangeText('Correct');
        console.log('Correct');
        setHealthImageSource2(require('../assets/health.png')); // Change health image dynamically
        setCharacterImageSource2(require('../assets/Character_1/Hurt1.png'));
        // Update the state or itemsData to mark the task as checked
        setItemsData({
          ...itemsData,
          Task2: { ...itemsData.Task2, checked: true },
        });
        // Change placeholder for the next question
        setPlaceholderText('Next question...');
      } else {
        // Wrong answer
        setHealthImageSource(require('../assets/health_75.png')); // Change health image dynamically
        onChangeText('Wrong');
        setQuestion("Defeated");
      }
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
              <Image source={healthImageSource} style={styles.healthImage} />
            </View>
            <View style={styles.status}>
              <Text style={styles.lvText2}>Ben LV: 1</Text>
              <Image source={healthImageSource2} style={styles.healthImage2} />
            </View>
            <View style={styles.env}>
              <Image source={characterImageSource} style={styles.characterImage} />
              <View style={styles.env2}>
                <Image source={characterImageSource2} style={styles.characterImage} />
                <Text style={styles.dytext}>{question}</Text>
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

export default HomeScreen2;

