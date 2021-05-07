import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Audio } from "expo-av";
import Header from "./components/Header";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <Header />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
});
