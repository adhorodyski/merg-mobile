import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from 'views/Profile';
import { Settings } from 'views/Settings';

const Stack = createStackNavigator();

export const ProfileStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Explore">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
};
