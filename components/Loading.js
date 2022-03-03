import React from "react";
import { Image, View } from "react-native";

const Loading = () => {
  return (
    <View style={{ flex: 1, width: "100%", position: "relative" }}>
      <Image
        width={100}
        height={100}
        style={{
          justifyContent: "center",
          position: "absolute",
          top: "35%",
          left: "22%",
        }}
        source={require("../assets/loadingAnimate.gif")}
      />
    </View>
  );
};

export default Loading;
