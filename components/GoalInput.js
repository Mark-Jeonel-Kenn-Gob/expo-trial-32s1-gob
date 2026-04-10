import { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="What's the next goal, bruv?"
        placeholderTextColor="#9590A8"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        {/* TASK 2 & 3: Replaced <Button> with <Pressable> */}
        <Pressable
          onPress={addGoalHandler}
          android_ripple={{ color: "#9590A8" }} // Android ripple effect
          style={({ pressed }) => [
            styles.customButton,
            pressed && styles.pressedButton, // Dynamic styling when pressed
          ]}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#BBCBCB",
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
  buttonContainer: { width: "20%" },

  // New Styles for the Pressable
  customButton: {
    backgroundColor: "#634B66", // Vintage Grape
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2, // Android shadow
    shadowColor: "#18020C", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  pressedButton: {
    opacity: 0.7, // Gives visual feedback on iOS/Android when tapped
    backgroundColor: "#18020C", // Changes to Coffee Bean on press
  },
  buttonText: {
    color: "#E5FFDE", // Frosted Mint
    fontWeight: "bold",
    fontSize: 16,
  },
});
