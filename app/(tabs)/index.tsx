import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import Movie from "@/components/Movie";

const index = () => {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  return (
    <View style={styles.container}>
      <Movie />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
});
