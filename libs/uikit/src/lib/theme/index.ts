import { LIGHT_THEME, DARK_THEME } from './shared';
import { ITheme } from './types';

export const getTheme = (
  mode: 'dark' | 'light' = 'dark',
  theme: ITheme,
) => {
  return mode === 'light'
    ? LIGHT_THEME(theme)
    : DARK_THEME(theme);
}

export * from './shared';
export { ThemeProvider } from './shared/provider';
