import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";

// import { Container } from './styles';

const Player = () => {
  return (
    <View style={styles.player}>
      <TouchableOpacity style={styles.btn}>
        <AntDesign name="banckward" size={35} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <AntDesign name="playcircleo" size={40} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <AntDesign name="forward" size={35} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  player: {
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 999,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btn: {
    marginRight: 20,
    marginLeft: 20,
  },
});

export default Player;
