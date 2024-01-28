import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './SettingsStyles'; // Import the styles from the separate file

const SettingsScreen = () => {
  const navigation = useNavigation();

  const [selectedDifficulty, setSelectedDifficulty] = useState('1st Grade');
  const [selectedCharacterColor, setSelectedCharacterColor] = useState('Red');

  const flagImages = [
    { id: 1, name: 'Flag1', image: require('../assets/flag.png') },
    { id: 2, name: 'Flag2', image: require('../assets/flag.png') },
    { id: 3, name: 'Flag3', image: require('../assets/flag.png') },
  ];

  const characterColors = [
    { id: 1, name: 'Red', image: require('../assets/Character_2/Normal1.png') },
    { id: 2, name: 'Blue', image: require('../assets/Character_2/Normal2.png') },
    { id: 3, name: 'Green', image: require('../assets/Character_2/Normal3.png') },
    { id: 4, name: 'Yellow', image: require('../assets/Character_2/Normal4.png') },
    { id: 5, name: 'Purple', image: require('../assets/Character_2/Normal5.png') },
  ];

  const renderFlagItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleFlagPress(item)}>
      <Image source={item.image} style={styles.flagImage} />
    </TouchableOpacity>
  );

  const renderCharacterColorItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCharacterColorPress(item)}>
      <Image source={item.image} style={styles.characterColorImage} />
    </TouchableOpacity>
  );

  const handleDifficultyPress = (difficulty) => {
    setSelectedDifficulty(difficulty);
    // You can perform additional actions based on the selected difficulty
  };

  const handleFlagPress = (flag) => {
    // You can perform additional actions based on the selected flag
  };

  const handleCharacterColorPress = (color) => {
    setSelectedCharacterColor(color.name);
    // You can perform additional actions based on the selected character color
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Settings</Text>

      {/* Task with Flag Images */}
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>Task:</Text>
        <FlatList
          data={flagImages}
          renderItem={renderFlagItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </View>

      {/* Difficulty */}
      <View style={styles.difficultyContainer}>
        <Text style={styles.difficultyText}>Difficulty:</Text>
        <TouchableOpacity onPress={() => handleDifficultyPress('5th Grade')}>
          <Text
            style={[
              styles.difficultyOption,
              { color: selectedDifficulty === '5th Grade' ? 'blue' : 'black' },
            ]}
          >
            5th Grade
          </Text>
        </TouchableOpacity>
        {/* Add similar TouchableOpacity elements for other difficulty levels */}
      </View>

      {/* Character Colors */}
      <View style={styles.characterColorContainer}>
        <Text style={styles.characterColorText}>Character Color:</Text>
        <FlatList
          data={characterColors}
          renderItem={renderCharacterColorItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </View>

      {/* Navigation Button */}
      <TouchableOpacity style={styles.saveButton} onPress={navigateToHome}>
        <Text style={styles.saveButtonText}>Save and Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;



