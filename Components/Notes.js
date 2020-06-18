import React from 'react';
import {View} from 'react-native';

import Note from './Note';
import {bindActionCreators} from 'redux';
import {deleteNote} from '../src/actions';
import {connect} from 'react-redux';

const Notes = (props) => {
    console.log('pute', props.notes )
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 28
      }}>

      {props.notes.map((note) => (
        <View
          key={note.id}
          style={{
            width: '33%',
          }}>
          <Note
            content={note.content}
            title={note.title}
            id={note.id}
            pinValue={note.pinValue}
            toEdit={props.onSubmit}
            toDelete={props.deleteNote}
            openForm={props.openModal}
          />
        </View>
      ))}

    </View>
  );
};

const mapStateToProps = state => {
    return {
        notes: Object.values(state.notesReducer)
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({deleteNote}, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Notes);
