import axios from "axios";
import { Link } from "expo-router";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width: screenWidth, height } = Dimensions.get("window");

const Card = ({ movie }) => {
  const BASE_URL = "https://ww4.yts.nz";
  const imageEndpoint = movie.url;

  const imageurl = `${BASE_URL}${imageEndpoint}`;

  return (
    <Link
      href={{
        pathname: "/details/movieDetail",
        params: movie,
      }}
    >
      <View style={[styles.cardContainer, { width: screenWidth / 2 - 28 }]}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
            //   uri: imageurl,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {movie.title}
          </Text>
          <Text style={styles.cardDescription}>Rating: {movie.rating}</Text>
        </View>
      </View>
    </Link>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    height: 280,
  },
  cardImage: {
    height: 208,
    margin: 8,
    borderRadius: 8,
  },
  cardContent: {
    padding: 8,
    paddingTop: 2,
  },
  cardTitle: {
    color: "#030303",
    marginBottom: 8,
    fontSize: 16,
    lineHeight: 20,
  },
  cardDescription: {
    color: "#545454",
    fontSize: 12,
    lineHeight: 15,
    // paddingBottom: 12,
  },
});
