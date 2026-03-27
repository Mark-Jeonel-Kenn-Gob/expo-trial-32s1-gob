import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Team Members:</Text>
      <Text>Clavines, Miguel Arwyn</Text>
      <Text>Gob, Mark Jeonel Kenn</Text>
      <Text>Latonero, Vince Phillip</Text>
      <Text>Peñas, John Patrick</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc6c6ff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    color: "#6d0f22ff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
