import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return(
        <View style={styles.reader}>
            <Text style={styles.headerText}>Lista de tarefas</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        paddingTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
});

export default Header;
