import {ADD_NOTE, DELETE_NOTE} from './actionsTypes';

export const addNote = (note, index) => {
    return {
        type: ADD_NOTE,
        note,
        index
    };
};

export const deleteNote = (index) => {
    return {
        type: DELETE_NOTE,
        index
    };
};
