import React from "react";
import { StyleSheet, View } from "react-native";

export default function ProgressBar({ totalDots, filledDots, style }) {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < totalDots; i++) {
      dots.push(
        <View
          key={i}
          style={i < filledDots ? [styles.dot, styles.filledDot] : styles.dot}
        />
      );
    }
    return dots;
  };

  return <View style={[styles.container, style]}>{renderDots()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  filledDot: {
    backgroundColor: "#2ecc71", // Green for filled dots
  },
});
