import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const Todo = (props) => {
    return (
       <View styles={[{margin: 8, padding: 8},styles.item, ]}>
        <Text>{props.item}</Text>
        <Button
            title={'Delete'}
            color={'red'}
            onPress={() => props.delete(props.item)}
        >

        </Button>
       </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        JustifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'grey',
        borderwidth: 1,
        borderRadius: 5,
        backgroundColor: 'whitesmoke'
    }
})
export default Todo;
