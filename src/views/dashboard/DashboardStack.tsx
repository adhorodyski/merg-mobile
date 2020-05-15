import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from 'views/dashboard/Dashboard';
import { Profile } from 'views/profile/Profile';

const Stack = createStackNavigator();

export const DashboardStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Dashboard} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};
