import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./HomeScreenStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  const itemsData = {
    Task1: {
      checked: false,
      description: "Take a picture of a liquid state matter",
    },
    Task2: { checked: true, description: "Answer 1 of {name}'s questions" },
    Task3: { checked: false, description: "Battle one numeric monster" },
    // Add more items as needed
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.itemContent}>
        <Image
          source={
            itemsData[item].checked
              ? require("../assets/check.png")
              : require("../assets/uncheck.png")
          }
          style={styles.checkmark}
        />
        <View style={styles.textContainer}>
          <Text style={styles.bodyText}>{item}</Text>
          <Text style={styles.description}>{itemsData[item].description}</Text>
        </View>
      </View>
    </View>
  );

  const handleTalkPress = async () => {
    console.log("Ask");
  };

  const handleThirdPress = () => {
    // Implement logic for Third button press
    console.log("Third button pressed");
  };

  const handleScanPress = () => {
    // Implement logic for Scan button press
    console.log("Scan button pressed");

    // Navigate to the "Camera" screen
    navigation.navigate("Camera");
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Image
          source={require("../assets/house.png")}
          style={styles.navbarImage}
        />
        <Text style={styles.headText}>Flamigo</Text>
        <Image
          source={require("../assets/Settings.png")}
          style={styles.navbarImage}
        />
      </View>

      <ImageBackground
        source={require("../assets/Background0.png")}
        style={styles.body}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.actions}>
          {/* Talk Button */}
          <TouchableOpacity onPress={handleTalkPress} style={styles.button}>
            <Image source={require("../assets/talk.png")} style={styles.talk} />
          </TouchableOpacity>

          {/* Third Button */}
          <TouchableOpacity onPress={handleThirdPress} style={styles.button}>
            <Image
              source={require("../assets/battle.png")}
              style={styles.battle}
            />
          </TouchableOpacity>

          {/* Scan Button */}
          <TouchableOpacity onPress={handleScanPress} style={styles.button}>
            <Image source={require("../assets/scan.png")} style={styles.scan} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodySection1}>
          <View style={styles.status}>
            <Text style={styles.lvText}>Flamigo LV: 0</Text>
            <Image
              source={require("../assets/health.png")}
              style={styles.healthImage}
            />
          </View>
          <View style={styles.env}>
            <Image
              source={require("../assets/character/Character.png")}
              style={styles.characterImage}
            />
            <View style={styles.env2}></View>
          </View>
          <View style={styles.textBox}></View>
        </View>

        <View style={styles.bodySection2}>
          <Text style={styles.bodyText}>Body Section 2</Text>
          <FlatList
            data={Object.keys(itemsData)}
            renderItem={renderItem}
            keyExtractor={(item) => item}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
