import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "./Footer";
import Header from "./Header";

export default function SetUpTimer() {
  const [workTime, setWorkTime] = useState(25); // Default 25 minutes
  const [restTime, setRestTime] = useState(5); // Default 5 minutes
  const [rounds, setRounds] = useState(4); // Default 4 rounds
  const [isSecondsMode, setIsSecondsMode] = useState(false); // Default is minutes

  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate("Timer", {
      workDuration: isSecondsMode ? workTime : workTime * 60, // Convert to seconds if in minutes mode
      restDuration: isSecondsMode ? restTime : restTime * 60, // Convert to seconds if in minutes mode
      totalRounds: rounds,
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Pomodoro Timer Setup</Text>

        {/* Toggle Seconds/Minutes */}
        <View style={styles.toggleContainer}>
          <Text style={styles.label}>
            Mode: {isSecondsMode ? "Seconds" : "Minutes"}
          </Text>
          <Switch
            value={isSecondsMode}
            onValueChange={(value) => setIsSecondsMode(value)}
          />
        </View>

        {/* Work Time Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Work Time ({isSecondsMode ? "seconds" : "minutes"}):
          </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={workTime.toString()}
            onChangeText={(text) => setWorkTime(Number(text))}
          />
        </View>

        {/* Rest Time Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Rest Time ({isSecondsMode ? "seconds" : "minutes"}):
          </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={restTime.toString()}
            onChangeText={(text) => setRestTime(Number(text))}
          />
        </View>

        {/* Rounds Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Number of Rounds:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={rounds.toString()}
            onChangeText={(text) => setRounds(Number(text))}
          />
        </View>

        {/* Start Button */}
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#2ecc71",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
