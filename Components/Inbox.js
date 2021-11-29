import React, {useEffect, useState, Fragment} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from '../Assets/styles';
import {deleteData, refreshData} from '../States/index';

export default function Inbox() {
  //directly using of redux states, saved a lot of lines and creating state problems.
  const data = useSelector(state => state.data);
  // const [reload, setReload] = useState(false);
  // const [inbox, setInbox] = useState([]);
  const [inboxEmpty, setInboxEmpty] = useState(false);
  // const [checkData, setCheckData] = useState(false);
  // const getData = () => {
  //   setInbox(data.inbox);
  // };
  const dispatch = useDispatch();
  const deleteButton = index => {
    dispatch(deleteData({index: index, whichBox: 'inbox'}));
    //previously changing this everytime, but it is not required as I passed,
    //data in use effect instead of data.refresh, so everytime data gets updated,
    //page gets reload.
    // dispatch(refreshData(!data.refresh));
    // setReload(prev => !prev);
  };
  useEffect(() => {
    // getData();
    //checking it directly from data.inbox.length instead of inbox.length as,
    //it takes time to save in inbox state, and then program gives error. And the purpose
    //of redux is to not create state in components.
    if (data.inbox.length === 0) {
      setInboxEmpty(true);
    } else {
      setInboxEmpty(false);
    }
    // setCheckData(prev => !prev);
  }, [data]);
  // useEffect(()=>{
  //   if (inbox.length === 0) {
  //     setInboxEmpty(true);
  //   } else {
  //     setInboxEmpty(false);
  //   }
  // },[checkData]);
  return (
    <Fragment>
      {inboxEmpty ? (
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
        // inbox.map((item, index) => {
        //   return (
        //     <View style={styles.message} key={index}>
        //       <Text style={styles.details}>Email : {item.email}</Text>
        //       <Text style={styles.details}>Message : {item.message}</Text>
        //       <TouchableOpacity
        //         style={[styles.button, {width: 100, alignSelf: 'center'}]}
        //         onPress={() => deleteButton(index)}>
        //         <Text
        //           style={{color: 'white', textAlign: 'center', fontSize: 15}}>
        //           Delete
        //         </Text>
        //       </TouchableOpacity>
        //     </View>
        //   );
        // })

        <FlatList
        //using data.inbox instead of inbox state to avoid creating and storing data in state.
          data={data.inbox}
          renderItem={({item, index}) => {
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
          }}
        />
      )}
    </Fragment>
  );
}
