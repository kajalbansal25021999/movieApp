import { SetStateAction, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import axios from "axios";
import Card from "@/components/Card";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"];

export default function Movie() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  // const navigation = useNavigation();
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ww4.yts.nz/api/v2/list_movies.json"
      );
      setData(response.data.data.movies);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchedQuery) => {
    setQuery(searchedQuery);
  };

  const handleSearchClick = () => {
    router.push(`/search?query=${query}`);
    setQuery("");
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderColor: "rgba(3,3,3,0.1)",
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/Frame.png")}
            style={{ height: 16, width: 16, marginRight: 8 }}
          />
          <View>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 24,
                lineHeight: 30,
                color: "#030303",
              }}
            >
              My
            </Text>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 24,
                lineHeight: 30,
                color: "#030303",
              }}
            >
              Movies
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#94A3B8"
            cursorColor="#94A3B8"
            onChangeText={handleSearch}
            style={{
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 8,
              paddingVertical: 4,
              paddingLeft: 8,
              width: 180,
            }}
          />
          <TouchableOpacity onPress={handleSearchClick}>
            <Image
              source={require("@/assets/images/search.png")}
              style={{ height: 16, width: 16, marginLeft: 8 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 4,
          }}
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Card movie={item} key={item.id} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
