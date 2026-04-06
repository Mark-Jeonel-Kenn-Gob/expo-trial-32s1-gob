import { StyleSheet, View, Text } from "react-native";

function GoalListHeader(props) {
  return (
    <View style={styles.listHeaderRow}>
      <Text style={styles.sectionHeader}>Task List</Text>
      {props.hasGoals && (
        <Text style={styles.clearBtn} onPress={props.onReset}>
          Reset List
        </Text>
      )}
    </View>
  );
}

export default GoalListHeader;

const styles = StyleSheet.create({
  listHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionHeader: {
    color: "#236c78ff", // Vintage Grape
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  clearBtn: {
    color: "#9590A8", // Lavender Grey
    fontSize: 13,
    fontWeight: "500",
  },
});
