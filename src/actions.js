export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = (note, index) => {
    return {
        type: ADD_NOTE,
        note,
        index
    }
}

