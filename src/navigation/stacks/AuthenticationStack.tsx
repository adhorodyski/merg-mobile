import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Landing } from 'views/Landing';
import { SignIn } from 'views/SignIn';

const Stack = createStackNavigator();

export const AuthenticationStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Landing" headerMode="none">
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    );
};
