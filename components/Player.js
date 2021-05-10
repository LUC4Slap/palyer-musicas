import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";

// import { Container } from './styles';

const Player = ({
  playing,
  setPlaying,
  audioIndex,
  setAudioIndex,
  musicas,
  setMusicas,
  audio,
  setAudio,
  nomeMusica,
  setNomeMusica,
}) => {
  const handlePlay = async () => {
    let curFile = musicas[audioIndex].file;
    let novoNome = "";
    let newMusics = musicas.filter((val, k) => {
      if (audioIndex == k) {
        musicas[k].playng = true;
        curFile = musicas[k].file;
        novoNome = musicas[k].nome;
      } else {
        musicas[k].playng = false;
      }
      return musicas[k];
    });
    // setMusicas(newMusics)
    try {
      if (audio != null) {
        setPlaying(true);
        setMusicas(newMusics);
        setNomeMusica(novoNome);
        await audio.playAsync();
      } else {
        let curAudio = new Audio.Sound();
        try {
          await curAudio.loadAsync(curFile);
          await curAudio.playAsync();
        } catch (error) {
          console.warn("Erro try catch player.js else", error);
        }
        setAudio(curAudio);
        setMusicas(newMusics);
        setPlaying(true);
        setNomeMusica(novoNome);
      }
    } catch (error) {
      console.warn("Erro try catch player.js final", error);
    }
  };

  const handlePause = async () => {
    if (audio != null) {
      await audio.pauseAsync();
    }
    setPlaying(false);
  };

  const handleBack = async () => {
    let novoNome = "";
    let newIndex = audioIndex - 1;
    if (newIndex < 0) {
      newIndex = musicas.length - 1;
    }

    let curFile = musicas[newIndex].file;
    //Atualizar interface do app.
    let newMusics = musicas.filter((val, k) => {
      if (newIndex == k) {
        musicas[k].playng = true;
        curFile = musicas[k].file;
        novoNome = musicas[k].nome;
      } else {
        musicas[k].playng = false;
      }

      return musicas[k];
    });

    //Reproduzir audio em questao.
    if (audio != null) {
      audio.unloadAsync();
    }
    let curAudio = new Audio.Sound();
    try {
      await curAudio.loadAsync(curFile);
      await curAudio.playAsync();
    } catch (error) {}

    setAudio(curAudio);
    setMusicas(newMusics);
    setPlaying(true);
    setNomeMusica(novoNome);
    setAudioIndex(newIndex);
  };

  const handleNext = async () => {
    let novoNome = "";
    let newIndex = audioIndex + 1;
    if (newIndex >= musicas.length) {
      newIndex = 0;
    }
    setAudioIndex(newIndex);

    let curFile = musicas[newIndex].file;
    //Atualizar interface do app.
    let newMusics = musicas.filter((val, k) => {
      if (newIndex == k) {
        musicas[k].playng = true;
        curFile = musicas[k].file;
        novoNome = musicas[k].nome;
      } else {
        musicas[k].playng = false;
      }

      return musicas[k];
    });

    //Reproduzir audio em questao.
    if (audio != null) {
      audio.unloadAsync();
    }
    let curAudio = new Audio.Sound();
    try {
      await curAudio.loadAsync(curFile);
      await curAudio.playAsync();
    } catch (error) {}

    setAudio(curAudio);
    setMusicas(newMusics);
    setPlaying(true);
    setNomeMusica(novoNome);
  };

  return (
    <>
      <View style={styles.player}>
        <TouchableOpacity onPress={() => handleBack()} style={styles.btn}>
          <AntDesign name="banckward" size={35} color="#fff" />
        </TouchableOpacity>

        {!playing ? (
          <TouchableOpacity onPress={() => handlePlay()} style={styles.btn}>
            <AntDesign name="playcircleo" size={40} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handlePause()} style={styles.btn}>
            <AntDesign name="pausecircleo" size={40} color="#fff" />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => handleNext()} style={styles.btn}>
          <AntDesign name="forward" size={35} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.nome}>
        <Text style={styles.txtNome}>{nomeMusica}</Text>
      </View>
    </>
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
  nome: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 8,
  },
  txtNome: { color: "#fff", fontSize: 15 },
});

export default Player;
