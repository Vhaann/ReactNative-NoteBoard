import * as React from 'react';
import {useEffect, useState} from 'react';
import {ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Notes from './Components/Notes';
import NoteForm from './Components/NoteForm';
import {bindActionCreators} from 'redux';
import {currentNoteIndex, setNote} from './src/actions';
import {connect} from 'react-redux';

function App(props) {
  const [modalIsVisible, setModalToVisible] = useState(false);
  const [toEditNoteId, setToEditNOteId] = useState(0);

  const style = StyleSheet.create({
    Cork: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
    },
  });

  useEffect(() => {
      (async() => {
          // recuperer les notes de l'async storage

          // set les notes dans le store redux
      })()
  }, []);

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

  const openModal = ( noteId = 0 ) => {
    setToEditNOteId(noteId);
    setModalToVisible(true);
  };

    return (
    <ImageBackground
      source={require('./src/img/corkboard.jpg')}
      alt="cork board"
      style={style.Cork}>
      <View>
        <Notes openModal={openModal} />

        <Modal animationType={'fade'} visible={modalIsVisible}>
          <NoteForm
            onSubmit={props.setNote}
            closeModal={() => setModalToVisible(false)}
            initialState={
              toEditNoteId
                ? props.notes.find((note) => note.id === toEditNoteId)
                : false
            }
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
            onPress={() => openModal()}
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
              You stored {currentNoteIndex} notes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

function mapState(state) {
    return {
        notes: Object.values(state.notesReducer)
    }
}

function mapDispatch(dispatch) {
  return bindActionCreators({setNote}, dispatch);
}

export default connect(mapState, mapDispatch)(App);
