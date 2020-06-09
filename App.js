import * as React from 'react';
import {useState} from 'react';
import {View, Modal, Button, AlertStatic as Alert} from 'react-native';

import Notes from './Components/Notes';
import NoteForm from './Components/NoteForm';

let currentNoteIndex = 3

export default function App() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [notes, setNotes] = useState([{title: 'titre', content: 'pute', id: 1}, {title: 'titrev2', content: 'putev2', id: 2}]);
  const [modalIsVisible, setModalToVisible] = useState(false)

  const addNote = note => {
/*
      notes.push( note )
*/
      setNotes( [ ...notes, { ...note, id: currentNoteIndex } ] )

      currentNoteIndex++
  }

  const deleteNote = id => {
      /* console.log(id) */
      let filteredNote = notes.filter(note => id != note.id )
      setNotes( filteredNote ) /* notes.filter(note => id === note.id ) ) */
  }

  return (
    <View>
      <Notes notes={notes} onDeleteButtonPress={deleteNote} />
      <Modal animationType={'fade'} visible={modalIsVisible} onRequestClose={() => {
          Alert.alert("Formulaire d'ajout de Note, Fermé !")
      }}>
        <NoteForm onSubmit={addNote} closeModal={() => setModalToVisible(false)} initialNote={notes[1]}/>
      </Modal>
        {/* onPress attends une fonction setModalToVisible n'en est pas une on rajoute donc " () => pour spécifier qu'on lui passe une fonction qui éxécute setModalTOVisible " */}
        <Button onPress={ () => setModalToVisible(true) } title={'ModalForm'} />
    </View>
  );
}
