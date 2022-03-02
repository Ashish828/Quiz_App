import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar as sb,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QuizContextProvider } from "./context/QuizContext";

import { categories } from "./categories";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // to show our content below the notch on iphone(works only on ios
    <QuizContextProvider>
      <SafeAreaView style={styles.container}>
        {/* to move between screens */}
        <NavigationContainer>
          {/* navigation header */}
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShadowVisible: false,
              contentStyle: {
                backgroundColor: "#FFFFFF",
              },
            }}
          >
            {/* displaying a Home screen */}
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {/* passsing category details to home screen */}
              {(props) => <HomeScreen {...props} categories={categories} />}
            </Stack.Screen>
            {/* displaying a Quiz screen */}
            <Stack.Screen name="QUIZ" options={{ headerShown: false }}>
              {(props) => <QuizScreen {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
        {/* this is set to auto as default for users(if user have dark theme -
      status bar will dark and vice versa */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </QuizContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? sb.currentHeight : 0, //if in ios the safe area will work but in android we are adding dynamic padding on the top
  },
});
