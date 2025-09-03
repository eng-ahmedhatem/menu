import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css"
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
    typography: {
        fontFamily: `var(--mainFont) `, // هنا بتحط الخط اللي انت عايزه
    },
     palette: {
    primary: {
      main: '#bf844f', // الأزرق الافتراضي ← غيّره لأي لون
    },
    secondary: {
      main: '#9c27b0', // بنفسجي
    },
    error: {
      main: '#d32f2f', // أحمر
    },
    success: {
      main: '#2e7d32', // أخضر
    },
    background: {
      default: '#f4f4f4', // خلفية الصفحات
      paper: '#fff',      // خلفية الكروت
    },
    text: {
      primary: '#333',   // لون النص الأساسي
      secondary: '#555', // لون النص الثانوي
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)
