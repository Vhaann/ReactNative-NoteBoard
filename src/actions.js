import {DELETE_NOTE, SET_NOTE} from './actionsTypes';
import {removeNote, storeNote} from './noteStorage';


export let currentNoteIndex = 0;

export const setNote = (note) => async dispatch => {
  currentNoteIndex++;

  let newNote = {
    id: note.id ? note.id : currentNoteIndex,
    key: note.id,
    title: note.title,
    content: note.content,
    pinValue: note.pinValue,
  };

  console.log('editasoeur', newNote);

  await storeNote(newNote);

  dispatch({
    type: SET_NOTE,
    note: newNote,
  });
};

export const deleteNote = index => async dispatch => {
  await removeNote(index);

  dispatch({
    type: DELETE_NOTE,
    index,
  });
};
