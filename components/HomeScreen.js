import { Dimensions, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Header from "./Header";
import SeeStarJar from "./SeeStarJar";
import SetTasks from "./SetTasks";
import SetUpTimerButton from "./SetUpTimerButton";
const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.welcomeText}>Welcome to Monidoro!</Text>
      <View style={styles.body}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../assets/images/starrie.png")}
          style={styles.image}
        />
        <Text style={styles.subtitle}>
          Click below to get the {"\n"} party started!
        </Text>
        <View style={styles.buttonContainer}>
          <SetUpTimerButton />
          <SetTasks />
          <SeeStarJar />
        </View>
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
