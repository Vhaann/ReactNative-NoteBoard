import AsyncStorage from '@react-native-community/async-storage';

export const storeNotes = notes => AsyncStorage.setItem('notes', JSON.stringify(notes));

export const storeNote = async note => {
    console.log('notito', note);
    let notes = await getNotes();

    notes[note.id] = note;

    console.log('nouvelles notes', notes, note.id);

    return storeNotes(notes);
}

export const removeNote = async id => {
    const notes = await getNotes();

    delete notes[id];

    console.log('notes left', notes);

    storeNotes(notes);
}

export const getNotes = async () => {
    const notes = await AsyncStorage.getItem('notes');

    return JSON.parse(notes);
};
