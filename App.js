import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";

// Imported all custom components including GoalListHeader
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import GoalListHeader from "./components/GoalListHeader";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) return;

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function clearAllGoalsHandler() {
    if (courseGoals.length === 0) return;

    Alert.alert("Clear All", "Delete all course goals? Sure ka na ba?", [
      { text: "Cancel", style: "cancel" },
      { text: "Confirm", onPress: () => setCourseGoals([]) },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.mainTitle}>Software Design 2 Goals</Text>

      <GoalInput onAddGoal={addGoalHandler} />

      {/* ILO1: The container size is limited by the height style below */}
      <View style={styles.goalListContainer}>
        {/* ILO2: Implemented the new custom component and passed props */}
        <GoalListHeader
          hasGoals={courseGoals.length > 0}
          onReset={clearAllGoalsHandler}
        />

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#E5FFDE",
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#18020C",
    marginBottom: 20,
  },
  goalListContainer: {
    //flex: 5,
    height: 630, // ILO1: This limits the container size so scrolling triggers
  },
});
