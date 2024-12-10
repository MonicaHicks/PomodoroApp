import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Header from "./components/Header";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.welcomeText}>Welcome to Monidoro!</Text>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("./assets/starrie.png")}
          style={styles.image}
        />
        <Text style={styles.subtitle}>
          Click below to get the party started!
        </Text>

        {/* Center the button */}
        <TouchableOpacity>
          <LinearGradient colors={["#34eb77", "#2ecc71"]} style={styles.button}>
            <Text style={styles.buttonText}>Set-up a Timer</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", // Center children horizontally
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    width: "100%",
    paddingHorizontal: 20,
  },
  bodyText: {
    marginVertical: 30, // Increase the space
    textAlign: "center",
    fontSize: 16,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#2ecc71",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: width * 0.4, // Dynamically scale image size
    height: height * 0.2,
  },
});
