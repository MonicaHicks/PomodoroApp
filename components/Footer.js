import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../assets/theme";

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Home Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      {/* Timer Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SetUpTimer")}
      >
        <Text style={styles.buttonText}>Timer</Text>
      </TouchableOpacity>

      {/* Placeholder Button 1 */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Tasks</Text>
      </TouchableOpacity>

      {/* Placeholder Button 2 */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Star Jar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: theme.colors.primary,
    borderTopWidth: 1,
    borderColor: "#ddd",
    height: "10%",
  },
  button: {
    padding: 10,
    marginBottom: "6%",
    backgroundColor: theme.colors.background,
    borderRadius: "15%",
  },
  buttonText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
