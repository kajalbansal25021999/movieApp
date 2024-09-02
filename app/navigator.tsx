import { Stack } from "expo-router";
import React from "react";
import { useSelector } from "react-redux";

const StackNavigator = () => {
  const onboardingCompleted = useSelector(
    (state) => state.onboarding.completed
  );

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!onboardingCompleted ? (
        <>
          <Stack.Screen name="(onBoarding)" options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </>
      )}
    </Stack>
  );
};

export default StackNavigator;
