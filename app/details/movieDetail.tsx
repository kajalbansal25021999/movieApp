import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "@/redux/actions";

const { height, width } = Dimensions.get("window");

const MovieDetail = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const dispatch = useDispatch();

  const timestamp = params.date_uploaded;
  const date = new Date(timestamp);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const favoritemovies = useSelector((state) => state.favorite.favorites);

  const isDisable = () => {
    return favoritemovies && favoritemovies.some((fav) => fav.id === params.id);
  };

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
          justifyContent: "center",
          borderBottomWidth: 1,
          borderColor: "rgba(3,3,3,0.1)",
          padding: 16,
        }}
      >
        <Image
          source={require("@/assets/images/Frame.png")}
          style={{ height: 16, width: 16, marginRight: 8 }}
        />

        <Text
          style={{
            fontSize: 20,
            lineHeight: 25,
            color: "#030303",
          }}
        >
          My Movies
        </Text>
      </View>
      <View style={{ flex: 1, padding: 16 }}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
            //   uri: imageurl,
          }}
          style={styles.cardImage}
        />

        <Text style={styles.cardTitle}>{params.title}</Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 20,
            marginBottom: 18,
          }}
        >
          {params.description_full
            ? params.description_full
            : `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.content}>Release Date:</Text>
            <Text style={styles.content}>Genre:</Text>
          </View>
          <View>
            <Text style={[styles.content, { color: "#030303" }]}>
              {formattedDate}
            </Text>
            <Text style={[styles.content, { color: "#030303" }]}>
              {params.genres}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 16 }}>
        <TouchableOpacity
          onPress={() => dispatch(addToFavorite(params))}
          disabled={isDisable()}
          style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            backgroundColor: isDisable() ? "gray" : "#5664F5",
            alignItems: "center",
            padding: 12,
            marginTop: 12,
          }}
        >
          <Text style={{ color: "white" }}>Mark as Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  cardImage: {
    height: height / 2,
    // marginVertical: 16,
    borderRadius: 8,
    width: width / 2,
    alignSelf: "center",
  },
  cardTitle: {
    color: "#030303",
    marginBottom: 12,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 16,
  },
  content: { fontSize: 12, lineHeight: 16, color: "#545454" },
});
