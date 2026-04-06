import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(""); // Resets the text input field
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
        {/* 4. Bound to the local addGoalHandler */}
        <Button title="Add" color="#634B66" onPress={addGoalHandler} />
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
});
