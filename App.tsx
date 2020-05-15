import React from 'react';
import { Stacks } from 'views/Stacks';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stacks />
        </NavigationContainer>
    );
};

export default App;
