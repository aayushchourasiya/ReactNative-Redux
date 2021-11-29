import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inbox from './Inbox';
import Outbox from './Outbox'
const Messages = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Inbox" component={Inbox}/>
            <Drawer.Screen name="Outbox" component={Outbox}/>
        </Drawer.Navigator>
    )
}

export default Messages
