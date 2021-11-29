import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from '../Assets/styles';
import {deleteData, refreshData} from '../States';

export default function Outbox() {
  //directly using of redux states, saved a lot of lines and creating state problems.
  const data = useSelector(state => state.data);
  // const [reload, setReload] = useState(false);
  const [outboxEmpty, setOutboxEmpty] = useState(false);
  // const [outbox, setOutbox] = useState([]);
  // const [checkData, setCheckData] = useState(false);

  // const getData = () => {
  //   setOutbox(data.outbox);
  // };
  const dispatch = useDispatch();
  const deleteButton = index => {
    dispatch(deleteData({index: index, whichBox: 'outbox'}));
    //previously changing this everytime, but it is not required as I passed,
    //data in use effect instead of data.refresh, so everytime data gets updated,
    //page gets reload.
    // dispatch(refreshData(!data.refresh));
    // setReload(prev => !prev);
  };
  useEffect(() => {
    // getData();
    // console.log(data.refresh)

    //checking it directly from data.outbox.length instead of outbox.length as,
    //it takes time to save in outbox state, and then program gives error. And the purpose
    //of redux is to not create state in components.
    if (data.outbox.length === 0) {
      setOutboxEmpty(true);
    } else {
      setOutboxEmpty(false);
    }
    // setCheckData(prev => !prev);
  }, [data]);
  // useEffect(() => {
  //   if (outbox.length === 0) {
  //     setOutboxEmpty(true);
  //   } else {
  //     setOutboxEmpty(false);
  //   }
  // }, [checkData]);
  return (
    <ScrollView>
      {outboxEmpty ? (
        <Text
          style={{
            alignSelf: 'center',
            margin: 100,
            fontSize: 30,
            color: 'black',
          }}>
          No messages!
        </Text>
      ) : (
        //using data.outbox instead of inbox state to avoid creating and storing data in state.
        data.outbox.map((item, index) => {
          return (
            <View style={styles.message} key={index}>
              <Text style={styles.details}>Email : {item.email}</Text>
              <Text style={styles.details}>Message : {item.message}</Text>
              <TouchableOpacity
                style={[styles.button, {width: 100, alignSelf: 'center'}]}
                onPress={() => deleteButton(index)}>
                <Text
                  style={{color: 'white', textAlign: 'center', fontSize: 15}}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          );
        })
      )}
    </ScrollView>
  );
}
