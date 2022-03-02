import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import { useFonts, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import AppLoading from "expo-app-loading";

const HomeScreen = ({ navigation, categories }) => {
  const [fontsLoaded, err] = useFonts({
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const difficulty = [
    { label: "Easy", type: "easy" },
    { label: "Medium", type: "medium" },
    { label: "Hard", type: "hard" },
  ];

  return (
    <ScrollView>
      <View style={{ width: "100%", backgroundColor: "transparent" }}>
        {/* home screen header */}
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Let's Play</Text>
          <Text style={styles.subHeading}>
            Choose a category to start playing
          </Text>
        </View>
        {/* displaying all the categories in a card */}
        {categories.map((categorie) => (
          <React.Fragment key={categorie.id}>
            <Card
              navigation={navigation}
              id={categorie.id}
              title={categorie.name}
              category={difficulty}
              bg_color={categorie.bg_color}
              svg={categorie.svg}
              height={categorie.height}
              top={categorie.top}
              right={categorie.right}
            />
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

// styles for header
const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 60,
    marginStart: 30,
    marginTop: 30,
  },
  heading: {
    fontFamily: "Ubuntu_700Bold",
    fontSize: 50,
    marginBottom: 3,
    color: "#ee609c",
  },
  subHeading: {
    fontSize: 18,
    color: "#cccccc",
  },
});

export default HomeScreen;
