import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from 'views/profile/Profile';

const Stack = createStackNavigator();

export const ProfileStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Explore">
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};
