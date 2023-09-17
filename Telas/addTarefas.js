import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet, Platform } from "react-native";
import Header from "../componentes/header";
import DateTimePicker from '@react-native-community/datetimepicker';

const TelaAddTarefa = ({navigation, route}) => {
    const [tarefa, setTarefa] = useState ({nome: '', descricao: '', data : new Date(Date.now())})
    const [showDatePicker, setShowDatePicker] = useState(false)

    const adicionaTarefa = () => {
        route.params.addTarefa(tarefa);
        setTarefa ({nome: '', descricao: '', data : new Date(Date.now())});
        navigation.goBack();
    };

    const saveDate = (event, value) => {
        setTarefa({...tarefa, data: value});
        if (Platform.OS === 'android') {
            setShowDatePicker(false);
        }
    }

    return (
        <View style = {Styles.container}>
            <Header/>
            <TextInput
                style = {Styles.input}
                placeholder = "Nome da Tarefa"
                value = {tarefa.nome}
                onChangeText = {(value) => setTarefa ({...tarefa, nome: value})}
            />
            <TextInput
                style = {[Styles.input, Styles.description]}
                placeholder= "Descrição"
                multiline = {true}
                value= {tarefa.descricao}
                onChangeText= {(value) => setTarefa ({...tarefa, descricao: value})}
            />
            {!showDatePicker && (
                <View style={Styles.dateButton}>
                    <Button title = {tarefa.data.toLocaleTimeString().split(' ')[0]} 
                    onPress={() => setShowDatePicker(true)}/>
                </View>
            )}
            {showDatePicker && (
                <DateTimePicker
                    value={tarefa.data}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={saveDate}
                    style={Styles.datePicker}
                />
            )}
            <Button title = "Salvar" onPress={adicionaTarefa}/>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    description: {
        height: 120
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    dateButton:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20'
    },
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }    
}); 

export default TelaAddTarefa;