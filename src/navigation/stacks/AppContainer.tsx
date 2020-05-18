import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from 'navigation/tabs/Main';
import { AuthenticationStack } from 'navigation/stacks/AuthenticationStack';

const Stack = createStackNavigator();

export const AppContainer: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setIsAuthenticated(!isAuthenticated);
        }, 5000);
    });

    return (
        <Stack.Navigator initialRouteName="Main" headerMode="none">
            {isAuthenticated ? (
                <Stack.Screen name="Main" component={Main} />
            ) : (
                <Stack.Screen name="Authentication" component={AuthenticationStack} />
            )}
        </Stack.Navigator>
    );
};
