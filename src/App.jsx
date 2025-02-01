import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Hero from './components/Hero';
import Features from './components/Features';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#000000',
      paper: '#111111',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <Features />
    </ThemeProvider>
  );
}

export default App;