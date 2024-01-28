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
    flex: 3, // Takes 2/3 of the body height
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
    width: "98%", // Take full width
    height: "110%",
    paddingHorizontal: 10, // Add some padding if needed
    top:"-1%",
    left:"1%",
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
    flex:1,
    resizeMode:'contain',
    width: 160,
    height: 160,
    left:"-10%",
  },
  healthImage: {
    resizeMode: 'center',
    left: "-25%",
    bottom:"-80%",
    width: 150,
    height: 250,
  },
  lvText: {
    fontSize: 28,
    bottom: "-145%",
    left:"-25%",
    fontStyle: 'italic',

  },
  healthImage2: {
    resizeMode: 'center',
    left: "30%",
    bottom:"10%",
    width: 150,
    height: 250,
  },
  lvText2: {
    fontSize: 28,
    bottom: "-45%",
    left:"30%",
    fontStyle: 'italic',

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
    backgroundColor: 'rgba(0, 0, 0, 0)', // Light dark transparent background
    justifyContent: 'flex-start', // Move content to the top
    alignItems: 'flex-start', // Align content to the left
    maxWidth:"40%",
    height:"80%",
    right:"10%",
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
  top:"0%",
  textAlign: 'center',
  left:"10%",

},
dytext:{
  top:"0%",
  left:"1%",
  flexWrap: 'wrap',
},
subImage: {
  resizeMode: 'center',
  width: 50,
  height: 50,
  top:"-95%",
  left:"70%",
},
});


