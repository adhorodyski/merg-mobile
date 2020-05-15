import React from 'react';
import { Text, View } from 'react-native';
import { Button } from './src/styles/ui-kit/buttons';

const App: React.FC = () => {
    return (
        <View>
            <Button>
                <Text>Test</Text>
            </Button>
        </View>
    );
};

export default App;
