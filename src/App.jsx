// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Videos from './Videos';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Dark theme 활성화
    background: {
      default: '#121212', // 배경 색상
      paper: '#1d1d1d', // Paper 컴포넌트 배경 색상
    },
    text: {
      primary: '#fff', // 텍스트 색상
      secondary: '#b0b0b0', // secondary 텍스트 색상
    },
    primary: {
      main: '#bb86fc', // 주요 색상 (예: 버튼, 링크 등)
    },
    secondary: {
      main: '#03dac6', // 보조 색상
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.08)', // hover 효과 색상
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Navigation />
            <Typography variant="h6" noWrap>
              Application
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <main style={{ marginTop: 64, padding: 16 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
