import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressBar from "./ProgressBar";

export default function Timer({ route }) {
  const { workDuration, restDuration, totalRounds } = route.params;

  const [isWorkSession, setIsWorkSession] = useState(true);
  const [timeLeft, setTimeLeft] = useState(workDuration);
  const [roundsCompleted, setRoundsCompleted] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          playSound(isWorkSession);
          switchSession();
          return isWorkSession ? restDuration : workDuration;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isWorkSession]);

  const playSound = async (isWorkSession) => {
    const soundFile = isWorkSession
      ? require("../assets/sounds/dreamChimes.mp3")
      : require("../assets/sounds/smallBell.mp3");
    console.log("Loading sound file:", soundFile);

    try {
      const { sound } = await Audio.Sound.createAsync(
        soundFile,
        (initialStatus = { shouldPlay: true }),
        (onPlaybackStatusUpdate = null),
        (downloadFirst = true)
      );
      await sound.playAsync();
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  const switchSession = () => {
    setIsWorkSession(!isWorkSession);
    if (!isWorkSession) {
      setRoundsCompleted((prev) => Math.min(prev + 1, totalRounds));
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isWorkSession ? "#d4f5d4" : "#d4e8f5" },
      ]}
    >
      <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
      <ProgressBar
        totalDots={totalRounds}
        filledDots={roundsCompleted}
        style={styles.progressBar}
      />
      <Text style={styles.sessionText}>
        {isWorkSession ? "Work Session" : "Rest Session"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  progressBar: {
    marginVertical: 20,
  },
  sessionText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
