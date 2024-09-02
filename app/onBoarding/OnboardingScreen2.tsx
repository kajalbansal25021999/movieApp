import { useNavigation, useRouter } from "expo-router";
import { SetStateAction, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { completeOnboarding } from "../../redux/actions";

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"];

export default function OnboardingScreen2() {
  const [selectedgenre, setSelectedGenre] = useState("");

  const onClickGenre = (genre: SetStateAction<string>) => {
    setSelectedGenre(genre);
  };

  const router = useRouter();
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeOnboarding());
    router.replace("/(tabs)");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text
        style={{
          fontWeight: 700,
          fontSize: 24,
          lineHeight: 30,
          color: "#030303",
          marginTop: 32,
          textAlign: "center",
        }}
      >
        Select Your Favorite Genres
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 56,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {genres.map((genre, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onClickGenre(genre)}
              style={{
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#E5E7EB",
                backgroundColor:
                  selectedgenre === genres[index] ? "#5664F5" : "white",
                alignItems: "center",
                padding: 12,
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  color: selectedgenre === genres[index] ? "white" : "black",
                }}
              >
                {genre}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity
        onPress={handleComplete}
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
  );
}

const styles = StyleSheet.create({});
