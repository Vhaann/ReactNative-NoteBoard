import {DELETE_NOTE, SET_NOTE, SET_NOTES} from './actionsTypes';
import {removeNote, storeNote} from './noteStorage';


export let currentNoteIndex = 0;

export const setNotes = (notes) => {
  return {
    type: SET_NOTES,
    notes
  }
}

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
