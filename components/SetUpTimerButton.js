import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

export default function SetUpTimerButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("SetUpTimer")}>
      <LinearGradient colors={["#34eb77", "#2ecc71"]} style={styles.button}>
        <Text style={styles.buttonText}>Set up a Timer</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: width * 0.6,
    backgroundColor: "#2ecc71",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
