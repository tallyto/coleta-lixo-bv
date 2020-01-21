import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Main({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title="Manhã" onPress={() => { navigation.navigate("Manha") }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: 'center'
    },

});
