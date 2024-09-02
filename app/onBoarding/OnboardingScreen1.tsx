import { useNavigation, useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function OnboardingScreen1() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ marginTop: 12, alignItems: "center" }}>
        <Image
          source={require("@/assets/images/movie.png")}
          style={{ height: 40, width: 40 }}
        />
        <Text
          style={{
            fontWeight: 700,
            fontSize: 24,
            lineHeight: 30,
            color: "#030303",
            marginTop: 32,
          }}
        >
          Welcome to My Movies
        </Text>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 20,
            color: "#030303",
            marginTop: 16,
          }}
        >
          Let’s get to know you!
        </Text>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 20,
            color: "#030303",
            marginTop: 39,
          }}
        >
          Enter your name
        </Text>
      </View>
      <View style={{ marginTop: 24 }}>
        <TextInput
          placeholder="Your Name"
          placeholderTextColor="#94A3B8"
          cursorColor="#94A3B8"
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 8,
            paddingVertical: 12,
            paddingLeft: 24,
          }}
        />
        <TouchableOpacity
          onPress={() => router.push("/onBoarding/OnboardingScreen2")}
          style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            backgroundColor: "#5664F5",
            alignItems: "center",
            padding: 12,
            marginTop: 12,
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
