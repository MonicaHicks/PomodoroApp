import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
import HomeScreen from "./components/HomeScreen";
import SetTasks from "./components/SetTasks";
import SetUpTimer from "./components/SetUpTimer";
import Timer from "./components/Timer";
const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SetUpTimer"
          component={SetUpTimer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SetTasks"
          component={SetTasks}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
