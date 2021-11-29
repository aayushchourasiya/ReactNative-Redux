import React, {createRef, useState} from 'react';
import {View, Text, TextInput, Switch, TouchableHighlight} from 'react-native';
import {styles} from '../Assets/styles';
import {useDispatch, useSelector} from 'react-redux';
import {save , refreshData} from '../States/index';

const Write = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const messageRef = createRef();
  const data = useSelector(state=>state.data);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
  };
  const dispatch = useDispatch();
  const saveData = () => {
    if (email === '' || message === '') {
      alert('Please fill the details completely!');
    } else {
      const type = isEnabled ? 'outbox' : 'inbox';
      const value = {email: email, message: message};
      dispatch(save({type: type, value: value}));
      //previously changing this everytime, but it is not required as I passed,
      //data in use effect instead of data.refresh, so everytime data gets updated,
      //page gets reload.
      // dispatch(refreshData(!data.refresh));
      alert('Data Saved!');
      setEmail('');
      setMessage('');
      setIsEnabled(prev => (prev = false));
    }
  };
  return (
    <View style={styles.view}>
      <TextInput
        placeholder="Your email here!"
        keyboardType="email-address"
        returnKeyType="next"
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        onSubmitEditing={()=>messageRef.current.focus()}
      />
      <TextInput
        placeholder="Your message here!"
        multiline={true}
        style={styles.input}
        value={message}
        onChangeText={text => setMessage(text)}
        ref={messageRef}
      />
      <Text style={{fontSize: 20, color: 'black'}}>Save your message to:</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 200,
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Inbox</Text>
        <Switch
          trackColor={{false: 'black', true: 'black'}}
          thumbColor={isEnabled ? 'red' : 'magenta'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{fontSize: 20, color: 'black'}}>Outbox</Text>
      </View>
      <TouchableHighlight onPress={saveData} style={styles.button}>
        <Text style={{fontSize: 20, color: 'white'}}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Write;
