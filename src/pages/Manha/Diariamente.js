import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Manha from "../../db/DiariamenteManha.json";
import Quarteis from "../../db/Quarteis.json";

export default function Diariamente() {
  const [avenidas, setAvenidas] = useState(Manha);
  const [quarteis, setQuarteis] = useState(Quarteis);
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Avenidas</Text>
        <Text style={styles.description}>*INCLUSIVE AOS DOMINGOS</Text>
        {avenidas.map(item => (
          <View key={item.id} style={styles.viewList}>
            <Text>{item.name}</Text>
            <Text style={styles.textHorario}>6:40 às 15:00h</Text>
          </View>
        ))}
        <Text style={styles.title}>Quarteis</Text>
        {quarteis.map(item => (
          <View key={item.id} style={styles.viewList}>
            <Text>{item.name}</Text>
            <Text style={styles.textHorario}>6:40 às 15:00h</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  viewList: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#E8F1F2"
  },

  title: {
    fontSize: 18,
    textAlign: "center"
  },
  description: {
    textAlign: "center"
  }
});
