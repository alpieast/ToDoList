import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './components/header'

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'react ogren', key: '1'},
    {text: 'pratik yap', key: '2'},
    {text: 'uygulamaya gec', key: '3'}
  ]);

  return (
    <View style={styles.container}>
      {/*header */}
      <Header />
      <View style={styles.content}>
        {/*To Form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
            <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
