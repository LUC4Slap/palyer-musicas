import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ titulo }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.txtHeader}>{!titulo ? "App Música" : titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Estilo do titulo
  header: {
    backgroundColor: "#1db954",
    width: "100%",
    padding: 20,
  },
  txtHeader: {
    textAlign: "center",
    color: "#fff",
    fontSize: 35,
  },
});

export default Header;
