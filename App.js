import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [ modalVisible, setModalVisible ] = useState( false )
  const [ enteredGoalText, setEnteredGoalText ] = useState( '' )
  const [ courseGoals, setCourseGoal ] = useState( [] )
  const startAddGoalHandler = () => {
    setModalVisible( true )
  }
  const endAddGoalHandler = () => {
    setModalVisible( false )
  }
  const goalInputHandler = ( enteredText ) => {
    setEnteredGoalText( enteredText );
  }
  const addGoalHandler = () => {
    setCourseGoal( currentCourseGoals => [ ...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() } ] )
    setEnteredGoalText( '' )
    endAddGoalHandler();
  }
  const deleteGoalHandler = ( id ) => {
    setCourseGoal( currentCourseGoals => {
      return currentCourseGoals.filter( ( goal ) => goal.id !== id )
    } )
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={ styles.appContainer }>
        <Button title="Add New Goal" color="#a065ec" onPress={ startAddGoalHandler } />
        {
          modalVisible === true && (
            <GoalInput goalInputHandler={ goalInputHandler } addGoalHandler={ addGoalHandler } enteredGoalText={ enteredGoalText } visible={ modalVisible } endAddGoalHandler={ endAddGoalHandler } />
          )
        }
        <View style={ styles.goalsContainer }>
          <FlatList data={ courseGoals } renderItem={ ( itemData ) => {
            return (
              <GoalItem text={ itemData.item.text } id={ itemData.item.id } deleteGoalHandler={ deleteGoalHandler } />
            )
          } } keyExtractor={ ( item, index ) => {
            return item.id;
          } } />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create( {
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
} );
