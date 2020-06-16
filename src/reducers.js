import {addNote, deleteNote} from './actions';
import produce from 'immer';

export const initialState = {
  1: {
    title: 'Soirée',
    content: 'yo bien ou kwa frr le boss ,lacoste tn ajd ?',
    id: 1,
    pinValue: 'fetes',
  },
  2: {title: 'Coiffeur', content: 'rdv 16h 05/06', id: 2, pinValue: 'rdv'},
  3: {
    title: 'Départ Kenou',
    content: 'repas chez kyly samedi soir',
    id: 3,
    pinValue: 'famille',
  },
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return state;
    case 'EDIT_NOTE':
      return state;
    case 'DELETE_NOTE':
      // const newState = {...state}
      // const noteId = action.index;
      // delete newState[noteId]
      return produce(state, (draftState) => {
        const noteId = action.index;
        delete draftState[noteId];
      });

    default:
      return state;
  }
}
