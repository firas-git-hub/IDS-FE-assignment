import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import './App.scss';
import NavBar from './components/nav-bar/NavBar';
import MainTheme from './styles/themes/MainTheme';

function App() {

  const [theme, changeTheme] = useState(MainTheme);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
      </ThemeProvider>
    </div>
  );
}

export default App;