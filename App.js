import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);

    // Addish to ILO3: Clear input after adding
    setEnteredGoalText("");
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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What's the next goal, bruv?"
          placeholderTextColor="#9590A8"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add" color="#634B66" onPress={addGoalHandler} />
        </View>
      </View>

      <View style={styles.goalsContainer}>
        <View style={styles.listHeaderRow}>
          <Text style={styles.sectionHeader}>Task List</Text>
          {courseGoals.length > 0 && (
            <Text style={styles.clearBtn} onPress={clearAllGoalsHandler}>
              Reset List
            </Text>
          )}
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#E5FFDE", // Frosted Mint
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#18020C", // Coffee Bean (for strong contrast)
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#BBCBCB", // Ash Grey
    paddingBottom: 25,
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "75%",
    marginRight: 8,
    padding: 12,
    color: "#18020C",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#BBCBCB",
  },
  buttonContainer: {
    width: "20%",
  },
  goalsContainer: {
    flex: 5,
  },
  listHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionHeader: {
    color: "#634B66", // Vintage Grape daw sabi ng coolors
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  clearBtn: {
    color: "#9590A8", // Lavender Grey-ish
    fontSize: 13,
    fontWeight: "500",
  },

  goalItem: {
    padding: 16,
    marginVertical: 6,
    backgroundColor: "#fff", // White cards para clean
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#BBCBCB",

    // Subtle shadow for elevation camown
    shadowColor: "#634B66",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  goalText: {
    color: "#18020C",
    fontSize: 16,
    fontWeight: "400",
  },
});
