import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Manha from './../../db/TerQuiSabManha.json'

export default function TerQuiSab() {
    const [bairros, setBairros] = useState(Manha)
    return (
        <>
        <ScrollView style={styles.container}>
          {bairros.map((item) => (
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
        backgroundColor: '#fff',
        
    },
    viewList: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#E8F1F2"
      },
   
});
