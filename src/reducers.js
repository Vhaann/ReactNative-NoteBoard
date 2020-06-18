import produce from 'immer';


export const initialState = {};

export default function notesReducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case 'SET_NOTE':
      let produce1 = produce(state, (draftState) => {
        const noteId = action.note.id;
        draftState[noteId] = {
          id: noteId,
          title: action.note.title,
          content: action.note.content,
          pinValue: action.note.pinValue,
        };
      });
      console.log('case add', produce1);
      return produce1;
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
