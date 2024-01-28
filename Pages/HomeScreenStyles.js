// HomeScreenStyles.js

import { Button, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  navbar: {
    backgroundColor: 'transparent',
    padding: 10,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarImage: {
    width: 30,
    height: 30,
  },
  body: {
    flex: 2, // 2 times bigger
  },
  bodySection1: {
    flex: 2, // Takes 2/3 of the body height
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodySection2: {
    flex: 1, // Takes 1/3 of the body height
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Light dark transparent background
    justifyContent: 'flex-start', // Move content to the top
    alignItems: 'flex-start', // Align content to the left
    borderColor: 'black',
    borderWidth: 2,
    width: "100%", // Take full width
    paddingHorizontal: 10, // Add some padding if needed
  },  
  backgroundImageStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  bodyText: {
    fontSize: 18,
    color: 'white',
  },
  characterImage: {
    width: 150,
    height: 150,
    left:"-30%",
  },
  healthImage: {
    resizeMode: 'center',
    left: "-24%",
    bottom:"50%",
    width: 200,
    height: 250,
  },
  noteSection: {
    backgroundColor: 'lightcoral',
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: 18,
    top: "5%",
  },
  lvText: {
    fontSize: 28,
    bottom: "-45%",
    left:"-25%",
    fontStyle: 'italic',

  },
  actions: {
    flex: 2, // Takes 2/3 of the body height
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  status: {
    flex: 1, // Takes 2/3 of the body height
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  chara: {
    flex: 1, 
    justifyContent: 'center',
  },

  talk: {
    resizeMode: 'center',
    flex: 1,
    width: 60,
    height: 60,
    top:"0%",
  },
  battle: {
    resizeMode: 'center',
    flex: 1,
    width: 60,
    height: 60,
    top:"-20%",
  },
  scan: {
    resizeMode: 'center',
    flex: 1,
    width: 60,
    height: 60,
    top:"0%",
  },
  button:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  camImage: {
    width: 60,
    height: 60,
  },
  checkmark:{
    width:25,
    height:25,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  textContainer: {
    marginLeft: 10, // Adjust the margin as needed
  },
  
  description: {
    marginLeft: 5, // Adjust the margin as needed
    color: 'black', // Optional: You can customize the color of the description
  },
  env: {
    flex: 1, // Takes 2/3 of the body height
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    bottom:"20%",
  },
  env2:{
    flex: 1, // Takes 1/3 of the body height
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Light dark transparent background
    justifyContent: 'flex-start', // Move content to the top
    alignItems: 'flex-start', // Align content to the left
    borderColor: 'black',
    borderWidth: 2,
    maxWidth:"40%",
    height:"80%",
  },
  Prompt:{
    backgroundColor:'rgba(0, 0, 0, 0.3)',
    fontFamily: "serif",
    textShadowColor:"black",
    textShadowRadius:7,
    textShadowOffset: {width: 3, height: 3},
    fontWeight:'bold',
    fontSize: 25,
    position: "absolute",
    fontStyle: "italic",
    textAlign: 'center',
    top:"60%",
},
InputBox:{
  borderColor:"black",
  backgroundColor:"rgba(0, 0, 0, 0.3)",
  width:200,
  height: 50,
  borderWidth: 4,
  fontSize: 25,
  top:"-25%",
  textAlign: 'center',
  left:"0%",

},
});


