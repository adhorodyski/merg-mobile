import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppContainer } from 'navigation/stacks/AppContainer';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <AppContainer />
        </NavigationContainer>
    );
};

export default App;
