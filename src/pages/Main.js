import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Manhã"
        onPress={() => {
          navigation.navigate("Manha");
        }}
      />
      <Button
        title="Tarde"
        onPress={() => {
          navigation.navigate("Manha");
        }}
      />
      <Button
        title="Noite"
        onPress={() => {
          navigation.navigate("Manha");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
