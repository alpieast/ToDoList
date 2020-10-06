import React from 'react';
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';

export default function TodoItem({item, pressHandler}){

    return(

        <View style={styles.item}>

            <Text style={styles.todoText}>{item.text}</Text>

            <TouchableOpacity style={styles.delete} onPress={ () => pressHandler(item.key)}>
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>

        </View>
        

    )
};

const styles = StyleSheet.create({
    item: {
        padding:16,
        marginTop:16,
        borderColor: 'coral',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    deleteText:{
        flex:1,
        color: 'red'
    },
    todoText:{
        flex: 5
    }
})