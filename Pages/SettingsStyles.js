import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskContainer: {
    marginBottom: 20,
  },
  taskText: {
    fontSize: 18,
    marginBottom: 10,
  },
  difficultyContainer: {
    marginBottom: 20,
  },
  difficultyText: {
    fontSize: 18,
    marginBottom: 10,
  },
  difficultyOption: {
    fontSize: 16,
  },
  characterColorContainer: {
    marginBottom: 20,
  },
  characterColorText: {
    fontSize: 18,
    marginBottom: 10,
    resizeMode:'center',
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
  },
  flagImage:{
    height:50,
    width:50,
  },
  characterColorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
  },

  characterColorImageSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
});
