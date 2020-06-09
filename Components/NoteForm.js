import React, {useState} from 'react';
import {Button, View} from 'react-native';
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
        label={'Contenu de la note'}

      />

      <Button onPress={onFormSubmit} title={'Soumettre'}/>
{/*
      <Button onPress={() => props.onSubmit({ title: title, content: content })}/>
*/}
      <Button onPress={props.closeModal} title={'ModalCloseForm'}/>

    </View>
  );
};

export default NoteForm;
