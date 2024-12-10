import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/MonidoroHeader.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3498db",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    top: 10,
    width: 250, // Adjust width for the logo size
    height: 50, // Adjust height for the logo size
  },
});
