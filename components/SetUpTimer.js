import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import theme from "../assets/theme";
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
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../assets/images/starrie.png")}
          style={styles.image}
        />

        {/* Mode Selection Buttons */}
        <View style={styles.modeContainer}>
          <TouchableOpacity
            style={[
              styles.modeButton,
              !isSecondsMode && styles.activeModeButton,
            ]}
            onPress={() => setIsSecondsMode(false)}
          >
            <Text style={styles.modeButtonText}>Minutes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modeButton,
              isSecondsMode && styles.activeModeButton,
            ]}
            onPress={() => setIsSecondsMode(true)}
          >
            <Text style={styles.modeButtonText}>Seconds</Text>
          </TouchableOpacity>
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
    backgroundColor: theme.colors.background,
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
    textAlign: "center",
    color: theme.colors.text,
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
    color: theme.colors.text,
    fontWeight: "bold",
  },
  modeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  modeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#ddd",
  },
  activeModeButton: {
    backgroundColor: "#3498db",
  },
  modeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: theme.colors.text,
  },
  button: {
    backgroundColor: theme.colors.buttonPrimary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: theme.colors.buttonText,
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: "35%",
    height: "20%",
    margin: "5%",
  },
});
