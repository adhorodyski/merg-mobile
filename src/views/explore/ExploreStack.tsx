import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Explore } from '@views/explore';
import { Profile } from '@views/profile';

const Stack = createStackNavigator();

export const ExploreStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Explore">
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};
