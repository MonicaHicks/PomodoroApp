import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
const { width, height } = Dimensions.get("window");

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/MonidoroHeader.png")}
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
    height: "16%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    top: "30%",
    width: "70%", // Adjust width for the logo size
    height: "40%", // Adjust height for the logo size
  },
});
