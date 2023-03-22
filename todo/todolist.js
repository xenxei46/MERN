import { StyleSheet, Text, View , Button, ScrollView, TextInput} from 'react-native';
import { useState } from 'react';
import Todo from './todo';

const TodoList = () => {
    const [title, setTitle] = useState('TodoList');
    const [text, setText] = useState();
    const [list, setList] = useState(['My list']);

    const addItem = () => {
        const updatedList = list;
        updatedList.push(text);
        setList(updatedList)
        setText('')
    }

    const deleteItem = (index) => {
        const updatedList = list.filter((todo) => todo !== index);
        setList(updatedList);
      };

    return (
        <View style={{ width: '80%', marginBottom: 60}}>
            <Text style={[styles.align, styles.font]}>{title}</Text>
            <ScrollView>
            {list.map((x, index) => (
              <Todo key={index} item={x} index={index} delete={deleteItem} />
            ))}
        </ScrollView>
            <View>
                <TextInput 
                style={styles.input}
                value={text}
                onChangeText={(text) => setText(text)}
                />
                <Button title='Add item' onPress={addItem}/>  
            </View>     
        </View>
    )}

    const styles = StyleSheet.create({
        align: {
          alignSelf: 'center',
        },
        font: {
            fontSize: 20,
            // color: red,
            fontWeight: 'bold'
        },
        input: {
            borderRadius: 5,
            borderWidth: 1,
            marginBottom: 8,
            padding: 8,

        }
    })


export default TodoList;