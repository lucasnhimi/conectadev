import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import _ from 'lodash';
import typography from './typography';

const baseConfig = {
  typography,
};

const themes = [
  {
    darkMode: false,
    palette: {
      type: 'light',
      primary: {
        dark: colors.indigo.A700,
        main: colors.indigo.A400,
        light: colors.indigo.A200,
      },
      secondary: {
        dark: colors.orange.A700,
        main: colors.orange.A700,
        light: colors.orange.A200,
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white,
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
      },
    },
  },
  {
    darkMode: true,
    palette: {
      type: 'dark',
      primary: {
        dark: colors.indigo.A700,
        main: colors.indigo.A400,
        light: colors.indigo.A200,
      },
      secondary: {
        dark: colors.indigo.A700,
        main: colors.indigo.A400,
        light: colors.indigo.A200,
      },
      background: {
        default: '#282C34',
        dark: '#1c2025',
        paper: '#282C34',
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb',
      },
    },
  },
];

export default function createTheme(settings = {}) {
  const themeConfig = themes.find(
    (theme) => theme.darkMode === settings.darkMode,
  );

  const theme = createMuiTheme(_.merge({}, baseConfig, themeConfig));

  return theme;
}
