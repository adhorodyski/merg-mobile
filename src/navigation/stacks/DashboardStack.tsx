import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from 'views/Dashboard';
import { Profile } from 'views/Profile';

const Stack = createStackNavigator();

export const DashboardStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};
