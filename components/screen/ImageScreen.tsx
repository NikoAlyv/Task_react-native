import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Images from "./Images";

const ImageScreen = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      {url && !loading ? (
        <Image style={styles.image} src={url} />
      ) : !loading ? (
        <Text>No Image uri</Text>
      ) : (
        <ActivityIndicator size={"large"}></ActivityIndicator>
      )}

      <View style={styles.button}>
        {Images.map((img, index) => (
          <Button
            key={index}
            title={img.title}
            onPress={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setUrl(img.uri);
              }, 1000);
            }}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 120,
  },
  button: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default ImageScreen;
