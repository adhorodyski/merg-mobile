import { palette } from './palette';
import theme from 'styled-theming';

export const baseBackgroundColor = theme('mode', {
    light: `${palette.merg_white}`,
    dark: `${palette.merg_black}`,
});
