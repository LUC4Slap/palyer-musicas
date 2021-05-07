import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import Header from "./components/Header";

export default function App() {
  const [audio, setAudio] = useState(null);
  // const [] = useState()
  // const [] = useState()
  // const [] = useState()
  const [musicas, setMusicas] = useState([
    {
      nome: "Wweet child of mine",
      artista: "Guns N Rose",
      playng: true,
      file: "",
    },
    {
      nome: "Welcome to the jungle",
      artista: "Guns N Rose",
      playng: false,
      file: "",
    },
    {
      nome: "This love",
      artista: "Maroon 5",
      playng: false,
      file: "",
    },
  ]);
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <Header />

      <View style={styles.table}>
        <Text style={styles.txtInfos}>Música</Text>
        <Text style={styles.txtInfos}>Artista</Text>
      </View>

      {musicas.map((val) => {
        if (val.playng) {
          return (
            <View key={val.nome} style={styles.table}>
              <TouchableOpacity style={styles.btnTocando}>
                <Text style={[styles.txtInfos, { color: "#fff" }]}>
                  <AntDesign name="play" size={15} color="#fff" /> {val.nome}
                </Text>
                <Text style={[styles.txtInfos, { color: "#fff" }]}>
                  {val.artista}
                </Text>
              </TouchableOpacity>
            </View>
          );
        } else {
          return (
            <View key={val.nome} style={styles.table}>
              <TouchableOpacity>
                <Text>
                  <AntDesign name="play" size={15} color="#fff" /> {val.nome}
                </Text>
                <Text>{val.artista}</Text>
              </TouchableOpacity>
            </View>
          );
        }
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  // Estilo para ver as musicas
  table: {
    flexDirection: "row",
    padding: 20,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
  txtInfos: {
    width: "50%",
    color: "rgb(200,200,200)",
  },
  btnTocando: {
    width: "100%",
    flexDirection: "row",
  },
});

// Tempo da aula 12:02
