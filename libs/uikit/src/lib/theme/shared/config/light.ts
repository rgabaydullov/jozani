import { createTheme } from '@mui/material/styles';
import { ITheme } from '../../types';

const LIGHT_THEME = (theme: ITheme) => {
  const { fontFamily = 'Roboto, Helvetica, Arial, sans-serif' } = (theme.typography || {} as any);

  return createTheme({
    palette: {
      mode: 'light',
    },
    typography: {
      fontFamily,
    },
  });
};

export default LIGHT_THEME;
