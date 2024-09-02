import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useSelector } from "react-redux";

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
          <Link
            href={{
              pathname: "/details/movieDetail",
              params: item,
            }}
            style={{
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#E5E7EB",
              backgroundColor: "#5664F5",
              padding: 4,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              View Details
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default function Favorite() {
  const favoritemovies = useSelector((state) => state.favorite.favorites);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 40,
      }}
    >
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
      {favoritemovies.length > 0 ? (
        <View style={{ flex: 1, padding: 16 }}>
          <FlatList
            data={favoritemovies}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ marginTop: 16 }} />}
          />
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>NO FAVORITE ITEMS</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
