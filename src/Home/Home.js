import React from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components';

export const Icon = styled.Image`
  height: 30px;
  width: 30px;
  margin: auto;
`

export const StyledView = styled.View`
  display: flex;
  height: 100%;
  justify-content: center;
  background: #ffffff;
`;

export const StyledText = styled.Text`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
`;

class HomeScreen extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>Home</StyledText>
      </StyledView>
    );
  }
}

export default HomeScreen;
