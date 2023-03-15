import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import HomeScreen from "./home_screen";
import HelpScreen from "../help_screen/help_screen";
import ViewReadingsScreen from "../view_readings_screen/view_readings_screen";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() : JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="TakeReadings" component={ViewReadingsScreen} />
    </Stack.Navigator>
  );
}