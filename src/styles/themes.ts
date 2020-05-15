import { palette } from './palette';
import theme from 'styled-theming';

// base

export const baseBackgroundColor = theme('mode', {
    light: `${palette.merg_white}`,
    dark: `${palette.merg_black}`,
});

export const overlayBackgroundColor = theme('mode', {
    light: `${palette.lightGray}`,
    dark: `${palette.darkGray}`,
});

export const secondaryOverlayBackgroundColor = theme('mode', {
    light: `${palette.merg_white}`,
    dark: `${palette.darkGray}`,
});

// text

export const primaryTextColor = theme('mode', {
    light: `${palette.darkText}`,
    dark: `${palette.lightGray}`,
});

export const secondaryTextColor = theme('mode', {
    light: `${palette.lightText}`,
    dark: `${palette.lightText}`,
});

export const buttonTextColor = theme('mode', {
    light: `${palette.lightGray}`,
    dark: `${palette.lightGray}`,
});

// accents

export const lightBlueColor = theme('mode', {
    light: `${palette.lightBlue}`,
    dark: `${palette.lightBlue}`,
});

export const primaryBlueColor = theme('mode', {
    light: `${palette.mediumBlue}`,
    dark: `${palette.mediumBlue}`,
});

export const secondaryBlueColor = theme('mode', {
    light: `${palette.darkBlue}`,
    dark: `${palette.darkBlue}`,
});

export const successColor = theme('mode', {
    light: `${palette.merg_green_1}`,
    dark: `${palette.merg_green_1}`,
});

// shadows

export const smallShadowColor = theme('mode', {
    light: 'rgba(80, 80, 80, 0.03)',
    dark: 'rgba(160, 160, 160, 0.03)',
});

export const mediumShadowColor = theme('mode', {
    light: 'rgba(80, 80, 80, 0.15)',
    dark: 'rgba(160, 160, 160, 0.15)',
});

export const bigShadowColor = theme('mode', {
    light: 'rgba(80, 80, 80, 0.25)',
    dark: 'rgba(160, 160, 160, 0.25)',
});
