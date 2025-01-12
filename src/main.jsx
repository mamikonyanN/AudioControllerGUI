import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: '#ccc',
        },
        colorPrimary: {
          '&.Mui-checked': {
            color: '#ccc',
          },
        },
        track: {
          opacity: 1,
          backgroundColor: '#f44336',
          '.Mui-checked.Mui-checked + &': {
            opacity: 1,
            backgroundColor: '#66bb6a',
          },
        },
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
)
