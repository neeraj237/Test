import { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    //console.log(enteredGoalText);
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, 
      enteredGoalText
    ]);

  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your cource goal!!' onChangeText={goalInputHandler}/>    
        <Button title = "Add goal" onPress={addGoalHandler} />
      </View>
    <View style={styles.goalContainer}>
       <Text>{courseGoals.map((goal) => <Text key={goal}>{goal+ '\n'}</Text>)}</Text>
    </View>
    </View>
  );    
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width:'70%',
    marginRight: 8,
    padding: 8
  },
  goalContainer: {
    flex: 5
  }
});
