//import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Header from './Components/Header';
import Main from './Components/Main';
import { createTheme, ThemeProvider } from '@mui/material';


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Mukta'
      ].join(','),
    },});

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
