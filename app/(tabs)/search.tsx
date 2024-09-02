import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        borderRadius: 8,
        elevation: 3,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        height: 280,
        width: "100%",
      }}
    >
      <View style={{ flexDirection: "row", borderRadius: 8 }}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
            //   uri: imageurl,
          }}
          style={{ height: 208, width: 150, margin: 12, borderRadius: 8 }}
        />
        <View style={{ margin: 16, paddingTop: 2, flex: 1 }}>
          <Text
            style={{
              color: "#030303",
              marginBottom: 2,
              fontSize: 20,
              lineHeight: 25,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 16,
              marginBottom: 8,
            }}
          >
            {item.description_full
              ? item.description_full
              : `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers computer hacker learns from mysterious rebels about his role in the war against its controllers.`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default function Search({}) {
  const { query } = useLocalSearchParams();
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigation = useNavigation();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ww4.yts.nz/api/v2/list_movies.json"
      );
      // setData(response.data.data.movies);
      setFilteredMovies(
        response.data.data.movies.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderColor: "rgba(3,3,3,0.1)",
          padding: 16,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("@/assets/images/Frame.png")}
            style={{ height: 24, width: 24, marginRight: 8 }}
          />

          <Text
            style={{
              fontSize: 24,
              lineHeight: 30,
              fontWeight: 700,
              color: "#030303",
            }}
          >
            Favorite Movies
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
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
          <Text style={{ color: "white" }}>Back</Text>
        </TouchableOpacity>
      </View>
      {filteredMovies ? (
        <View style={{ flex: 1, margin: 20, backgroundColor: "white" }}>
          <FlatList
            data={filteredMovies}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ marginTop: 16 }} />}
          />
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No filtered movies</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
