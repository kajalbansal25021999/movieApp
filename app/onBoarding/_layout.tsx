import { Stack } from "expo-router";
import React from "react";

export default function OnboardingStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="OnboardingScreen1"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingScreen2"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
