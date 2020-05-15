import { TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import { palette } from '../palette';

export const Button = styled.TouchableHighlight`
    width: 300px;
    height: 50px;
    background: ${palette.merg_blue_1};
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    margin: 10px auto;
    box-shadow: 0 2px 2px rgba(41, 71, 242, 0.4);
`;
