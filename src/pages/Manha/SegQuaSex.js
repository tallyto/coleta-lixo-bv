import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Manha from "../../db/SegQuaSexManha.json";

export default function SegQuaSex() {
  const [bairros, setBairros] = useState(Manha);
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Bairros</Text>
        {bairros.map(item => (
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
  }
});
