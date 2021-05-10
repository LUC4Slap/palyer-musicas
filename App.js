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
import Player from "./components/Player";

export default function App() {
  const [audio, setAudio] = useState(null);
  const [audioIndex, setAudioIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  // const [] = useState()
  const [musicas, setMusicas] = useState([
    {
      nome: "Weet child of mine",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Weetchildofmine.mp3"),
    },
    {
      nome: "Welcome to the jungle",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Welcometothejungle.mp3"),
    },
    {
      nome: "This love",
      artista: "Maroon 5",
      playng: false,
      file: require("./musics/Thislove.mp3"),
    },
    {
      nome: "Weet child of mine",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Weetchildofmine.mp3"),
    },
    {
      nome: "Welcome to the jungle",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Welcometothejungle.mp3"),
    },
    {
      nome: "This love",
      artista: "Maroon 5",
      playng: false,
      file: require("./musics/Thislove.mp3"),
    },
    {
      nome: "Weet child of mine",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Weetchildofmine.mp3"),
    },
    {
      nome: "Welcome to the jungle",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Welcometothejungle.mp3"),
    },
    {
      nome: "This love",
      artista: "Maroon 5",
      playng: false,
      file: require("./musics/Thislove.mp3"),
    },
    {
      nome: "Weet child of mine",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Weetchildofmine.mp3"),
    },
    {
      nome: "Welcome to the jungle",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Welcometothejungle.mp3"),
    },
    {
      nome: "This love",
      artista: "Maroon 5",
      playng: false,
      file: require("./musics/Thislove.mp3"),
    },
    {
      nome: "Weet child of mine",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Weetchildofmine.mp3"),
    },
    {
      nome: "Welcome to the jungle",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Welcometothejungle.mp3"),
    },
    {
      nome: "This love",
      artista: "Maroon 5",
      playng: false,
      file: require("./musics/Thislove.mp3"),
    },
    {
      nome: "Weet child of mine",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Weetchildofmine.mp3"),
    },
    {
      nome: "Welcome to the jungle",
      artista: "Guns N Rose",
      playng: false,
      file: require("./musics/Welcometothejungle.mp3"),
    },
    {
      nome: "This love",
      artista: "Maroon 5",
      playng: false,
      file: require("./musics/Thislove.mp3"),
    },
  ]);

  const changeMusica = async (id) => {
    let curAudio = new Audio.Sound();
    let curFile = null;
    let newMusics = musicas.filter((val, k) => {
      if (id == k) {
        musicas[k].playng = true;
        curFile = musicas[k].file;
      } else {
        musicas[k].playng = false;
      }
      return musicas[k];
    });

    if (audio != null) {
      audio.unloadAsync();
    }

    try {
      await curAudio.loadAsync(curFile);
      await curAudio.playAsync();
    } catch (error) {
      console.warn("Erro na hora de tocar a musica", error);
    }
    setAudio(curAudio);
    setMusicas(newMusics);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ScrollView style={styles.container}>
        <Header />

        <View style={styles.table}>
          <Text style={styles.txtInfos}>Música</Text>
          <Text style={styles.txtInfos}>Artista</Text>
        </View>

        {musicas.map((val, k) => {
          if (val.playng) {
            return (
              <View key={k} style={styles.table}>
                <TouchableOpacity
                  onPress={() => changeMusica(k)}
                  style={styles.btnTocando}
                >
                  <Text style={[styles.txtInfos, styles.colorSelected]}>
                    <AntDesign name="play" size={15} color="#1db954" />{" "}
                    {val.nome}
                  </Text>
                  <Text style={[styles.txtInfos, styles.colorSelected]}>
                    {val.artista}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          } else {
            return (
              <View key={k} style={styles.table}>
                <TouchableOpacity
                  onPress={() => changeMusica(k)}
                  style={styles.btnTocando}
                >
                  <Text style={[styles.txtInfos, { color: "#fff" }]}>
                    <AntDesign name="play" size={15} color="#fff" /> {val.nome}
                  </Text>
                  <Text style={[styles.txtInfos, { color: "#fff" }]}>
                    {val.artista}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }
        })}
        <View style={{ paddingBottom: 100 }}></View>
      </ScrollView>
      <Player />
    </View>
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
  // Estilo Cor selecionado
  colorSelected: {
    color: "#1db954",
  },
});

// Tempo da aula 12:02
