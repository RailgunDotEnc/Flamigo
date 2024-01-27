// HomeScreenStyles.js

import { StyleSheet } from 'react-native';

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
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    maxWidth: "99%",
    left: ".5%",
    bottom: ".2%",
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
});


