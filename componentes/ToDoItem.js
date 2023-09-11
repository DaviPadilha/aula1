import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Switch, LayoutAnimation, UIManager, Platform } from 'react-native';

if(Platform.OS === 'android'){
  UIManager.setLayoutAnimationEnabledExperimental (true);  
}

const TodoItem = ({ item, trocaEstado, deleta}) => {
    const [isExpanded, setIsExpanded] = useState (false)
    const expand = () => {
        LayoutAnimation.spring()
        setIsExpanded(!isExpanded)
    }

    return (
       <View style={styles.container}> 
            <View style={styles.TodoItem}>
                <Switch
                value={item.completado}
                onValueChange={() => trocaEstado(item.id)}
                />
                <TouchableOpacity onPress={expand}>
                    <Text style={item.completado ? styles.completedText : styles.text}>
                    {item.text}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleta(item.id)}>
                <Text style={styles.deleteButton}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    ); 
     
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ededed',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
            
    TodoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        fontSize: 18,
    },
    completedText: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        color: '#ccc',
    },
    deleteButton: {
        color: 'red',
        fontSize: 18,
    },
});

export default TodoItem;
