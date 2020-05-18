import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Settings } from 'views/Settings';

const Stack = createStackNavigator();

export const SettingsStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Settings">
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
};
