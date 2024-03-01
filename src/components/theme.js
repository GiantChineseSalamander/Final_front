import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9adc90ff',
      dark: '#253f3fff'
    },
    secondary: {
        light: '#f0e1c6ff',
        main: '#fea07bff',
        dark: '#e35e5eff',    
    },
  },
  shape: {
    borderRadius: 8, // Adjust as needed
  },
  components: {
    // Customize specific component sizes here, for example, MuiButton:
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          // your custom styles
        },
        sizeMedium: {
          // your custom styles
        },
        sizeLarge: {
          // your custom styles
        },
      },
    },
    // Add other components as needed
  },
});