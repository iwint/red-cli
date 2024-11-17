/** @format */

import { MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper';
import { Dimensions } from 'react-native';

export interface ThemeProps extends MD3Theme {
    colors: MD3Theme['colors'] & {
        others: {
            background: string;
        };
    };
    getResponsive: (valueInPixels: number, deviceDimension: 'width' | 'height') => number;
    dimension: {
        width: number;
        height: number;
    };
    fontFamily: {
        exo: {
            regular: string;
            semiBold: string;
            medium: string;
            bold: string;
        };
        roboto: {
            regular: string;
            medium: string;
            bold: string;
        };
    };
}

const getResponsive = (valueInPixels: number, deviceDimension: 'width' | 'height'): number => {
    const dimension = Dimensions.get('window')[deviceDimension];
    const valuePercentage = valueInPixels / dimension;
    return dimension * valuePercentage;
};

export const LightModeTheme: ThemeProps = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#fff',
        secondary: '#662CC5',
        background: '#000',
        ...MD3LightTheme.colors.elevation,
        others: {
            background: '#ffffff',
        },
    },
    dimension: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    fontFamily: {
        exo: {
            regular: 'Exo-Regular',
            semiBold: 'Exo-SemiBold',
            medium: 'Exo-Medium',
            bold: 'Exo-Bold',
        },
        roboto: {
            regular: 'Roboto-Regular',
            medium: 'Roboto-Medium',
            bold: 'Roboto-Bold',
        },
    },
    getResponsive: getResponsive,
};

export const DarkModeTheme: ThemeProps = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        ...MD3DarkTheme.colors.elevation,
        primary: '#000',
        background: '#fff',
        others: {
            background: '#111827',
        },
    },
    dimension: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    fontFamily: {
        exo: {
            regular: 'Exo-Regular',
            semiBold: 'Exo-SemiBold',
            medium: 'Exo-Medium',
            bold: 'Exo-Bold',
        },
        roboto: {
            regular: 'Roboto-Regular',
            medium: 'Roboto-Medium',
            bold: 'Roboto-Bold',
        },
    },
    getResponsive: getResponsive,
};

export const getTheme = (isDarkMode: boolean) => {
    return isDarkMode ? DarkModeTheme : LightModeTheme;
};
