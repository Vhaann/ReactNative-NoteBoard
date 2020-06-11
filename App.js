import * as React from 'react';
import {useState} from 'react';
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

let currentNoteIndex = 4;

export default function App() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [notes, setNotes] = useState([
    {title: 'Soirée', content: 'yo bien ou kwa frr le boss ,lacoste tn ajd ?' , id: 1, pinValue: 'fetes' },
    {title: 'Coiffeur', content: 'rdv 16h 05/06', id: 2, pinValue: 'rdv' },
    {title: 'Départ Kenou', content: 'repas chez kyly samedi soir', id: 3, pinValue: 'famille' },
  ]);
  const [modalIsVisible, setModalToVisible] = useState(false);
  const [toEditNoteId, setToEditNOteId] = useState(0);

  const style = StyleSheet.create({
    Cork: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
    },
  });

  const handleSubmit = (note) => {
      console.log('submitted', note);

    if(note.id) {
        editNote(note);
    } else {
        addNote(note);
    }
  };

  const addNote = note => {
      setNotes([...notes, {...note, id: currentNoteIndex}]);

      currentNoteIndex++;
  };

  const editNote = editedNote => {
      const updatedNotes = notes.map(note => {
          if(editedNote.id === note.id) {
              return editedNote;
          }

          return note;
      })

      setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    let filteredNote = notes.filter((note) => id != note.id);
    setNotes(filteredNote); /* notes.filter(note => id === note.id ) ) */
  };

  const openModal = (noteId = 0) => {
    setToEditNOteId(noteId);
    setModalToVisible(true);
  };

  return (
    <ImageBackground
      source={require('./assets/corkboard.jpg')}
      alt="cork board"
      style={style.Cork}>
      <View>
        <Notes
          notes={notes}
          onDeleteButtonPress={deleteNote}
          openModal={openModal}
        />

        <Modal animationType={'fade'} visible={modalIsVisible}>
          <NoteForm
            onSubmit={handleSubmit}
            closeModal={() => setModalToVisible(false)}
            initialNote={
              toEditNoteId
                ? notes.find((note) => note.id === toEditNoteId)
                : false
            }
          />
        </Modal>

        {/* () => spécifie qu'on lui passe une fonction qui éxécute setModalTOVisible " */}
        <TouchableOpacity
          onPress={() => openModal()}
          style={{
            borderRadius: 20,
            backgroundColor: 'lightgreen',
            width: '50%',
            alignSelf: 'center',
            paddingVertical: 10,
          }}>

          <Text
            style={{
              textAlign: 'center',
            }}>
            Add Note
          </Text>

        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
