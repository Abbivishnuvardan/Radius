const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LogIn from "./screens/LogIn";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Open Sans_extrabold": require("./assets/fonts/Open_Sans_extrabold.ttf"),
    Manrope_regular: require("./assets/fonts/Manrope_regular.ttf"),
    Manrope_medium: require("./assets/fonts/Manrope_medium.ttf"),
    Manrope_semibold: require("./assets/fonts/Manrope_semibold.ttf"),
    Manrope_bold: require("./assets/fonts/Manrope_bold.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
