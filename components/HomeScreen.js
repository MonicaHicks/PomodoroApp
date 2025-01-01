import { Dimensions, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import theme from "../assets/theme";
import Footer from "./Footer";
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
          Click below to get the party started!
        </Text>
        <View style={styles.buttonContainer}>
          <SetUpTimerButton />
          <SetTasks />
          <SeeStarJar />
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
  },
  body: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "5%",
  },
  bodyText: {
    marginVertical: "6%",
    textAlign: "center",
    fontSize: 16,
  },
  welcomeText: {
    padding: "10%",
    fontSize: 30,
    fontWeight: "bold",
    color: theme.colors.text,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: "center",
    marginTop: "10%",
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
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "50%", // Dynamically scale image size
    height: "35%",
  },
});
