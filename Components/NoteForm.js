import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import TextInput from './Form/TextInput';

const NoteForm = (props) => {

  const [title, setTitle] = useState(props.initialNote ? props.initialNote.title : ''  ) ;
  const [content, setContent] = useState(props.initialNote ? props.initialNote.content : '' );

  const onFormSubmit = () => {
      props.onSubmit({ title, content, id: props.initialNote ? props.initialNote.id : undefined })

      if(!props.initialNote) {
          setTitle('' )
          setContent('' )
      }
      else {
          setTitle(props.initialNote.title)
          setContent(props.initialNote.content)
      }
  }

  return (
      <View>
          <TextInput
            onChangeText={setTitle}
            value={title}
            label={'Intitulé de la note'}/>
          <TextInput
            onChangeText={setContent}
            value={content}
            label={'Contenu de la note'}/>

          <TouchableOpacity onPressIn={onFormSubmit} onPressOut={props.closeModal} style={{ backgroundColor: 'lightgreen' }}>
              <Text> Pin </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.closeModal} style={{ backgroundColor: 'lightgrey' }}>
              <Text> Back </Text>
          </TouchableOpacity>
{/*
      <Button onPress={() => props.onSubmit({ title: title, content: content })}/>
*/}
      </View>
  );
};

export default NoteForm;
