import React from 'react';
import { View, Text } from 'react-native';
import Home from '../pages/Home';
import Concursos from '../pages/Concursos'

import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Routes(){

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Home}/>
            
        </Drawer.Navigator>
    );
}