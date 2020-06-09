import React from 'react';
import {View} from 'react-native';

import Note from './Note';

const Notes = props => {
  return (
    <View>
      {props.notes.map((note) => (
        <Note content={note.content} title={note.title} id={note.id} toDelete={ props.onDeleteButtonPress } toEdit={props.onSubmit}/>
      ))}
    </View>
  );
};
export default Notes;
