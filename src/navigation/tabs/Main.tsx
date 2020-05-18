import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ExploreStack } from 'navigation/stacks/ExploreStack';
import { ProfileStack } from 'navigation/stacks/ProfileStack';
import { DashboardStack } from 'navigation/stacks/DashboardStack';

const Tab = createBottomTabNavigator();

export const Main: React.FC = () => {
    return (
        <Tab.Navigator initialRouteName="Dashboard" tabBarOptions={{ showIcon: true, showLabel: false }}>
            <Tab.Screen
                name="Dashboard"
                component={DashboardStack}
                options={{
                    tabBarIcon: ({ color }) => (color: string) => (
                        <Ionicons name="md-infinite" size={28} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreStack}
                options={{
                    tabBarIcon: ({ color }) => (color: string) => <Ionicons name="md-search" size={28} color={color} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ color }) => (color: string) => <Ionicons name="md-person" size={28} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};
