import * as React from 'react';
import {
  View,
  Modal,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import Notes from './Components/Notes';
import NoteForm from './Components/NoteForm';

// let nrbNotes = state.notes.length

function App() {

  const style = StyleSheet.create({
    Cork: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
    },
  });

  // const handleSubmit = (note) => {
  //   /* console.log('submitted', note);*/
  //
  //   if (note.id) {
  //     editNote(note);
  //   } else {
  //     addNote(note);
  //   }
  // };
  //
  // const addNote = (note) => {
  //   setNotes([...notes, {...note, id: currentNoteIndex}]);
  //
  //   currentNoteIndex++;
  //   nbrNotes++;
  //
  //   console.log(currentNoteIndex);
  // };
  //
  // const editNote = (editedNote) => {
  //   const updatedNotes = notes.map((note) => {
  //     if (editedNote.id === note.id) {
  //       return editedNote;
  //     }
  //
  //     return note;
  //   });
  //
  //   setNotes(updatedNotes);
  // };
  //
  // const deleteNote = (id) => {
  //   let filteredNote = notes.filter((note) => id != note.id);
  //
  //   setNotes(filteredNote); /* notes.filter(note => id === note.id ) ) */
  //
  //   nbrNotes--;
  // };

  // const openModal = (noteId = 0) => {
  //   setToEditNOteId(noteId);
  //   setModalToVisible(true);
  // };

  return (
    <ImageBackground
      source={require('./src/img/corkboard.jpg')}
      alt="cork board"
      style={style.Cork}>
      <View>
        <Notes
          // openModal={openModal}
        />

        <Modal animationType={'fade'} visible={false}>
          <NoteForm
            //onSubmit={handleSubmit}
            // initialNote={
            //   toEditNoteId
            //     ? notes.find((note) => note.id === toEditNoteId)
            //     : false
            // }
          />
        </Modal>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginHorizontal: 5,
          }}>
          <TouchableOpacity
            // onPress={() => openModal()}
            style={{
              borderRadius: 20,
              backgroundColor: 'lightgreen',
              width: '40%',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
              }}>
              Add Note
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 20,
              backgroundColor: 'pink',
              width: '40%',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
              }}>
              You stored 3 notes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
export default App;
