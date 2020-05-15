import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export const Dashboard: React.FC = () => {
    const [test, setTest] = useState('');

    return (
        <View>
            <Text>{test}</Text>
            <TextInput value={test} onChangeText={setTest} placeholder={'test input...'} />
        </View>
    );
};
