import React from 'react';
import {Button, View} from 'react-native';
import {Text} from 'react-native';

const Note = props => {
  return (
    <View>
        <Button title={'Supprimer'} color={'red'} onPress={() => props.toDelete(props.id) } />
        <Button title={'Éditer'} color={'green'} onPress={() => props.toEdit(props.title, props.content) } />
        <Text>{props.title}</Text>
        <Text>{props.content}</Text>
    </View>
  );
};
export default Note;
