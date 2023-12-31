import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './componentes/header';
import TodoList from './componentes/ToDoList';
import TelaAddTarefa from './Telas/addTarefas';
import TodoItem from './componentes/ToDoItem';


const Stack = createStackNavigator();
  export default function App() {
     const [tarefas, setTarefas] = useState([ ]);
     const deleta = (tarefaId) => {
       setTarefas ((Tarefas) => {
         let novasTarefas = Tarefas. filter((item) => item.id !== tarefaId)
         return novasTarefas
       }) 
    }
    const trocaEstado = (tarefaId) => {
      setTarefas ((Tarefas) => 
        {
        let novasTarefas = Tarefas.map((item) =>
        item.id === tarefaId ? {...item, completado: !item.completado}:item)
        return novasTarefas
        })
    }
    const adicionaTarefa = (text) => {
      setTarefas ((Tarefas) => [
        ...Tarefas,
        {id: Date.now(), text: text, completed: false},
      ]);
    };
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = 'Home' options = {{ headerShown: false}}>
            {() => (
              <View style = {styles.container}>
                <Header/>
                <TodoList itens = {tarefas} trocaEstado = {trocaEstado} deleta = {deleta}/>
                <StatusBar style = "auto"/>
              </View>
            )}
          </Stack.Screen>
          <Stack.Screen
            options = {{headerShown: false}}
            name = "addTarefa"
            component = {TelaAddTarefa}
            initialParams = {{ addTarefa: adicionaTarefa}}    
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});